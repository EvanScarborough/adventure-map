import { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { TextInput } from '../../../../components/form.styled';
import { SmallNote, SmallTitle } from '../../../../components/typography.styled';
import { Location } from '../../../../types/location';
import { LocationInputArea, Suggestion, SuggestionArea } from '../../new-adventure.styled';

const getMatchRank = (location: Location, filter: string): number => {
    const lcName = location.name.toLowerCase();
    const lcFilter = filter.toLowerCase();
    if (lcName.toLowerCase().startsWith(lcFilter)) return 9000 + location.adventureCount;
    if (lcName.toLowerCase().indexOf(lcFilter) >= 0) return 8000 + location.adventureCount;
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
    locations: Location[]
};
const LocationInput = ({ locations }: LocationInputProps) => {
    const [address, setAddress] = useState("");

    return (
        <PlacesAutocomplete
            value={address}
            onChange={e=>setAddress(e)}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <>
                <SmallTitle>Where was this Adventure?</SmallTitle>
                <TextInput
                    placeholder="Search Locations"
                    limitWidth={1}
                    {...getInputProps()}
                />
                <LocationInputArea>
                    {(address !== "" && (loading || (suggestions !== null && suggestions.length > 0))) && <SuggestionArea>
                        {
                            filterLocations(locations, address).map((l,i) =>
                                <Suggestion key={i}>{l.name}</Suggestion>)
                        }
                        {(suggestions !== null && suggestions.length > 0) && <SmallNote padding='0 0 0 6px'>Google Suggestions</SmallNote>}
                        {
                            suggestions.map((s,i) => 
                                <Suggestion key={s.id}>{s.description}</Suggestion>)
                        }
                    </SuggestionArea>}
                </LocationInputArea>
            </>
            )}
        </PlacesAutocomplete>
        );
};

export default LocationInput;