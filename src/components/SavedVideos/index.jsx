import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import SavedVideosItem from "../SavedVideosItem";

import VideosContext from "../../context/VideosContext.jsx";

import {
  SavedVideosContainer,
  ResponsiveContainer,
  MainContainer,
  CategoryContainer,
  IconContainer,
  CategoryHeading,
  MainContent,
  SavedVideosList,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
} from "./StyledComponents";

import { MdOutlinePlaylistAdd } from "react-icons/md";
import { Component } from "react";

class SavedVideos extends Component {
  state = { isSavedVideosEmpty: true };

  renderSuccessView = () => {
    return (
      <SavedVideosList>
        {savedVideos.map((eachObj) => (
          <SavedVideosItem key={eachObj.id} savedVideoInfo={eachObj} />
        ))}
      </SavedVideosList>
    );
  };

  renderFailureView = (isDarkTheme) => {
    return (
      <FailureContainer>
        <FailureImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1745055963/Nxt%20Watch/no-saved-videos.png" />
        <FailureHeading isDarkTheme={isDarkTheme}>
          No saved videos found
        </FailureHeading>
        <FailureText isDarkTheme={isDarkTheme}>
          You can save your videos while watching them
        </FailureText>
      </FailureContainer>
    );
  };

  renderSwitch = (savedVideos, isDarkTheme) => {
    if (savedVideos.length === 0) {
      return this.renderFailureView(isDarkTheme);
    } else {
      return this.renderSuccessView();
    }
  };

  render() {
    return (
      <VideosContext.Consumer>
        {(value) => {
          const { savedVideos, isDarkTheme } = value;

          return (
            <SavedVideosContainer isDarkTheme={isDarkTheme}>
              <Navbar />

              <ResponsiveContainer>
                <SidebarMenu />

                <MainContainer>
                  <CategoryContainer isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <MdOutlinePlaylistAdd
                        color="rgb(230, 48, 42)"
                        size="100%"
                      />
                    </IconContainer>

                    <CategoryHeading isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </CategoryHeading>
                  </CategoryContainer>

                  <MainContent>
                    {this.renderSwitch(savedVideos, isDarkTheme)}
                  </MainContent>
                </MainContainer>
              </ResponsiveContainer>
            </SavedVideosContainer>
          );
        }}
      </VideosContext.Consumer>
    );
  }
}

export default SavedVideos;
