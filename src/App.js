import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/auth/login/Login';
import { Register } from './components/auth/register/Register';
import { Layout } from './components/layout/Layout';
import { UserForm } from './components/users/user-form/UserForm';
import { User } from './components/users/user/User';
import { UsersList } from './components/users/users-list/UsersList';
import { Vehicle } from './components/vehicles/vehicle/Vehicle';
import { VehiclesList } from './components/vehicles/vehicles-list/VehiclesList';
import {VehicleForm} from './components/vehicles/vehicles-form/VehiclesForm';
import { AuthenticatedRoute } from './utils/guards/AuthenticatedRoute';
import { NonAuthenticatedGuard } from './utils/guards/NonAuthenticatedGuard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<NonAuthenticatedGuard> <Register /> </NonAuthenticatedGuard>} />
        <Route exact path="/login" element={<NonAuthenticatedGuard> <Login /> </NonAuthenticatedGuard>} />
        <Route exact path="/" element={<AuthenticatedRoute><Layout /></AuthenticatedRoute>}>
          
              <Route path="/users-list" element={<UsersList />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/user/create" element={<UserForm />} />
              <Route path="/user/edit/:id" element={<UserForm />} />

              <Route path="/vehicles-list" element={<VehiclesList/>}/>
              <Route path = "/vehicle/:id" element ={<Vehicle/>}/>
              <Route path="/vehicle/create" element = {<VehicleForm/>}/>
              <Route path = "/vehicle/edit/:id" element = {<VehicleForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
