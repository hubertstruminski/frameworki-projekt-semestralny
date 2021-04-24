import styled from "styled-components";
import { Colors } from "./Colors";

export const TitleSpan = styled.div` 
  margin-top: 20px;
  margin-left: 20px;
`;

export const ValueSpan = styled.div`
  color: ${Colors.black};
  margin-left: 20px;
  margin-top: 10px;
  font-size: 0.85vw;
`;

export const inputStyles = {
  border: 'none',
  color: `${Colors.subProfileTextColor}`,
  padding: 5,
  borderRadius: 5,
  marginLeft: 20,
  marginTop: 10
}