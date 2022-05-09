import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../api/api';
import AuthContext from './auth-context';
import { Location } from '../types/location';
import NewLocationRequest from '../types/requests/new-location-request';

const useLocations = () => {
    const auth = React.useContext(AuthContext);
    const [locations, setLocations] = useState<Location[]>([]);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            get<Location[]>('/location', auth)
                .then(response => {
                    if (!response.error) {
                        setLocations(response.data);
                    }
                    else if (response.status == 401) {
                        navigate("/login");
                    }
                    else {
                        setErrorMessage(response.errorMessage);
                    }
                })
                .catch(e => {
                    setErrorMessage("Something went wrong.");
                });
        }
    }, [auth?.userId]);

    const addLocation = (request: NewLocationRequest): Promise<Location|void> => {
        return post<Location>('/location', request, auth)
            .then(response => {
                if (!response.error) {
                    setLocations([...locations, response.data]);
                }
                else {
                    setErrorMessage(response.errorMessage);
                }
                return response.data;
            })
            .catch(e => {
                setErrorMessage("Something went wrong.");
            });
    };

    return {
        locations: locations,
        errorMessage: errorMessage,
        addLocation: addLocation
    };
};

export default useLocations;