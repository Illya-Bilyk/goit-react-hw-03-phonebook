import styled from 'styled-components';

export const Input = styled.input`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 55% Arial, Helvetica, sans-serif;
  &:focus {
    box-shadow: 0 0 5px #43d1af;
    padding: 3%;
    border: 1px solid #43d1af;
  }
`;
