import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TextContainer = styled.div`
  color: ${Colors.black};
  margin-left: 15px;
  cursor: pointer;
`;