/** @format */

import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const SmallHeaderContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin: 10px;
    align-items: center;
    margin-left: 30px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  margin-top: 10px;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.background1};
  z-index: 1;

  // #0f1624

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 90px;
    display: none;
    // grid-template-columns: repeat(5, 1fr);
    // grid-template-rows: repeat(2, 60px);
    // grid-column-gap: 0.5rem;
    // grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  width: 100%;
  color: ${(props) => props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
`;

export const LinksDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-left: 2rem;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.primary2};
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.primary1};
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ThemeDiv = styled.div`
  color: ${(props) => props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
    white-space: nowrap;
  }
`;

export const HeaderItem = styled.li`
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.25rem;
  }
`;
