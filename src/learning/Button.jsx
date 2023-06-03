import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "red")};
  color: ${(props) => (props.primary ? "white" : "black")};
  padding: 0.5rem 1rem;
  ${(props) => props.rounded && `border-radius: 20px; border: 1px solid grey`}
`;

export default Button;
