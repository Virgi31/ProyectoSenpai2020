import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
/*import Main from './Pantallas/Main';*/
import Slider from './Componentes/Slider';
import Informacion from './Pantallas/Informacion';
import Tienda from './Pantallas/Tienda';
import Contacto from './Pantallas/Contacto';
import Carrito from './Pantallas/Carrito';
import VistaProductos from './Pantallas/VistaProductos';



function App(){
return(
  <div className="contenedor">
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Slider/>
      </Route>
    </Switch>
    <Switch>
      <Route path='/Tienda'>
        <Tienda/>
      </Route>
    </Switch>
    <Switch>
      <Route path='/VistaProductos' component={VistaProductos}>
      </Route>
    </Switch>
    <Switch>
      <Route path='/Informacion'>
        <Informacion/>
      </Route>
    </Switch>
    <Switch>
      <Route path='/Carrito'>
        <Carrito/>
      </Route>
    </Switch>
    <Switch>
      <Route path='/Contacto'>
        <Contacto/>
      </Route>
    </Switch>
    <Footer />
    </BrowserRouter>
  </div>
)
}

export default App;