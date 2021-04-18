import styled from "styled-components";
import { Colors } from "./Colors";

export const TypeSpan = styled.span`
  color: ${Colors.subProfileTextColor};
  font-size: 0.9vw;
`;

export const MainTypeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
`;

export const TypeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  padding-left: 20px;
  flex-direction: column;
`;