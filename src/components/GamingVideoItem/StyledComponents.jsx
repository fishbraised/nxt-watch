import styled from "styled-components";

export const GamingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2em;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const VideoTitle = styled.p`
  margin: 0;
  margin-top: 1em;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(35, 31, 32)"};
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const ViewsDateText = styled.p`
  margin: 0;
  margin-top: 0.5em;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(148, 163, 184)" : "rgb(96, 96, 96)"};
  font-size: 1.2rem;
  font-family: "Roboto";
`;
