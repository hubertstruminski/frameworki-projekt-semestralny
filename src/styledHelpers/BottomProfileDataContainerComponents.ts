import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  border-right: 1px solid ${Colors.subProfileTextColor};
  border-left: 1px solid ${Colors.subProfileTextColor};
  border-bottom: 1px solid ${Colors.subProfileTextColor};
  padding-top: 10px;
  margin-bottom: 30px;
`;

export const BorderDiv = styled.div`
  border-top: 1px solid ${Colors.subProfileTextColor};
  width: 100%;
  margin-top: 15px;
`;