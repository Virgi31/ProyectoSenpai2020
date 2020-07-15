import React from 'react';

class VistaProductos extends React.Component{
     render(){
        return(
            <div className="vista">
                <div className="fotoydetalles">
                    <span className="foto">Foto</span>
                    <span className="detalles">Detalles</span>
                    <div className="botones">
                        <button type="button" className="comprar">Comprar</button>
                    </div>
                    
                </div>
                </div>
            )
        }
}


export default VistaProductos;