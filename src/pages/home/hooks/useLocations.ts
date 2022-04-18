import React, { useEffect, useState } from 'react';
import { get, post } from '../../../api/api';
import AuthContext from '../../../hooks/auth-context';
import { Location } from '../../../types/location';

const useLocations = () => {
    const auth = React.useContext(AuthContext);
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        if (auth){
            get('/location', auth)
                .then(data => {
                    setLocations(data as Location[]);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }, [auth?.userId]);

    return {
        locations: locations
    };
};

export default useLocations;