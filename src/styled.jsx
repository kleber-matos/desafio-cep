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
  height: 56vh;
  max-width: 500px;
  border: solid 4px;
  padding: 1rem;
  border-radius: 10px;
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
  width: 70%;
  outline: none;
  height: 4vh;
  padding-left: 5px;
  border-radius: 5px;
  font-size: 1rem;
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

export const Campo = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  padding-left: 5px;
  border-radius: 5px;
  background-color: white;
  p {
    background-color: white;
  }
`;
