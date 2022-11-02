import React, { useEffect, useState } from "react";

const UsoSimple = () => {

    const [mensaje, setMensaje] = useState("");

    const [cont, setCont] = useState(0);

    useEffect(() => {
        console.log("esto lo muestro después de renderizar");
    }, []);

    console.log("esto va antes");

    return (
        <div>
            <h2>Ejemplo de useEffect</h2>
            <p> {mensaje} </p>
            <input type="text" onChange={(e) => { setMensaje(e.target.value) }} />

            <p className="mt-5"> {cont} </p>
            <button onClick={(e) => {setCont(cont + 1)}}>Apretar</button>
        </div>
    );
}

export default UsoSimple;