import styled from "styled-components";

export const VideoItemDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(15, 15, 15);
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

export const MainContent = styled.div`
  padding: 2.125em;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export const InfoContainer = styled.div`
  padding: 0 2em;
`;

export const VideoTitle = styled.p`
  margin-bottom: 0;
  color: rgb(251, 251, 250);
  font-size: 1.8rem;
  font-family: "Roboto";
`;

export const ViewsAndActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 1em;
`;

export const ViewsDateContainer = styled.div`
  display: flex;
`;

export const ViewsDateText = styled.p`
  color: rgb(100, 116, 139);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const ActionsList = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
`;

export const Divider = styled.hr`
  margin-bottom: 1.75em;
  border: 1px solid rgb(100, 116, 139);
`;

export const ChannelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

export const ChannelProfile = styled.img`
  width: 50px;
  height: 50px;
`;

export const ChannelTextInfoContainer = styled.div`
  margin-left: 1em;
`;

export const ChannelName = styled.p`
  margin: 0;
  margin-bottom: 0.5em;
  color: rgb(251, 251, 250);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const ChannelSubscribers = styled.p`
  margin: 0;
  color: rgb(100, 116, 139);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const VideoDescription = styled.p`
  color: rgb(251, 251, 250);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 77.25vh;
`;

export const FailureImage = styled.img`
  width: 110px;
`;

export const FailureText = styled.p`
  color: rgb(251, 251, 250);
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77.25vh;
`;
