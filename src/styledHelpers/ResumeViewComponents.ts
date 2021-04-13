import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 90%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TitleContainer = styled.div`
  color: ${Colors.profileItemTextColor};
  font-weight: bold;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;