import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../../../utils/http-utils/car-requests";
import { VehicleCard } from "../vehicles-card/VehiclesCard";

export function Vehicle(props){
    const params = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(()=>{
     getVehicleById(params.id).then(response=>setVehicle(response.data));
    },[params.id])

    return(
        <div className="vehicle">
            <VehicleCard vehicle = {vehicle}/>
        </div>
    )
}