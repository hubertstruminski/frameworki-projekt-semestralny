import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${Colors.switchButtonBackgroundColor};
  border-radius: 5px;
  margin-right: 5px;
`;

export const DotContainer = styled.div`
  font-size: 1.5vw;
  font-weight: 900;
  margin-right: 5px;
  width: 5px;
  height: 5px;
  color: ${Colors.rigidButtonTextColor};
  border: 2px solid ${Colors.rigidButtonTextColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 3px;
  align-items: center;
`;