import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer>
        <div className="columns">
           <div className="company">
                <dl>
                    <dt>EMPRESA</dt>
                    <dd>Tienda</dd>
                    <dd>Trabajá con nosotros</dd>
                    <dd>Contacto</dd>
                </dl>
            </div>
            <div className="help">
                <dl>
                    <dt>AYUDA</dt>
                    <dd>Preguntas frecuentes</dd>
                    <dd>Terminos y condiciones</dd>
                    <dd>Envios</dd>
                </dl>
            </div>
            <div className="account">
                <dl>
                    <dt>MI CUENTA</dt>
                    <dd>Mi compra</dd>
                    <dd>Mis direcciones</dd>
                    <dd>Wishlist</dd>
                </dl>
            </div>
            <div className="newsletter">
                <dl>
                    <dt><button type="button">NEWSLETTER</button></dt>
                    <dd>¡Suscribite y recibí todas nuestras novedades!</dd>
                </dl>
            </div>
        </div>
        <div className="sotialpay">
            <div className="socialNets">
                <span className="face"><a href="https://www.facebook.com/" target="_blank" rel="external"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" width="30px" height="30px"></img></a></span>
                <span className="twit"><a href="https://twitter.com/" target="_blank" rel="external"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png" width="30px" height="30px"></img></a></span>
                <span className="inst"><a href="https://www.instagram.com/" target="_blank" rel="external"><img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-512.png" width="30px" height="30px"></img></a></span>
            </div>
            <div className="listpay">
                <dl> 
                    <dd><img src="https://s.fenicio.app/logos/b/visa.svg" alt="visa" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/oca.svg" alt="oca" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/master.svg" alt="master" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/diners.svg" alt="diners" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/lider.svg" alt="lider" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/abitab.svg" alt="abitab" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/redpagos.svg" alt="redpagos" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/mercadopago.svg" alt="mercadopago" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/ebrou.svg" alt="ebrou" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/santandersupernet.svg" alt="santandersupernet" height="20" /></dd>
                    <dd><img src="https://s.fenicio.app/logos/b/bbvanet.svg" alt="bbvanet" height="20" /></dd>
                </dl>
            </div>
        </div>
        <div className="info">
            <span>© 2020 La Reina del Pole</span><span>DeVir- Todos los derechos reservados</span> 
            <span>Condiciones de uso</span> 
            <span>Politica de Privacidad</span>
            <span>Politica de cookies</span>        
        </div>
    </footer> 
        );   
    }
}

export default Footer;