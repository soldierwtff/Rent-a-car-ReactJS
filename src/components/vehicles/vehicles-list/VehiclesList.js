import { useEffect, useState } from "react";
import { deleteVehicle, getAllVehicles, updateVehicle } from "../../../utils/http-utils/car-requests";
import { VehicleCard } from "../vehicles-card/VehiclesCard";
import './VehiclesList.scss';
export function VehiclesList() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAllVehicles().then(response => {
            setVehicles(response.data);
        });
    }, []);

    const deletedVehicleHandler = async (id) => {
        await deleteVehicle(id);
        setVehicles(pervState => {
            return pervState.filter(vehicle => vehicle.id !== id);
        });
    };

    const updateVehicleHandler = async (id, newVehicle) => {
        try {
            await updateVehicle(id, newVehicle);
            const newVehicles = [...vehicles];
            const index = newVehicles.findIndex(v => v.id === id);
            if (index !== -1) {
                newVehicles[index] = newVehicle
                setVehicles(newVehicles)
            }
        } catch (error) {
            console.log("ERROR: Car Upadte Failed: ", error);
        }
    };

    const rentVehicleHandler = vehicle => updateVehicleHandler(vehicle.id, { ...vehicle, quantity: parseInt(vehicle.quantity) - 1 })

    return (
        <div className="vehicles-list-wrapper">
            {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} deleteVehicle={deletedVehicleHandler} rentVehicle={rentVehicleHandler} />)}
        </div>
    )

}