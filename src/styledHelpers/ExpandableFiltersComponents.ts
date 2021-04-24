import styled from "styled-components";
import { Colors } from "./Colors";

export const LabelText = styled.span`
  color: ${Colors.black};
  font-weight: 700;
  font-size: 0.8vw;
  margin-right: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${Colors.filtersBackground};
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const InfoSpan = styled.span`
  margin-left: 10px;
  margin-top: 10px;
  color: ${Colors.subProfileTextColor};
  font-size: 0.7vw;
  width: 100%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 25px;
  margin-top: 10px;
`;