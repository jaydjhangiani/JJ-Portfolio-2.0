import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScreenContainer = styled.div`
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%2300091e' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23000f22' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23001325' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23031729' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23071B2D' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

export const ResumeWrap = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const PDFView = styled.div`
  margin: 80px auto;
  width: 60%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    margin: 50px auto;
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
