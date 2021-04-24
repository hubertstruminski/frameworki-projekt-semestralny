import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  background-color: ${Colors.subProfileTextColor};
  border-radius: 5px;
`;

export const TextSpan = styled.span`
  color: ${Colors.black};
  font-size: 0.85vw;
`;