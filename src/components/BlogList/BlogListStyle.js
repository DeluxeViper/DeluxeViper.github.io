import styled from "styled-components";

export const StyledCircuitSVG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 140px;
  top: 120px;

  ${(props) =>
    props.blog === true &&
    `
      @media only screen and (max-width: 1050px) {
        height: 110%;
        width: 110%;
        right: 120px;
        top: 110px;
      }

      @media only screen and (max-width: 900px) {
        right: 130px;
        top: 110px;
        height: 120%;
        width: 120%;
      }

      @media only screen and (max-width: 850px) {
        height: 130%;
        width: 130%;
        right: 110px;
        top: 100px;
      }

      @media only screen and (max-width: 800px) {
        height: 130%;
        width: 130%;
        right: 90px;
        top: 100px;
      }

      @media only screen and (max-width: 700px) {
        height: 130%;
        width: 130%;
        right: 60px;
        top: 100px;
      }

      @media only screen and (max-width: 600px) {
        height: 100%;
        width: 130%;
        right: 40px;
        top: 100px;
      }

      @media only screen and (max-width: 500px) {
        height: 100%;
        width: 130%;
        right: 5px;
        top: 130px;
      }

      @media only screen and (max-width: 450px) {
        display: none;
      }

    `}
`;

export const MarginTopDiv = styled.div`
  margin-top: 350px;

  @media only screen and (max-width: 920px) {
    margin-top: 300px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 250px;
  }

  @media only screen and (max-width: 450px) {
    margin-top: 100px;
  }
`;
