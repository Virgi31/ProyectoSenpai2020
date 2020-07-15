import React from 'react';
import{Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="nav">
                    <div className="uppernav"><span><p> Contacto: lareinadelpole@gmail.com</p><p>Cel: 098364294</p></span><Link to='/Carrito'><i class="fas fa-shopping-cart"></i></Link></div>
                    <div className="middlenav"><span className="logo"><img src="https://www.bing.com/images/blob?bcid=TpEH-DNM5IMB9Q" width="20px" height="20px"/></span> <span className="Input"><input type="text" name="nombres" size="18" placeholder="Buscar productos..."></input></span></div>
                    <div className="menu">
                        <ul>
                            <li><Link to='/' style={{textDecoration: 'none'}}>INICIO</Link></li>
                            <li><Link to='/Informacion' style={{textDecoration: 'none'}}>INFORMACION</Link></li>
                            <li><Link to='/Tienda' style={{textDecoration: 'none'}}>TIENDA</Link></li>
                            <li><Link to='/Contacto' style={{textDecoration: 'none'}}>CONTACTO</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );   
    }
}

export default Header;