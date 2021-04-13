import styled from "styled-components";
import { Colors } from "./Colors";
import { fontSize } from "./FontSizes";

export const Container = styled.div`
  background-color: transparent;
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: ${fontSize[16]};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SmallerContainer = styled.div`
  font-size: ${fontSize[14]};
`;

export const SmallestContainer = styled.div`
  font-size: ${fontSize[12]};
`;

export const ItemContainer = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
  border: 1px solid ${Colors.subProfileTextColor};
  border-radius: 25px;
  color: ${Colors.profileTextColor};
  font-weight: 700;
  cursor: pointer;
`;