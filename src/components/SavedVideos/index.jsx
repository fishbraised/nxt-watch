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
} from "./StyledComponents";

import { MdOutlinePlaylistAdd } from "react-icons/md";
import { Component } from "react";

class SavedVideos extends Component {
  state = { isSavedVideosEmpty: true };

  renderSuccessView = () => {
    console.log("successview");
    return (
      <SavedVideosList>
        {savedVideos.map((eachObj) => (
          <SavedVideosItem key={eachObj.id} savedVideoInfo={eachObj} />
        ))}
      </SavedVideosList>
    );
  };

  renderFailureView = () => {
    console.log("failureview");
    return (
      <FailureContainer>
        <FailureImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1745055963/Nxt%20Watch/no-saved-videos.png" />
        <FailureText isDarkTheme={isDarkTheme}>
          An error in obtaining server data has occurred.
        </FailureText>
      </FailureContainer>
    );
  };

  renderSwitch = (savedVideos) => {
    if ([] == true) {
      this.setState({ isSavedVideosEmpty: false }, this.renderSuccessView());
    } else if ([] == false) {
      this.setState({ isSavedVideosEmpty: true }, this.renderFailureView());
    }

    // const { isSavedVideosEmpty } = this.state;

    // return isSavedVideosEmpty
    //   ?
    //   : ;

    console.log("savedVideosState: ", savedVideos);
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

                  <MainContent>{this.renderSwitch(savedVideos)}</MainContent>
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
