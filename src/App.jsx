import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Gaming from "./components/Gaming";
import SavedVideos from "./components/SavedVideos";
import VideoItemDetails from "./components/VideoItemDetails";

import VideosContext from "./context/VideosContext";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
    activeTab: "HOME",
    isDarkTheme: true,
  };

  toggleSavedVideo = (videoData) => {
    const { savedVideos } = this.state;

    const foundSavedVideo = savedVideos.find((eachObj) => {
      if (videoData.id === eachObj.id) {
        return true;
      }
    });

    if (!foundSavedVideo) {
      this.setState((prevState) => ({
        savedVideos: [...prevState.savedVideos, videoData],
      }));
    } else {
      const updatedSavedVideos = savedVideos.filter((eachObj) => {
        if (eachObj.id !== videoData.id) {
          return true;
        }
      });

      this.setState({ savedVideos: updatedSavedVideos });
    }
  };

  toggleLikedVideo = (videoData) => {
    const { likedVideos, dislikedVideos } = this.state;

    const foundLikedVideo = likedVideos.find((eachObj) => {
      if (videoData.id === eachObj.id) {
        return true;
      }
    });

    const foundDislikedVideo = dislikedVideos.find((eachObj) => {
      if (videoData.id === eachObj.id) {
        return true;
      }
    });

    if (!foundLikedVideo) {
      this.setState((prevState) => ({
        likedVideos: [...prevState.likedVideos, videoData],
      }));
    } else {
      const updatedLikedVideos = likedVideos.filter((eachObj) => {
        if (videoData.id !== eachObj.id) {
          return true;
        }
      });

      let updatedDislikedVideos = dislikedVideos;

      if (foundDislikedVideo) {
        updatedDislikedVideos = dislikedVideos.filter((eachObj) => {
          if (videoData.id !== eachObj.id) {
            return true;
          }
        });
      }

      this.setState({
        likedVideos: updatedLikedVideos,
        dislikedVideos: updatedDislikedVideos,
      });
    }
  };

  toggleDislikedVideo = (videoData) => {
    const { dislikedVideos } = this.state;

    const foundDislikedVideo = dislikedVideos.find((eachObj) => {
      if (videoData.id === eachObj.id) {
        return true;
      }
    });

    if (!foundDislikedVideo) {
      this.setState((prevState) => ({
        dislikedVideos: [...prevState.dislikedVideos, videoData],
      }));
    } else {
      const updatedDislikedVideos = dislikedVideos.filter((eachObj) => {
        if (videoData.id !== eachObj.id) {
          return true;
        }
      });

      this.setState({ dislikedVideos: updatedDislikedVideos });
    }
  };

  updateActiveTab = (id) => {
    this.setState({ activeTab: id });
  };

  toggleLightingTheme = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  render() {
    const { savedVideos, likedVideos, dislikedVideos, activeTab, isDarkTheme } =
      this.state;

    return (
      <VideosContext.Provider
        value={{
          savedVideos,
          toggleSavedVideo: this.toggleSavedVideo,
          likedVideos,
          toggleLikedVideo: this.toggleLikedVideo,
          dislikedVideos,
          toggleDislikedVideo: this.toggleDislikedVideo,
          activeTab,
          updateActiveTab: this.updateActiveTab,
          isDarkTheme,
          toggleLightingTheme: this.toggleLightingTheme,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
          </Switch>
        </BrowserRouter>
      </VideosContext.Provider>
    );
  }
}

export default App;
