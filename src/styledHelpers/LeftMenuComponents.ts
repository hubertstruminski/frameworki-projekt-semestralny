import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  background-color: white;
  margin-top: 25px;
  border: 1px solid #EBEDF0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TopContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #EBEDF0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BottomContainer = styled.div`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const NameContainer = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 600;
  margin-top: 10px;
`;

export const JobTitleContainer = styled.div`
  color: ${Colors.subProfileTextColor};
`;

export const ItemsContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  flex-direction: column;
`;