import styled from "styled-components";
import { Colors } from "./Colors";

export const Border = styled.div`
  border-right: 1px solid ${Colors.subProfileTextColor};
  width: 1px;
  height: 25px;
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
`;