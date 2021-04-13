import styled from "styled-components";
import { Colors } from "./Colors";
import { fontSize } from "./FontSizes";

export const Container = styled.div`
  margin-top: 10px;
  flex: 1;
  background-color: ${Colors.white};
  padding: 15px;
`;

export const TitleContainer = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 700;
`;

export const MessageContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  font-size: ${fontSize[18]};
  font-weight: 500;
  margin-top: 10px;
`;

export const DetailsContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  font-size: ${fontSize[14]};
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ItemContainer = styled.div`
  margin-right: 10px;
`;