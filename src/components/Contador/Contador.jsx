import { useState } from "react";
import Button from "../Button/Button";
import "./Contador.css";

function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function limpar() {
    setContador(0);
  }

  return (
    <div className="container">
      <h1>{contador}</h1>

      <div className="buttons">
        <Button
          texto="Incrementar"
          onClick={incrementar}
          tipo="incrementar"
        />

        <Button
          texto="Decrementar"
          onClick={decrementar}
          tipo="decrementar"
        />

        <Button
          texto="Limpar"
          onClick={limpar}
          tipo="limpar"
        />
      </div>
    </div>
  );
}

export default Contador;