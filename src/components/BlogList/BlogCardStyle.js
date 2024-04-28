/** @format */

// Credits to https://codepen.io/JavaScriptJunkie/pen/WgRBxw for the blog card style inspiration
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  position: relative;
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
  background: ${(props) => props.theme.colors.background1};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  padding: 25px;
  border-radius: 25px;
  height: fit-content;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const BlogDate = styled.p`
  // color: #7b7992;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
  font-size: 12px;

  @media screen and (max-width: 640px) {
    font-size: 10px;
  }
`;

export const BlogTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 17px;
  }
`;

export const BlogText = styled.p`
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;

  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: normal;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ReadMoreBtn = styled.div`
  display: inline-flex;
  background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 2px 40px #13adc7;
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    box-shadow: 4px 7px 20px 1px #13adc7;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
    padding: 15px 20px;
  }
`;

export const BlogImgDiv = styled.div`
  background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const BlogImgWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;
  height: 200px;
  background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  box-shadow: 4px 13px 30px 1px #13adc7;
  border-radius: 20px;
  transform: translateX(-100px);

  overflow: hidden;

  @media screen and (max-width: 840px) {
    transform: translateX(-80px);
  }

  @media screen and (max-width: 640px) {
    transform: translateX(-50px);
    width: 150px;
    height: 150px;

    box-shadow: 4px 7px 20px 1px #13adc7;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    border-radius: 20px;
    opacity: 0.3;
  }
`;
