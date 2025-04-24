import VideosContext from "../../context/VideosContext";

import {
  GamingVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const GamingVideoItem = (props) => (
  <VideosContext.Consumer>
    {(value) => {
      const { gamingVideoInfo } = props;
      const { id, thumbnailUrl, title, viewCount } = gamingVideoInfo;

      const { isDarkTheme } = value;

      return (
        <Link to={`/videos/${id}`}>
          <GamingVideoItemContainer>
            <ThumbnailImage src={thumbnailUrl} />

            <InfoContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>

              <ViewsDateText isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </ViewsDateText>
            </InfoContainer>
          </GamingVideoItemContainer>
        </Link>
      );
    }}
  </VideosContext.Consumer>
);

export default GamingVideoItem;
