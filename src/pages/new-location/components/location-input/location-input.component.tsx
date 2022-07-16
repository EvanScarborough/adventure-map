import { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
    Suggestion as GoogleSuggestion
} from 'react-places-autocomplete';
import { TextInput } from '../../../../components/form.styled';
import { SectionHeader, SmallNote } from '../../../../components/typography.styled';
import { getBlankLocation, Location } from '../../../../types/location';
import { LocationInputArea, Suggestion, SuggestionArea } from '../../new-location.styled';

const getMatchRank = (location: Location, filter: string): number => {
    const lcName = location.name.toLowerCase();
    const lcFilter = filter.toLowerCase();
    if (lcName.toLowerCase().startsWith(lcFilter)) return 9000 + (location.adventureCount ?? 0);
    if (lcName.toLowerCase().indexOf(lcFilter) >= 0) return 8000 + (location.adventureCount ?? 0);
    return 0;
};
const filterLocations = (locations: Location[], filter: string): Location[] => {
    if (filter === '') return [];
    return locations
        .map(l => { return { location: l, rank: getMatchRank(l, filter)}})
        .filter(lr => lr.rank > 100)
        .sort((a, b) => b.rank - a.rank)
        .slice(0, 5)
        .map(lr => lr.location);
};

interface LocationInputProps {
    locations: Location[],
    selectLocation(location: Location):void
};
const LocationInput = ({ locations, selectLocation }: LocationInputProps) => {
    const [address, setAddress] = useState("");

    const selectExisting = (location: Location) => {
        setAddress(location.name);
        selectLocation(location);
    }
    const selectGoogle = (location: GoogleSuggestion) => {
        setAddress(location.description);
        geocodeByAddress(location.description)
            .then(results => {
                console.log(results);
                getLatLng(results[0])
                    .then(latLng => {
                        selectLocation({
                            ...getBlankLocation(),
                            locationId: -1,
                            latitude: latLng.lat,
                            longitude: latLng.lng,
                            name: location.description,
                            locationType: results[0].types.find(t => t === "restaurant" || t === "food" || t === "bar")
                                ? "Restaurant" :
                                results[0].types.find(t => t === "store")
                                ? "Shopping" : "Experience",
                            addressLine1: results[0].address_components
                                .filter(c => c.types.find(t => t === "street_number" || t === "route"))
                                .map(c => c.long_name)
                                .join(' '),
                            addressLine2: results[0].address_components
                                .filter(c => c.types.find(t => t === "subpremise"))
                                .map(c => c.long_name)
                                .join(' '),
                            neighborhood: results[0].address_components.find(c => c.types.find(t => t === "neighborhood"))?.short_name ?? "",
                            city: results[0].address_components.find(c => c.types.find(t => t === "locality"))?.short_name ?? "",
                            state: results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1"))?.short_name ?? "",
                            country: results[0].address_components.find(c => c.types.find(t => t === "country"))?.short_name ?? "",
                            zipCode: results[0].address_components.find(c => c.types.find(t => t === "postal_code"))?.long_name ?? ""
                        });
                    })
                    .catch(error => console.error('Error', error));
            })
            .catch(error => console.error('Error', error));
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={e=>setAddress(e)}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <>
                <SectionHeader>Where was this Adventure?</SectionHeader>
                <TextInput
                    placeholder="Search Locations"
                    limitWidth={1}
                    {...getInputProps()}
                />
                <LocationInputArea>
                    {(address !== "" && (loading || (suggestions !== null && suggestions.length > 0))) && <SuggestionArea>
                        {
                            filterLocations(locations, address).map((l,i) =>
                                <Suggestion {...getSuggestionItemProps({
                                    id: l.locationId.toString(),
                                    active: true,
                                    index: i,
                                    description: l.name,
                                    placeId: l.locationId.toString(),
                                    formattedSuggestion: {
                                        mainText: l.name,
                                        secondaryText: l.addressLine1
                                    },
                                    matchedSubstrings: [],
                                    terms: [],
                                    types: []
                                })} key={l.locationId} onClick={()=>selectExisting(l)}>{l.name}</Suggestion>)
                        }
                        {(suggestions !== null && suggestions.length > 0) && <SmallNote key={-1} padding='0 0 0 6px'>Google Suggestions</SmallNote>}
                        {
                            suggestions.map((s) => 
                                <Suggestion {...getSuggestionItemProps(s)} key={s.id} onClick={()=>selectGoogle(s)}>{s.description}</Suggestion>)
                        }
                    </SuggestionArea>}
                </LocationInputArea>
            </>
            )}
        </PlacesAutocomplete>
        );
};

export default LocationInput;