import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {

  // crear listado de productos
  const[productos, guardarProductos]=useState([
    {id:1, descripcion:'Camisa de vue', precio:'50'},
    {id:2, descripcion:'Camisa Js' ,precio:'40'},
    {id:3, descripcion: 'Camisa Angular',precio:'30'},
    {id:4, descripcion: 'Camisa jQuery',precio:'20'}
  ]);

  // state carrito
  // referenica, funcion
  const [carrito, setCarrito] = useState([]);
  // obtener fecha
  const fecha =new Date().getFullYear();
  return (
    <Fragment>
      <Header 
      titulo='Tienda virtual'/>
      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          setCarrito = {setCarrito}
        />  
    ))}
      <Carrito 
        carrito = {carrito}
        setCarrito = {setCarrito}
      />
      <Footer 
      fecha={fecha} />
    </Fragment>
  );
}

export default App;
