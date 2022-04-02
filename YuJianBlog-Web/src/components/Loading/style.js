import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 99%;
`;

export const LoadingTrinity = styled.div`
  height: 66px;
  width: 66px;
  padding: 3px;
  position: relative;
  top: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
`;

const trinityRingsSpinnerCircle1Animation = keyframes`
  0% {
    transform: rotateZ(20deg) rotateY(0deg);
  }
  100% {
    transform: rotateZ(100deg) rotateY(360deg);
  }
`;

const trinityRingsSpinnerCircle2Animation = keyframes`
  0% {
    transform: rotateZ(100deg) rotateX(0deg);
  }
  100% {
    transform: rotateZ(0deg) rotateX(360deg);
  }
`;

const trinityRingsSpinnerCircle3Animation = keyframes`
  0% {
    transform: rotateZ(100deg) rotateX(-360deg);
  }
  100% {
    transform: rotateZ(-360deg) rotateX(360deg);
  }
`;

export const LoadingCircle = styled.div`
  position: absolute;
  display: block;
  border-radius: 50%;
  border: 3px solid #2376b7;
  opacity: 1;

  &:nth-of-type(1) {
    height: 60px;
    width: 60px;
    animation: ${trinityRingsSpinnerCircle1Animation} 1.5s infinite linear;
    border-width: 3px;
  }

  &:nth-of-type(2) {
    height: calc(60px * 0.65);
    width: calc(60px * 0.65);
    animation: ${trinityRingsSpinnerCircle2Animation} 1.5s infinite linear;
    border-width: 2px;
  }

  &:nth-of-type(3) {
    height: calc(60px * 0.1);
    width: calc(60px * 0.1);
    animation: ${trinityRingsSpinnerCircle3Animation} 1.5s infinite linear;
    border-width: 1px;
  }
`;