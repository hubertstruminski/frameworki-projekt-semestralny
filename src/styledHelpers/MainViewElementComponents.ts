import styled from "styled-components";
import { Colors } from "./Colors";
import { fontSize } from "./FontSizes";
import { MainViewElementProps } from '../components/unique/publications/MainViewElement';

export const Container = styled.div`
  height: 100%;
  background-image: url(${(props: MainViewElementProps) => props.backgroundImageUrl});
  background-size: 100% 100%;
  align-items: flex-start;
  justify-content: flex-end;
  display: flex;
  padding-left: 15px;
  padding-right: 50px;
  flex-direction: column;
`;

export const BodySpan = styled.span`
  color: ${Colors.white};
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const DetailsSpan = styled.span`
  color: ${Colors.white};
  font-size: ${fontSize[14]};
  margin-right: 10px;
`;

export const imgStyles = {
  width: 15, 
  height: 15, 
  borderRadius: 15/2,
  marginRight: 10
}