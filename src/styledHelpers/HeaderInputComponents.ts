import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 350px;
  height: 25px;
  border-radius: 5px;
  border: 1.5px solid ${Colors.headerInputBorder};
  display: flex;
  flex-direction: row;
  padding: 7.5px;
`;

export const inputStyles = {
  flex: 1,
  border: 0, 
  fontSize: 17, 
  outline: 'none',  
  color: Colors.headerInputColor,
  fontWeight: 400 
}