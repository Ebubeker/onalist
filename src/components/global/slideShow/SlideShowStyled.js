import styled from "styled-components";

export const SlideCard = styled.div`
  width: 100%;
  height: 700px;

  @media (max-width: 1101px) {
    height: 600px;
  }

  @media (max-width: 863px) {
    height: 450px;
  }

  @media (max-width: 655px) {
    height: 350px;
  }
`;

export const SlideImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  width: 60%;
  margin: 0 auto;
  text-align: center;
  color: #fff;

  @media (max-width: 863px) {
    font-size: 30px;
  }

  @media (max-width: 655px) {
    font-size: 15px;
  }
`;

export const Btn = styled.div`
  background-color: #276cdb;
  margin: 0 auto;
  width: fit-content;
  padding: 10px 40px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  &:hover {
    background-color: #1e52a6;
  }

  @media (max-width: 863px) {
    padding: 8px 35px;
  }

  @media (max-width: 655px) {
    padding: 7px 30px;
  }
`;

export const ArrowLeft = styled.div`
  background-color: #b6c0d1;
  opacity: 0.8;
  position: absolute;
  left: 0;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 863px) {
    padding: 15px;
  }

  @media (max-width: 655px) {
    padding: 10px;
  }
`;

export const ArrowRight = styled.div`
  background-color: #b6c0d1;
  opacity: 0.8;
  position: absolute;
  right: 0;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 863px) {
    padding: 15px;
  }

  @media (max-width: 655px) {
    padding: 10px;
  }
`;
