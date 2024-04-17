import React, { useState } from "react";

const ExemploComponente2: React.FC = () =>{
    const [texto,setTexto] = useState('');

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setTexto(event.target.value)


    }

     return(
<>
       <p><b>Digite um texto:</b><input type="text" onBlur={handleChange}/></p>
       <p><b>Conteudo Digitado:</b>{texto}</p>
       
</>
   )
}
export default ExemploComponente2