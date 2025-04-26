import VideosContext from "../../context/VideosContext";

import {
  ActionItemContainer,
  ActionButton,
  ActionText,
} from "./StyledComponents";

const ActionItem = (props) => {
  return (
    <VideosContext.Consumer>
      {(value) => {
        const { actionInfo, videoData } = props;
        const { id, icon, displayText } = actionInfo;

        const {
          savedVideos,
          likedVideos,
          dislikedVideos,
          toggleSavedVideo,
          toggleLikedVideo,
          toggleDislikedVideo,
        } = value;

        const isActiveActionStyling = () => {
          switch (id) {
            case "SAVE":
              return savedVideos.find((eachObj) => {
                if (videoData.id === eachObj.id) {
                  return true;
                } else {
                  return false;
                }
              });

            case "LIKE":
              return likedVideos.find((eachObj) => {
                if (videoData.id === eachObj.id) {
                  return true;
                } else {
                  return false;
                }
              });

            case "DISLIKE":
              return dislikedVideos.find((eachObj) => {
                if (videoData.id === eachObj.id) {
                  return true;
                } else {
                  return false;
                }
              });
          }
        };

        const onItemClick = () => {
          switch (id) {
            case "SAVE":
              toggleSavedVideo(videoData);
              return;

            case "LIKE":
              toggleLikedVideo(videoData);
              return;

            case "DISLIKE":
              toggleDislikedVideo(videoData);
              return;

            case "SHARE":
              const message = `Hey, check out this video!\n${videoData.videoUrl}`;
              const encodedMessage = encodeURIComponent(message);
              const whatsAppURL = `https://web.whatsapp.com/send?text=${encodedMessage}`;

              window.open(whatsAppURL, "_blank");
              return;
          }
        };

        return (
          <ActionItemContainer onClick={onItemClick}>
            <ActionButton isActiveActionStyling={isActiveActionStyling()}>
              {icon}
            </ActionButton>
            <ActionText isActiveActionStyling={isActiveActionStyling()}>
              {displayText}
            </ActionText>
          </ActionItemContainer>
        );
      }}
    </VideosContext.Consumer>
  );
};

export default ActionItem;
