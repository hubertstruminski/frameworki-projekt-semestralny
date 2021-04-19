import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 15px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 0.9vw;
`;

export const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TableContainer = styled.table`
  margin-left: 20px;
  margin-right: 20px;
  table-layout: auto;
`;

export const Row = styled.tr`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

export const ThCell = styled.th`
  padding: 15px;
  color: ${Colors.black};
  text-align: left;
  font-weight: 700;
  table-layout: fixed;
  width: 100%;
  color: ${Colors.black};
  font-size: 0.8vw;
`;

export const Cell = styled.td`
  padding: 15px;
  color: ${Colors.black};
  text-align: left;
  table-layout: fixed;
  width: 100%;
  font-size: 0.8vw;
`;

export const MoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${Colors.moreLabelColor};
  font-size: 0.9vw;
  margin-right: 30px;
`;

export const inputStyles = {
  border: 'none',
  marginLeft: 20,
  marginTop: 10,
  borderRadius: 5,
  padding: 5,
  width: '25%'
}

export const buttonStyles = {
  border: 'none',
  marginLeft: 20,
  marginTop: 10,
  borderRadius: 5,
  padding: 5,
  backgroundColor: Colors.profileTextColor,
  color: Colors.white,
  paddingLeft: 15,
  paddingRight: 15,
}