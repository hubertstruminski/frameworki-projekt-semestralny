import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0.7;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0.5;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 0.5;
  flex-direction: column;
  padding-right: 17.5%;
`;