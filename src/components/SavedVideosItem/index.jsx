import VideosContext from "../../context/VideosContext";

import {
  SavedVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const SavedVideosItem = (props) => (
  <VideosContext.Consumer>
    {(value) => {
      const { savedVideoInfo } = props;
      const { channel, id, publishedAt, thumbnailUrl, title, viewCount } =
        savedVideoInfo;
      const { name, profileImageUrl } = channel;

      const { isDarkTheme } = value;

      return (
        <Link to={`/videos/${id}`}>
          <SavedVideoItemContainer>
            <ThumbnailImage src={thumbnailUrl} />

            <InfoContainer>
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
            </InfoContainer>
          </SavedVideoItemContainer>
        </Link>
      );
    }}
  </VideosContext.Consumer>
);

export default SavedVideosItem;
