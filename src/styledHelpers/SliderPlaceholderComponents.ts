import styled from "styled-components";
import { Colors } from "./Colors";

export const TopContainer = styled.div`
  width: 85%;
  background-color: ${Colors.white};
  margin-top: 30px;
  border-radius: 10px;
`;

export const PlaceholderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-size: 100% 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 20px;
`;

export const LeftContainer = styled.div`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 0.9;
  align-items: flex-start;
  color: white;
  flex-direction: column;
  padding-right: 20px;
`;

export const InternalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
  color: ${Colors.black};
  font-size: 1.5vw;
`;

export const BodyContainer = styled.div`
  margin-top: 15px;
  margin-right: 15px;
  color: ${Colors.subProfileTextColor};
`;