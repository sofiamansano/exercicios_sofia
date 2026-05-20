import "./App.css";

import BoasVindas from "./components/BoasVindas/BoasVindas";
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./components/CartaoProduto/CartaoProduto";
import Contador from "./components/Contador/Contador";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <BoasVindas nome="Sofia" />

      <MensagemSecreta mensagem={true} />
      <MensagemSecreta mensagem={false} />

      <div className="principal">
        <CartaoProduto
          imagem="chocolate.jpg"
          nome="Chocolate"
          preco="11,50"
        />

        <CartaoProduto
          imagem="chocolatequente.jpg"
          nome="Chocolate quente"
          preco="14,90"
        />

        <CartaoProduto
          imagem="cookie.jpg"
          nome="Cookie com gotas de chocolate"
          preco="9,50"
        />
      </div>

      <Contador />
      <Button />
    </>
  );
};

export default App;