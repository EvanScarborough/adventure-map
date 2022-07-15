import { useState } from "react";
import { BackgroundArea, Button, DottedDivider, MainArea, PageArea, RowLayout } from "../../components/basic.styled";
import { FancyHeader } from "../../components/typography.styled";
import useLocations from "../../hooks/useLocations";
import { Location } from "../../types/location";
import LocationInput from "./components/location-input/location-input.component";
import ConfirmMap from "./components/confirm-map/confirm-map.component";
import { useNavigate } from "react-router-dom";
import { ButtonInput, Form, Label, Select, SelectOption, TextArea, TextInput } from "../../components/form.styled";
import { buildNewLocationRequest } from "../../types/requests/new-location-request";
import { MarkerDot } from "../home/home.styled";
import { LocationType } from "../../types/location-type";

const NewLocationPage = () => {
    const { locations, addLocation } = useLocations();
    const [selectedLocation, setSelectedLocation] = useState<Location|null>(null);
    const [locationConfirmed, setLocationConfirmed] = useState(false);

    const navigate = useNavigate();

    const submitNewLocation = () => {
        if (selectedLocation)
            addLocation(buildNewLocationRequest(selectedLocation))
                .then(data => {
                    if (data) {
                        navigate(`/location/${data.locationId}/new-adventure`);
                    }
                });
    };

    return (
        <PageArea>
            <BackgroundArea/>
            <MainArea>
                <FancyHeader center={1}>New Adventure!</FancyHeader>
                <DottedDivider />
                {
                    (!locationConfirmed || selectedLocation == null) ?
                        <>
                            <LocationInput locations={locations} selectLocation={setSelectedLocation} />
                            {
                                selectedLocation && <>
                                    <ConfirmMap lat={selectedLocation.latitude} lng={selectedLocation.longitude} />
                                    <Button onClick={() => {
                                        if (selectedLocation.locationId >= 0) {
                                            navigate(`/location/${selectedLocation.locationId}`);
                                        }
                                        else {
                                            setLocationConfirmed(true);
                                        }
                                    }}>Continue</Button>
                                </>
                            }
                        </> :
                        <>
                            <Form maxWidth={400} margin="0 0 30px 0" onSubmit={e => {e.preventDefault(); submitNewLocation()}}>
                                <Label htmlFor="name">Name</Label>
                                <TextInput type="text" id="name" name="name" value={selectedLocation.name}
                                    onChange={e => setSelectedLocation({...selectedLocation,name:e.target.value})} />
                                <Label htmlFor="description">Description</Label>
                                <TextArea rows={4} id="description" name="description" value={selectedLocation.description}
                                    onChange={e => setSelectedLocation({...selectedLocation,description:e.target.value})} />
                                <Label htmlFor="locationType">Location Type</Label>
                                <RowLayout>
                                    <MarkerDot displaySimple={1} large={1} locationType={selectedLocation.locationType} adventureCount={1} />
                                    <Select width="100%" id="locationType" name="locationType" value={selectedLocation.locationType}
                                        onChange={e => setSelectedLocation({...selectedLocation,locationType:e.target.value as LocationType})}>
                                        <SelectOption value="Restaurant">Restaurant</SelectOption>
                                        <SelectOption value="Shopping">Shopping</SelectOption>
                                        <SelectOption value="Experience">Experience</SelectOption>
                                        <SelectOption value="PointOfInterest">Point of Interest</SelectOption>
                                    </Select>
                                </RowLayout>
                                <Label htmlFor="addressLine1">Address Line 1</Label>
                                <TextInput type="text" id="addressLine1" name="addressLine1" value={selectedLocation.addressLine1}
                                    onChange={e => setSelectedLocation({...selectedLocation,addressLine1:e.target.value})} />
                                <Label htmlFor="addressLine2">Address Line 2</Label>
                                <TextInput type="text" id="addressLine2" name="addressLine2" value={selectedLocation.addressLine2}
                                    onChange={e => setSelectedLocation({...selectedLocation,addressLine2:e.target.value})} />
                                <Label htmlFor="neighborhood">Neighborhood</Label>
                                <TextInput type="text" id="neighborhood" name="neighborhood" value={selectedLocation.neighborhood}
                                    onChange={e => setSelectedLocation({...selectedLocation,neighborhood:e.target.value})} />
                                <Label htmlFor="city">City</Label>
                                <TextInput type="text" id="city" name="city" value={selectedLocation.city}
                                    onChange={e => setSelectedLocation({...selectedLocation,city:e.target.value})} />
                                <Label htmlFor="state">State</Label>
                                <TextInput type="text" id="state" name="state" value={selectedLocation.state}
                                    onChange={e => setSelectedLocation({...selectedLocation,state:e.target.value})} />
                                <Label htmlFor="country">Country</Label>
                                <TextInput type="text" id="country" name="country" value={selectedLocation.country}
                                    onChange={e => setSelectedLocation({...selectedLocation,country:e.target.value})} />
                                <Label htmlFor="zipCode">Zip Code</Label>
                                <TextInput type="text" id="zipCode" name="zipCode" value={selectedLocation.zipCode}
                                    onChange={e => setSelectedLocation({...selectedLocation,zipCode:e.target.value})} />
                                <RowLayout>
                                    <Button width="100%" onClick={() => setLocationConfirmed(false)}>Back</Button>
                                    <ButtonInput width="100%" type="submit" value="Continue" />
                                </RowLayout>
                            </Form>
                        </>
                }
            </MainArea>
        </PageArea>
    );
};

export default NewLocationPage;