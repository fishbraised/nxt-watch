import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import TrendingVideoItem from "../TrendingVideoItem";

import VideosContext from "../../context/VideosContext";

import {
  TrendingContainer,
  ResponsiveContainer,
  MainContainer,
  CategoryContainer,
  IconContainer,
  CategoryHeading,
  MainContent,
  TrendingVideoList,
  FailureContainer,
  FailureImage,
  FailureText,
  LoaderContainer,
} from "./StyledComponents";

import Cookies from "js-cookie";
import { HiFire } from "react-icons/hi";
import { PuffLoader } from "react-spinners";
import { Component } from "react";

import "./StyledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "INPROGRESS",
};

class Trending extends Component {
  state = { apiStatus: apiStatusConstants.initial, videoData: [] };

  renderSuccessView = () => {
    const { videoData } = this.state;

    return (
      <MainContent>
        <TrendingVideoList>
          {videoData.map((eachObj) => (
            <TrendingVideoItem key={eachObj.id} trendingVideoInfo={eachObj} />
          ))}
        </TrendingVideoList>
      </MainContent>
    );
  };

  renderFailureView = (isDarkTheme) => (
    <FailureContainer>
      <FailureImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742306194/Nxt%20Watch/error-picture.png" />
      <FailureText isDarkTheme={isDarkTheme}>
        An error in obtaining server data has occurred.
      </FailureText>
    </FailureContainer>
  );

  renderLoader = () => (
    <LoaderContainer>
      <PuffLoader size="100px" color="rgb(230, 48, 42)" />
    </LoaderContainer>
  );

  renderSwitch = (isDarkTheme) => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme);
      case apiStatusConstants.inProgress:
        return this.renderLoader();
    }
  };

  getTrendingVideosData = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const jwtToken = Cookies.get("jwt_token");
    const URL = `https://apis.ccbp.in/videos/trending`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(URL, options);

    if (response.ok) {
      const data = await response.json();
      const formattedVideoData = data.videos.map((eachObj) => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }));

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formattedVideoData,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  componentDidMount() {
    this.getTrendingVideosData();
  }

  render() {
    return (
      <VideosContext.Consumer>
        {(value) => {
          const { isDarkTheme } = value;

          return (
            <TrendingContainer isDarkTheme={isDarkTheme}>
              <Navbar />

              <ResponsiveContainer>
                <SidebarMenu />

                <MainContainer>
                  <CategoryContainer isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <HiFire color="rgb(230, 48, 42)" size="100%" />
                    </IconContainer>

                    <CategoryHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </CategoryHeading>
                  </CategoryContainer>

                  {this.renderSwitch(isDarkTheme)}
                </MainContainer>
              </ResponsiveContainer>
            </TrendingContainer>
          );
        }}
      </VideosContext.Consumer>
    );
  }
}

export default Trending;
