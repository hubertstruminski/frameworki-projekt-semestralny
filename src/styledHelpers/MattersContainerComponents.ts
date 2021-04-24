import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 90%;
  background-color: ${Colors.constantPartContainer};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 300px;
`;

export const LabelContainer = styled.div`
  margin-left: 30px;
  color: ${Colors.subProfileTextColor};
  font-size: 1.2vw;
  margin-top: 10px;
  font-weight: 700;
`;