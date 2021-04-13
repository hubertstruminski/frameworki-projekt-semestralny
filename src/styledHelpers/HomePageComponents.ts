import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 55px;
`;

export const BasicContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-left: 45px;
  color: ${Colors.profileItemTextColor};
  font-weight: bold;
`;