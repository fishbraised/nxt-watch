import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import ActionItem from "../ActionItem";

import VideosContext from "../../context/VideosContext";

import {
  VideoItemDetailsContainer,
  ResponsiveContainer,
  MainContainer,
  MainContent,
  VideoContainer,
  InfoContainer,
  VideoTitle,
  ViewsAndActionsContainer,
  ViewsDateContainer,
  ViewsDateText,
  ActionsList,
  Divider,
  ChannelInfoContainer,
  ChannelProfile,
  ChannelTextInfoContainer,
  ChannelName,
  ChannelSubscribers,
  VideoDescription,
  FailureContainer,
  FailureImage,
  FailureText,
  LoaderContainer,
} from "./StyledComponents";

import Cookies from "js-cookie";
import ReactPlayer from "react-player/youtube";
import { PuffLoader } from "react-spinners";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";
import { CgPlayListAdd } from "react-icons/cg";
import { Component } from "react";

const actionsData = [
  {
    id: "LIKE",
    icon: <BiLike size="22.5px" />,
    displayText: "Like",
  },
  {
    id: "DISLIKE",
    icon: <BiDislike size="22.5px" />,
    displayText: "Dislike",
  },
  {
    id: "SHARE",
    icon: <RiShareForwardLine size="22.5px" />,
    displayText: "Share",
  },
  {
    id: "DOWNLOAD",
    icon: <BiDownload size="22.5px" />,
    displayText: "Download",
  },
  {
    id: "SAVE",
    icon: <CgPlayListAdd size="22.5px" />,
    displayText: "Save",
  },
];

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "INPROGRESS",
};

class VideoItemDetails extends Component {
  state = { apiStatus: apiStatusConstants.initial, videoData: [] };

  renderSuccessView = () => {
    return (
      <VideosContext.Consumer>
        {(value) => {
          // const { toggleSavedVideo, toggleLikedVideo } = value;

          const { videoData } = this.state;
          const {
            channel,
            description,
            id,
            publishedAt,
            thumbnailUrl,
            title,
            videoUrl,
            viewCount,
          } = videoData;
          const { name, profileImageUrl, subscriberCount } = channel;

          return (
            <>
              <VideoContainer>
                <ReactPlayer width="100%" height="100%" url={videoUrl} />
              </VideoContainer>

              <InfoContainer>
                <VideoTitle>{title}</VideoTitle>

                <ViewsAndActionsContainer>
                  <ViewsDateContainer>
                    <ViewsDateText>{viewCount} views</ViewsDateText>
                    <ViewsDateText>•</ViewsDateText>
                    <ViewsDateText>{publishedAt}</ViewsDateText>
                  </ViewsDateContainer>

                  <ActionsList>
                    {actionsData.map((eachObj) => (
                      <ActionItem
                        key={eachObj.id}
                        actionInfo={eachObj}
                        videoData={videoData}
                      />
                    ))}
                  </ActionsList>
                </ViewsAndActionsContainer>

                <Divider />

                <ChannelInfoContainer>
                  <ChannelProfile src={profileImageUrl} />

                  <ChannelTextInfoContainer>
                    <ChannelName>{name}</ChannelName>
                    <ChannelSubscribers>
                      {subscriberCount} Subscribers
                    </ChannelSubscribers>
                  </ChannelTextInfoContainer>
                </ChannelInfoContainer>

                <VideoDescription>{description}</VideoDescription>
              </InfoContainer>
            </>
          );
        }}
      </VideosContext.Consumer>
    );
  };

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742306194/Nxt%20Watch/error-picture.png" />
      <FailureText>An error in obtaining server data has occurred.</FailureText>
    </FailureContainer>
  );

  renderLoader = () => (
    <LoaderContainer>
      <PuffLoader size="100px" color="rgb(230, 48, 42)" />
    </LoaderContainer>
  );

  renderSwitch = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoader();
    }
  };

  getVideoItemData = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const jwtToken = Cookies.get("jwt_token");

    const URL = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(URL, options);

    if (response.ok) {
      const data = await response.json();
      const videoDetails = data.video_details;

      const formattedVideoData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      };

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formattedVideoData,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  componentDidMount() {
    this.getVideoItemData();
  }

  render() {
    return (
      <VideoItemDetailsContainer>
        <Navbar />

        <ResponsiveContainer>
          <SidebarMenu />

          <MainContainer>
            <MainContent>{this.renderSwitch()}</MainContent>
          </MainContainer>
        </ResponsiveContainer>
      </VideoItemDetailsContainer>
    );
  }
}

export default VideoItemDetails;

{
  /* <ChannelName>IB Hubs</ChannelName>; */
}
