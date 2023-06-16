/** @format */

// Credits to https://codepen.io/JavaScriptJunkie/pen/WgRBxw for the inspiration
import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
  background: #fff;
  box-shadow: 0px 14px 15px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 300px;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }

  @media screen and (max-width: 640px) {
    height: 300px;
  }
`;

export const BlogDate = styled.p`
  color: #7b7992;
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
`;

export const BlogTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
`;

export const BlogText = styled.p`
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;

  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: normal;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ReadMoreBtn = styled.a`
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
`;

export const BlogImgDiv = styled.div`
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
`;
export const BlogImgWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;
  height: 200px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
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
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    border-radius: 20px;
    opacity: 0.8;
  }
`;
