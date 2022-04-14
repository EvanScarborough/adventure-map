import React from "react";
import { Location } from "../../types/location";
import Map from "./components/map/map.component";

const HomePage = () => {

    const locations:Location[] = [
        {
            LocationId:0,
            Name:"The Glass House",
            Description:"A boujie LoDo apartment building",
            LocationType:"Point of Interest",
            AddressLine1:"1700 Bassett St",
            City:"Denver",
            State:"Colorado",
            Country:"United States of America",
            AreaName:"LoDo",
            Latitude:39.7566,
            Longitude:-105.0034,
            AddedByUserId:0,
            AddedAtTime:new Date(),
            IsPrivate:true
        },
        {
            LocationId:1,
            Name:"JINYA Ramen Bar - Denver",
            Description:"A cool ramen place downtown",
            LocationType:"Restaurant",
            AddressLine1:"1710 Wynkoop St",
            City:"Denver",
            State:"Colorado",
            Country:"United States of America",
            AreaName:"Downtown",
            Latitude:39.753157296060365,
            Longitude:-104.99925713098789,
            AddedByUserId:0,
            AddedAtTime:new Date(),
            IsPrivate:false
        },
        {
            LocationId:2,
            Name:"Museum of Contemporary Art Denver",
            Description:"A museum showing off modern contemporary art.",
            LocationType:"Experience",
            AddressLine1:"1485 Delgany St",
            City:"Denver",
            State:"Colorado",
            Country:"United States of America",
            AreaName:"Downtown",
            Latitude:39.752508391692935,
            Longitude:-105.00405989820787,
            AddedByUserId:0,
            AddedAtTime:new Date(),
            IsPrivate:false
        },
        {
            LocationId:3,
            Name:"Common Era",
            Description:"Stylish boutique for casual womenswear",
            LocationType:"Shopping",
            AddressLine1:"1543 Platte St",
            City:"Denver",
            State:"Colorado",
            Country:"United States of America",
            AreaName:"LoHi",
            Latitude:39.75717953222596,
            Longitude:-105.00858479868882,
            AddedByUserId:0,
            AddedAtTime:new Date(),
            IsPrivate:false
        },
    ];

    return(
        <Map locations={locations}/>
    );
};

export default HomePage;