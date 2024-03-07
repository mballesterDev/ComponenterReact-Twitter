    import './Card.css';
    import React from 'react';

    //pasamos las props para que los podmos usar en nuestro archivo app
    function Carta1({ nombre, edad, children, }) {
    
        return (
            <>
                <button className='card1'>{`Mi nombre es ${nombre}, tengo ${edad} años}`}
                {children}
                </button>
                
            </>
        );
    }
 //ysamos el fragment para que podmaos renerizar los dos botones
    export default Carta1;
