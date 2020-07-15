import React, { useState, useEffect } from 'react';


function Tienda(props){
    const [productos, setProduct] = useState([]);
    useEffect(function(){
        fetch('http://localhost:5000/productos')
        .then(function(response){
        return response.json();
        })
        .then(function(responseJSON){
            setProduct(responseJSON);
        })
    }, []);
    console.log(productos);
    return <div>
        {productos.map(producto=>
        <div className="tarjetas">
            <div className="imagenproducto"><img src={producto.imagen} alt="foto"/></div>
            <div className="detallesproducto"> {producto.nombre} <div className="precio">{producto.precio}</div></div>
    </div>
        )}
    </div>
    

}

export default Tienda;