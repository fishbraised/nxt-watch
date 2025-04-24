import styled from "styled-components";

export const HomeVideoItemContainer = styled.li`
  width: 100%;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 1em 2em;
`;

export const ChannelProfile = styled.img`
  align-self: flex-start;
  width: 40px;
  height: 40px;
  margin-right: 1.5em;
`;

export const TextInfoContainer = styled.div`
  width: 100%;
`;

export const VideoTitle = styled.p`
  margin: 0;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(35, 31, 32)"};
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const ChannelName = styled.p`
  margin: 0;
  margin: 0.6em 0;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(148, 163, 184)" : "rgb(96, 96, 96)"};
  font-size: 1.2rem;
  font-family: "Roboto";
`;

export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewsDateText = styled.p`
  margin: 0;
  margin-right: 0.5em;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(148, 163, 184)" : "rgb(96, 96, 96)"};
  font-size: 1.2rem;
  font-family: "Roboto";
`;
