import styled from "styled-components";
import { Colors } from "./Colors";

export const MenuContainer = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  padding: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
`;

export const TypeContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  color: ${Colors.black};
  padding-top: 12.5px;
  padding-bottom: 12.5px;
`;

export const LogoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${Colors.subProfileTextColor};
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  color: ${Colors.subProfileTextColor};
`;

export const imgLogoutStyles = {
  width: 20,
  height: 20,
  marginRight: 20
}

export const inputStyles = {
  border: 0, 
  outline: 'none',  
  color: Colors.headerInputColor,
  fontWeight: 400,
  padding: 5,
  width: '100%'
}