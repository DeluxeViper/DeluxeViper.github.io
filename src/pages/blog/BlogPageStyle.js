import styled from "styled-components";

export const BlogTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  vertical-align: middle;
  align-items: center;
`;

export const BlogTag = styled.div`
  display: inline-block;
  position: relative;
  margin: 0px 10px 5px 0px;
  background-color: #949494;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;

  @media only screen and (max-width: 650px) {
    margin: 20px 10px 5px 0px;
  }
`;

export const StyledMarginBot = styled.div`
  margin-bottom: 130px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 110px;
  }

  @media only screen and (max-width: 450px) {
    margin-bottom: 100px;
  }
`;
