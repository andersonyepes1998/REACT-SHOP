import React from 'react';
import { Link } from "react-router-dom";

import '../styles/NotFound.scss';

const NotFound = () => {
	return (
        <div className="content">
            <div className="content__IMG">
                <img src="https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/404.png?alt=media&token=aec04dde-0fc7-41c2-8ee5-38e63d09fae6" alt="404" />
                <p className="number">404</p>
            </div>
            <div className="content__Description">
                <p className="content__Error">
                    UPPSSSS!!!!! Algo salio mal, Pagina no encontrada...
                </p>
            <Link to="/" className="content__Button">SACAME DE AQUÍ !!</Link>
            </div>
        </div>
	);
}

export default NotFound;