import React from 'react';

// destructuring a la fecha para no escribir props.fecha cada vez
// que quiera escribir los datos
const Footer = ({fecha}) => {
    return ( 
        <footer>
            <p>Todos los derechos reservados &copy; {fecha} </p>
        </footer>
     );
}
 
export default Footer;