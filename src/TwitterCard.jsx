import './twitter.css';
import React, { useState } from 'react';

function TwitterCard({ nombre, usuario, img }) {
   
    const [isFollowing, toggleFollowing] = useState(false);

    const estado = isFollowing ? 'btn__boton is_Following' : 'btn__boton';
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const handleClick = () => {
        toggleFollowing(!isFollowing);
    };

    return (
        <div className="tw__body">
            <img className="tw__img" src={img} alt="profile" />
            <div>
                <p>{nombre}</p>
                <p>@{usuario}</p>
            </div>
            <button className={estado} onClick={handleClick}>
                {text}
            </button>
        </div>
    );
}

export default TwitterCard;
