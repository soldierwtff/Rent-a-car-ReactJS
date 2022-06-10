import { useEffect, useState } from "react";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { getVehicleById, saveVehicle } from "../../../utils/http-utils/car-requests";
import './VehiclesForm.scss';


export function VehicleForm(){
    const params  = useParams();
    const navigate = useNavigate();
    const [vehicle,setVehicle] = useState({
        brand:'',
        model:'',
        year:'',
        fuel:'',
        seats:'',
        price:'',
        type:'',
        quantity:''
    });

    useEffect(()=>{
        if(params.id){
            getVehicleById(params.id).then(response=>{
                setVehicle(response.data);
            });
        }
    },[params.id])

    const onFormSubmit = (event)=>{
        event.preventDefault();

        saveVehicle(vehicle).then(()=>{
            navigate('/vehicles-list');
            
        });
    }

    const onInputChange = (event)=>{
        let value = event.target.value;
        
        setVehicle((prevState)=>{
            return{
                ...prevState,
                [event.target.name]:value
            }
        })
    }

    return(
        <div className="vehicle-form-wrapper">
            <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Enter Brand" name = "brand" value = {vehicle.brand} onChange = {onInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder="Enter model" name = "model" value = {vehicle.model} onChange = {onInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>year</Form.Label>
                    <Form.Control type="text" placeholder="Enter year" name = "year" value = {vehicle.year} onChange = {onInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fuel</Form.Label>
                    <Form.Control type="text" placeholder="Enter fuel" name = "fuel" value = {vehicle.fuel} onChange = {onInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Number of seats</Form.Label>
                    <Form.Control type="text" placeholder="Enter seats" name = "seats" value = {vehicle.seats} onChange = {onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" name = "price" value = {vehicle.price} onChange = {onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter type" name = "type" value = {vehicle.type} onChange = {onInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter quantity" name = "quantity" value = {vehicle.quantity} onChange = {onInputChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>


    )
}