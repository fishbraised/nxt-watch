import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import PremiumBanner from "../PremiumBanner";
import HomeVideoItem from "../HomeVideoItem";

import VideosContext from "../../context/VideosContext";

import {
  HomeContainer,
  ResponsiveContainer,
  MainContainer,
  MainContent,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideoList,
  FailureContainer,
  FailureImage,
  FailureText,
  LoaderContainer,
} from "./StyledComponents";

import Cookies from "js-cookie";
import { IoIosSearch } from "react-icons/io";
import { PuffLoader } from "react-spinners";
import { Component } from "react";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "INPROGRESS",
};

class Home extends Component {
  state = {
    searchValue: "",
    apiStatus: apiStatusConstants.initial,
    videoData: [],
    displayBanner: true,
  };

  closeBanner = () => {
    this.setState({ displayBanner: false });
  };

  conductSearch = (event) => {
    event.preventDefault();
    this.getVideoData();
  };

  updateSearchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  renderSuccessView = () => {
    const { videoData } = this.state;

    return (
      <HomeVideoList>
        {videoData.map((eachObj) => (
          <HomeVideoItem key={eachObj.id} videoInfo={eachObj} />
        ))}
      </HomeVideoList>
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

  getVideoData = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const { searchValue } = this.state;
    const jwtToken = Cookies.get("jwt_token");

    const URL = `https://apis.ccbp.in/videos/all?search=${searchValue}`;
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

  componentDidMount = () => {
    this.getVideoData();
  };

  render() {
    const { searchValue, displayBanner } = this.state;

    return (
      <VideosContext.Consumer>
        {(value) => {
          const { isDarkTheme } = value;

          return (
            <HomeContainer isDarkTheme={isDarkTheme}>
              <Navbar />

              <ResponsiveContainer>
                <SidebarMenu />

                <MainContainer>
                  {displayBanner && (
                    <PremiumBanner closeBanner={this.closeBanner} />
                  )}

                  <MainContent>
                    <SearchContainer
                      isDarkTheme={isDarkTheme}
                      onSubmit={this.conductSearch}
                    >
                      <SearchInput
                        onChange={this.updateSearchValue}
                        value={searchValue}
                        placeholder="Search"
                      />

                      <SearchButton isDarkTheme={isDarkTheme} type="submit">
                        <IoIosSearch color="rgb(96, 96, 96)" size="20px" />
                      </SearchButton>
                    </SearchContainer>

                    {this.renderSwitch(isDarkTheme)}
                  </MainContent>
                </MainContainer>
              </ResponsiveContainer>
            </HomeContainer>
          );
        }}
      </VideosContext.Consumer>
    );
  }
}

export default Home;
