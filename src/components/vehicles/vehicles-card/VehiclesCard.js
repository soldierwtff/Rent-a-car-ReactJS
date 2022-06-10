import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import './VehiclesCard.scss';

export function VehicleCard({ vehicle, deleteVehicle, rentVehicle }) {
    const navigate = useNavigate();

    //  const redirectToDetails = () =>{
    //      navigate(`/vehicle/${vehicle.id}`);
    // }

    const redirectToEdit = () => {
        navigate(`/vehicle/edit/${vehicle.id}`);
    }

    if (!vehicle) {
        return <p>No vehicles!</p>;
    }

    return (
        <Card.Body>
            <Card.Title>{vehicle.brand}</Card.Title>
            <Card.Text>
                <span className='key'>Model:</span>
                <span className='value'>{vehicle.model}</span>
            </Card.Text>

            <Card.Text>
                <span className='key'>Year:</span>
                <span className='value'>{vehicle.year}</span>
            </Card.Text>

            <Card.Text>
                <span className='key'>Fuel type:</span>
                <span className='value'>{vehicle.fuel}</span>
            </Card.Text>

            <Card.Text>
                <span className='key'>Number of seats:</span>
                <span className='value'>{vehicle.seats}</span>
            </Card.Text>

            <Card.Text>
                <span className='key'>price:</span>
                <span className='value'>{vehicle.price}</span>
            </Card.Text>

            <Card.Text>
                <span className='key'>Type:</span>
                <span className='value'>{vehicle.type}</span>
            </Card.Text>
            <Card.Text>
                <span className='key'>Available count:</span>
                <span className='value'>{vehicle.quantity}</span>
            </Card.Text>

            <div className="btn-holder">
                <Button variant="primary" onClick={redirectToEdit}>Edit</Button>
                <Button variant="danger" onClick={() => deleteVehicle(vehicle.id)}>Delete</Button>
                <Button variant="success" onClick={() => rentVehicle(vehicle)} disabled={parseInt(vehicle.quantity) === 0}>Rent</Button>
            </div>
        </Card.Body>
    )
}