import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProveedorDeTareas } from './ProveedorDeTareas';
import AgregarTarea from './AgregarTarea';
import EditarTarea from './EditarTarea';
import VerTodasLasTareas from './VerTodasLasTareas';
import Navbar from './Navbar';
import React, {useContext, useState, useEffect } from 'react';
import {TareasContext} from './ProveedorDeTareas';
import {Link} from 'react-router-dom';

const VerTodasLasTareas = () =>{
    const { tareas, eliminarTarea } = useContext(TareasContext);
    const [tareasSeleccionadas, setTareasSeleccionadas] = useState([]);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    useEffect(() => {
        setTareasSeleccionadas(tareas.map(tarea => tarea.id));
    }, [tareas]);

    const handleEliminarTarea = (id) =>{
        eliminarTarea(id);
    };

    const handleSeleccionarTarea = (id) =>{
        setTareaSeleccionada(id);
    }
};

const App = () => {
return (
<Router>
 <ProveedorDeTareas>
  <Navbar />
  <Switch>
   <Route path="/agregar" component={AgregarTarea} />
   <Route path="/editar/:id" component={EditarTarea} />
   <Route path="/ver-todas" component={VerTodasLasTareas} />
  </Switch>
 </ProveedorDeTareas>
</Router>
);
};

export default App;