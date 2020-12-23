import React, { Fragment, useState, useEffect} from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  // citas en local storage
  // sola almacena strings
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales =[];
  }

  // arreglo de citas
  const [citas,guardarCitas]=useState([citasIniciales]);

  // use Effect para ver operaciones cuando el state cambia

  // se usa cuando se carga el componente o hay cambios 
  // se le manda el arreglo vacio para decirle que solo se ejecute una sola vez
  // el arreglo de dependencias cada que cambie lo que esta dentro dentro del arreglo
  // use effect se vuelve a ejecutar
  // array de dependencias, similar al componentDidMount o ComponentDid...
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  // function que tome las citas actuales y agregue la neva
  const crearCita=(cita)=>{
      guardarCitas([
        ...citas,cita
      ]);
  }

  // function que elimina una cita por su id
  const eliminarCita = id =>{
    // este metodo me crea un arreglo nuevo
    const nuevasCitas = citas.filter(cita=> cita.id !==id)
    guardarCitas(nuevasCitas);
  }

  // mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas": "Administra tus citas";

  return (
    <Fragment>
      <h1>Admin de pacientes</h1>
      <div className="container">
        <div className="row">
            <div className="one-half column">
                <Formulario
                crearCita={crearCita}/>
            </div>

            <div className="one-half column">
              
              <h2>{titulo}</h2>
              {citas.map(cita=>(
                <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                />
              ))}
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
