import styled from "styled-components";
import { Colors } from "./Colors";
import { fontSize } from "./FontSizes";

export const Container = styled.div`
  width: '100%';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RightIconContainer = styled.div`
  border: 1px solid ${Colors.black};
  border-radius: 5px;
  padding-right: 7.5px;
  padding-left: 7.5px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
`;

export const TitleContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  font-size: ${fontSize[16]};
  font-weight: 700;
  color: ${Colors.profileItemTextColor};
`;