import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 23.5%;
  padding: 5px;
  margin: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
  box-shadow: 0px 11px 11px -7px ${Colors.subProfileTextColor};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 5px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`;

export const TitleSpan = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 900;
  font-size: 1.1vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BodySpan = styled.div`
  color: ${Colors.subProfileTextColor};
  display: flex;
  justify-content: center;
`;