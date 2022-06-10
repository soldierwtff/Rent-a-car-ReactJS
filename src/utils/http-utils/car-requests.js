import axios from "axios";
const apiUrl = 'http://localhost:3005/vehicles';

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}
export function getAllVehicles() {
    return axios.get(apiUrl);
}
export function getVehicleById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteVehicle(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function updateVehicle(id, newVehicle) {
    return axios.put(`${apiUrl}/${id}`, newVehicle);
}


export function saveVehicle(vehicle) {
    if (vehicle.id) {
        return axios.put(`${apiUrl}/${vehicle.id}`, vehicle);
    }
    return axios.post(`${apiUrl}`, vehicle);
}