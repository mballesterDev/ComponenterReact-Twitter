import React, { useState } from 'react';
import './App.css';
import TwitterCard from './TwitterCard';

function App() {
    const [nombre, setNombre] = useState(true);
    const textNombre = nombre ? 'Juan' : 'Manel';

    const [usuario, setUsuario] = useState(true);
    const textUsuario = usuario? 'juanlopez22':'manelgram111';

    const cambiarNombre = () => {
        setNombre(!nombre);
    }

    const cambiarUsuario = () => {
        setUsuario(!usuario);
    }

    const handleClick = () => {
        cambiarNombre();
        cambiarUsuario();
    }

    return (
        <div className='estructura'>
            <div className="tarejtaTwitter">
                <TwitterCard nombre={textNombre} usuario={textUsuario} img="https://picsum.photos/200" isFollowing={false} />
            </div>

            <button className='boton__change' onClick={handleClick}>Cambiar nombre y usuario</button>
        </div>
    );
}

export default App;
