const proveedorDeTareas = ({children}) => {

    const tareasIniciales = [
    {id: 1, nombre: "Hacer la compra", descripcion: "Comprar alimentos y productos necesarios"},
    {id: 2, nombre: "Estudiar React", descripcion: "Revisar la documentacion y hacer ejercicios"},
    {id: 3, nombre: "Ir al gimnasio", descripcion: "Realizar ejercicios de cardio y pesas"},
    ];
    
    const [tareas, setTareas] = useState(tareasIniciales);
    
    return(
    <Tareas.Provider value={tareas}>
     {children}
    </Tareas.Provider>
    );
    }; 
    
    export default proveedorDeTareas;