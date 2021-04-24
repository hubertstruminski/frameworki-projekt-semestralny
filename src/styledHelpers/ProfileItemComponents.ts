import styled from "styled-components";
import { Colors } from "./Colors";
import { fontSize } from "./FontSizes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 15px;
`;

export const LinkSpan = styled.span`
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: ${fontSize[14]};
`;