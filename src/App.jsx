import React from "react";
import * as S from "./styled.jsx";
import lupa from "./assets/lupa.png";

export default function App() {
  return (
    <>
      <S.Container>
        <S.Box>
          <h1>BUSCA CEP</h1>
          <p>Consulte abaixo</p>

          <S.Consulta>
            <S.Input
              tamanho="70%"
              placeholder="Digite seu cep..."
              type="number"
            />
            <S.Button>
              <img src={lupa} alt="Lupa de pesquisa" />
            </S.Button>
          </S.Consulta>

          <S.Forms>
            <label>Cidade</label>
            <S.Input tamanho="100%" type="text" />
            <label>Bairro</label>
            <S.Input tamanho="100%" type="text" />
            <label>Logradouro</label>
            <S.Input tamanho="100%" type="text" />
            <label>Complemento</label>
            <S.Input tamanho="100%" type="text" />
          </S.Forms>
          <h2>Cep:</h2>
          <p>123.123-123</p>
        </S.Box>
      </S.Container>
    </>
  );
}
