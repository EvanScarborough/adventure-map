import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../api/api';
import AuthContext from './auth-context';
import { Location } from '../types/location';

const useLocations = () => {
    const auth = React.useContext(AuthContext);
    const [locations, setLocations] = useState<Location[]>([]);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (auth){
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

    return {
        locations: locations,
        errorMessage: errorMessage
    };
};

export default useLocations;