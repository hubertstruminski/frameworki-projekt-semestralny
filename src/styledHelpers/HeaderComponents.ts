import styled from "styled-components";
import { Colors } from "./Colors";

export const Container = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  height: 55px;
  position: fixed;
  margin-top: 0;
  box-shadow: 0px 5px 2px ${Colors.headerShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PartialContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

export const CircleDiv = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${Colors.headerCircleGrayBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  position: relative;
`;

export const TextContainer = styled.div`
  color: ${Colors.black};
`;

export const CircleWhiteDiv = styled(CircleDiv)`
  background-color: ${Colors.white};
`;

export const CounterContainer = styled.div`
  width: 20px;
  height: 15px;
  background-color: ${Colors.headerCounters};
  position: absolute;
  top: -5px;
  right: -4px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  z-index: 1000;
`;

export const ArrowDownMenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;  