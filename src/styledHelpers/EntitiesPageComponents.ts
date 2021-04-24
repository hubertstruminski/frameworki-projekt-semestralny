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

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  background-color: ${Colors.white};
  margin-top: 30px;
`;

export const TopBarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${Colors.black};
  font-weight: 700;
  font-size: 1vw;
`;

export const BottomBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
`;

export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;