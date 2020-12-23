import React, { Fragment, useState } from "react";
import { uuid } from "uuidv4";
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
  // state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    // e.target.name
    // e.target.value
    actualizarCita({
      // ...spread operator sirve para objectos y arreglos
      // asi me jalo la copia, y pongo el campo en el que estoy escribinedo
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // extraer los valores, desctructuring al state
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // cunado el usuario envia el form
  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      // return para que no se siga con el siguiente codigo
      return;
    }

    // Eliminar el mensaje previo
    actualizarError(false);
    // asignar id
    cita.id = uuid();

    // crear cita
    crearCita(cita);

    // reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    })
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Todos los camopos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label htmlFor="">Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre dueño mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label htmlFor="">Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

// documentación para saber que le tienes que mandar al componente
Formulario.propTypes ={
  crearCita:PropTypes.func.isRequired
}
export default Formulario;
