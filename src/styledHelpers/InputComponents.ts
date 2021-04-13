import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  border-radius: 5px;
  border: 1.5px solid ${Colors.headerInputBorder};
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding: 5px;
  margin-right: 25px;
  background-color: ${Colors.white};
`;

export const inputStyles = {
  flex: 1,
  border: 0, 
  outline: 'none',  
  color: Colors.headerInputColor,
  fontWeight: 400,
  padding: 5
}