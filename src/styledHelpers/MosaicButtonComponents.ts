import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
  cursor: pointer;
`;

export const TextContainer = styled.span`
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: 0.75vw;
`;