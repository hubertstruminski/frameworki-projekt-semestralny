import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const TextSpan = styled.span`
  color: ${Colors.subProfileTextColor};
  font-size: 0.75vw;
`;