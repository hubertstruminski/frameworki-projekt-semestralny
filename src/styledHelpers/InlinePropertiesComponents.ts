import styled from "styled-components";
import { Colors } from "./Colors"

export const cancelIconStyles = {
  width: 20,
  height: 20,
  transform: 'rotate(45deg)',
  cursor: 'pointer'
}

export const buttonStyles = {
  border: 'none',
  backgroundColor: `${Colors.profileTextColor}`,
  color: `${Colors.white}`,
  padding: 5,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 5,
  marginLeft: 10
}

export const WrapInlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const ItemContainer = styled.div`
  background-color: ${Colors.profilePropertiesBackground};
  color: ${Colors.profilePropertiesColor};
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.85vw;
`;