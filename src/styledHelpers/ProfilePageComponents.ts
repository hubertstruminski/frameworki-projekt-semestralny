import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  border: 1px solid ${Colors.subProfileTextColor};
  margin-top: 30px;
`;

export const InternalContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.3;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const ProfileLinkSpan = styled.span`
  margin-top: 10px;
  color: ${Colors.profileTextColor};
  font-size: 0.8vw;
`;