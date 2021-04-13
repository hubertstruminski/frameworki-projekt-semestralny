import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  margin: 5px;
`;