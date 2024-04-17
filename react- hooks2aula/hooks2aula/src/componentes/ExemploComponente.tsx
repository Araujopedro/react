import React, { useState } from "react";

const ExemploComponente : React.FC = () =>{

    const [conut,setCount] = useState(0)

    const increment = () =>{
        setCount(conut +1)

    }
    return (
        <>
        <button onClick={increment} >Clique aqui</button>
        <p>Contador:{conut}</p>
        </>
    )
}
export default ExemploComponente