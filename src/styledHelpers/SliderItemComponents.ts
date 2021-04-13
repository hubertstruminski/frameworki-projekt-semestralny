import styled from "styled-components";
import { Colors } from "./Colors";
import { fontSize } from "./FontSizes";

export const Container = styled.div`
  background-color: ${Colors.white};
  margin-right: 10px;
  position: relative;
  z-index: 0;
`;

export const TopContainer = styled.div`
  width: 100%;
`;

export const BottomContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: ${Colors.workspaceTitleColor};
  font-weight: bold;
  margin-left: 20px;
`;

export const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
`;

export const RightContainer = styled.div`
  flex: 0.7;
  padding: 10px;
`;

export const IconContainer = styled.div`
  box-shadow: 1.5px 1.5px 4px 1px ${Colors.headerShadow};
  display: flex;
  justify-content: center;
  align-items: center; 
  position: absolute;
  z-index: 1000;
  background-color: white;
  left: 10px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export const TextDetailContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  font-size: ${fontSize[12]};
`;