import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const LeftContainer = styled.div`
  background-color: red;
`;

export const RightContainer = styled.div`
  flex: 0.8;
  color: ${Colors.profileTextColor};
  font-weight: bold;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemContainer = styled.div`
  margin: 5px;
`;