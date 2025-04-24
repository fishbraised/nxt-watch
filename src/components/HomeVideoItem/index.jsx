import VideosContext from "../../context/VideosContext";

import {
  HomeVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  ChannelProfile,
  TextInfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const HomeVideoItem = (props) => (
  <VideosContext.Consumer>
    {(value) => {
      const { videoInfo } = props;
      const { channel, id, publishedAt, thumbnailUrl, title, viewCount } =
        videoInfo;
      const { name, profileImageUrl } = channel;

      const { isDarkTheme } = value;

      return (
        <Link to={`/videos/${id}`}>
          <HomeVideoItemContainer>
            <ThumbnailImage src={thumbnailUrl} />

            <InfoContainer>
              <ChannelProfile src={profileImageUrl} />

              <TextInfoContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>

                <ViewsDateContainer>
                  <ViewsDateText isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </ViewsDateText>
                  <ViewsDateText isDarkTheme={isDarkTheme}>•</ViewsDateText>
                  <ViewsDateText isDarkTheme={isDarkTheme}>
                    {publishedAt}
                  </ViewsDateText>
                </ViewsDateContainer>
              </TextInfoContainer>
            </InfoContainer>
          </HomeVideoItemContainer>
        </Link>
      );
    }}
  </VideosContext.Consumer>
);

export default HomeVideoItem;
