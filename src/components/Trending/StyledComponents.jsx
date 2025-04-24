import styled from "styled-components";

export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDarkTheme ? "rgb(15, 15, 15)" : "rgb(249, 249, 249)"};
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
  width: 81.5%;
  height: 84.5vh;
  overflow: auto;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25em 2.25em;
  background-color: ${(props) =>
    props.isDarkTheme ? "rgb(33, 33, 33)" : "rgb(244, 244, 244)"};
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 1em;
  margin-right: 1.5em;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isDarkTheme ? "rgb(15, 15, 15)" : "rgb(226, 232, 240)"};
`;

export const CategoryHeading = styled.h1`
  color: ${(props) =>
    props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(30, 41, 59)"};
  font-size: 2rem;
  font-family: "Roboto";
`;

export const MainContent = styled.div`
  padding: 1.125em 2.125em;
`;

export const TrendingVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;

  > a {
    width: 100%;
    text-decoration: none;
  }
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 71.5vh;
`;

export const FailureImage = styled.img`
  width: 110px;
`;

export const FailureText = styled.p`
  color: ${(props) =>
    props.isDarkTheme ? "rgb(249, 249, 249)" : "rgb(15, 15, 15)"};
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 71.5vh;
`;
