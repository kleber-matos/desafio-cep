import React, { useEffect, useState } from "react";
import * as S from "./styled.jsx";
import lupa from "./assets/lupa.png";
import axios from "axios";
// site api cep: https://viacep.com.br/
// axios: https://axios-http.com/ptbr/

export default function App() {
  // Captura Cep
  const [cep, setCep] = useState("01001000");

  // Captura dos resultados
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");

  // Busca dados
  const buscaDados = async () => {
    // As declarações try...catch marcam um bloco de declarações para testar (try), e especifica uma resposta, caso uma exceção seja lançada.
    try {
      const dados = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCidade(dados.data.localidade);
      setBairro(dados.data.bairro);
      setLogradouro(dados.data.logradouro);
      setComplemento(dados.data.complemento);
    } catch (err) {
      alert("Erro na busca");
    }
  };

  // useEffect para inicia a buscar ao carregar a pagina.
  useEffect(() => {
    buscaDados();
  }, []);

  return (
    <>
      <S.Container>
        <S.Box>
          <h1>BUSCA CEP</h1>
          <p>Consulte seu cep abaixo</p>

          <S.Consulta>
            <S.Input
              onChange={(e) => setCep(e.target.value)}
              placeholder="ex: 01001000"
              type="text"
              maxLength={9}
            />
            <S.Button onClick={() => buscaDados()}>
              <img src={lupa} alt="Lupa de pesquisa" />
            </S.Button>
          </S.Consulta>

          {/* condicional usando o ternario, caso não seja encontrada a informação */}
          <S.Forms>
            <label>Cidade</label>
            <S.Campo>
              <p>{cidade ? cidade : "não encontrado"}</p>
            </S.Campo>
            <label>Bairro</label>
            <S.Campo>
              <p>{bairro ? bairro : "não encontrado"}</p>
            </S.Campo>
            <label>Logradouro</label>
            <S.Campo>
              <p>{logradouro ? logradouro : "não encontrado"}</p>
            </S.Campo>
            <label>Complemento</label>
            <S.Campo>
              <p>{complemento ? complemento : "não encontrado"}</p>
            </S.Campo>
          </S.Forms>
          <h2>Cep:</h2>
          <p>{cep}</p>
        </S.Box>
      </S.Container>
    </>
  );
}
