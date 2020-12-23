import React, {useState}from 'react';
import Error from './Error';
import shortid from 'shortid';
const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] =useState('');
    const [cantidad, guardarCantidad] =useState(0);
    const [error, guardarError] =useState(false);


    const agregarGasto = e =>{
        e.preventDefault();
        
        // VALIDAD

        if(cantidad <1 || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // CONSTRUIR EL GASTO
        // cuando llave y valor se llaman igual puedes pasar solo uno
        // nombre:nombre puede ser reemplazado solo por nombre 
        const gasto ={
            nombre,
            cantidad,
            id:shortid.generate()
        }

        // PASAR EL GASTO AL COMPONENTE PPRINCIPAL 
        guardarGasto(gasto);
        guardarCrearGasto(true);
        // RESET FORM
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <form onSubmit ={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje ="Ambos campos son obligatorios o presupuesto incorrecto"/>: null}
            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input type="text"
                className="u-full-width"
                placeholder="Ej.Transporte"
                value ={nombre}
                onChange={e=>guardarNombre(e.target.value)}
                />
            </div>


            <div className="campo">
                <label htmlFor="">Cantidad gasto</label>
                <input type="number"
                className="u-full-width"
                placeholder="Ej.300"
                value ={cantidad}
                onChange={e=>guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>

            <input type="submit"
                className="button-primary u-full-width"
                value ="Agregar gasto"
            />
        </form>
     );
}
 
export default Formulario;