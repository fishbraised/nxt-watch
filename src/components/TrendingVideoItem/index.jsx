import VideosContext from "../../context/VideosContext";

import {
  TrendingVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const TrendingVideoItem = (props) => (
  <VideosContext.Consumer>
    {(value) => {
      const { trendingVideoInfo } = props;
      const { channel, id, publishedAt, thumbnailUrl, title, viewCount } =
        trendingVideoInfo;
      const { name, profileImageUrl } = channel;

      const { isDarkTheme } = value;

      return (
        <Link to={`/videos/${id}`}>
          <TrendingVideoItemContainer>
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
          </TrendingVideoItemContainer>
        </Link>
      );
    }}
  </VideosContext.Consumer>
);

export default TrendingVideoItem;
