import styled from "styled-components";
import { Colors } from "./Colors";

export const TitleSpan = styled.div` 
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 700;
  color: ${Colors.black};
  font-size: 0.9vw;
`;

export const ItemContainer = styled.div`
  background-color: ${Colors.subProfileTextColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const ImgContainer = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const TextSpan = styled.div`
  color: ${Colors.black};
  font-weight: 700;
  font-size: 0.9vw;
  margin-right: 25px;
`;

export const Item = styled.div`
  color: ${Colors.black};
  font-size: 0.8vw;
  margin-right: 20px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;