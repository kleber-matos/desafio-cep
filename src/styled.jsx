import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#FCD808;
    font-family: "Poppins", sans-serif;
}
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Box = styled.section`
  width: 80%;
  height: 50vh;
  max-width: 500px;
  h1 {
    font-size: 2rem;
  }
`;

export const Consulta = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  width: ${(props) => props.tamanho};
  outline: none;
  height: 4vh;
  padding-left: 5px;
  border-radius: 5px;
  font-size: 1rem;
  /* Serve para tirar as setas do input */
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Button = styled.button`
  width: 10%;
  height: 4vh;
  border: none;
  cursor: pointer;
  img {
    height: 3vh;
    width: 60%;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 30vh;
  label {
    display: block;
  }
`;
