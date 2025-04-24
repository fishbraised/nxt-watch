import styled from "styled-components";

export const MenuTabContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 0 2em;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;

export const TabHeading = styled.h2`
  margin-left: 1em;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(66, 66, 66)"};
  font-size: 1.6rem;
  font-weight: ${(props) => props.tabTextFontWeight};
  font-family: "Roboto";
`;
