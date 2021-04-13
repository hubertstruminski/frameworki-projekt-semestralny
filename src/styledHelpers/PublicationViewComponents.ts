import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 90%;
  margin-top: 25px;
  display: flex;
`;

export const LeftContainer = styled.div`
  background-color: red;
`;

export const LeftWrapper = styled.div`
  height: 100%;
`;

export const RightContainer = styled.div`
  background-color: ${Colors.white};
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const RightWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 20px;
`;