import MenuTab from "../MenuTab";

import VideosContext from "../../context/VideosContext";

import {
  SidebarMenuContainer,
  MenuList,
  FooterContainer,
  ContactHeading,
  ContactContainer,
  ContactPlatform,
  FooterDescription,
} from "./StyledComponents";

import { IoMdHome } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { Component } from "react";

const menuTabsData = [
  {
    id: "HOME",
    link: "/",
    icon: <IoMdHome size="22.5px" />,
    displayText: "Home",
  },
  {
    id: "TRENDING",
    link: "/trending",
    icon: <HiFire size="22.5px" />,
    displayText: "Trending",
  },
  {
    id: "GAMING",
    link: "/gaming",
    icon: <SiYoutubegaming size="22.5px" />,
    displayText: "Gaming",
  },
  {
    id: "SAVEDVIDEOS",
    link: "/saved-videos",
    icon: <MdOutlinePlaylistAdd size="22.5px" />,
    displayText: "Saved videos",
  },
];

class SidebarMenu extends Component {
  render() {
    return (
      <VideosContext.Consumer>
        {(value) => {
          const { activeTab, updateActiveTab, isDarkTheme } = value;
          console.log("Active tab: ", activeTab);

          const onUpdateActiveTab = (id) => {
            updateActiveTab(id);
          };

          return (
            <SidebarMenuContainer isDarkTheme={isDarkTheme}>
              <MenuList>
                {menuTabsData.map((eachObj) => (
                  <MenuTab
                    key={eachObj.id}
                    tabInfo={eachObj}
                    activeTab={activeTab}
                    onUpdateActiveTab={onUpdateActiveTab}
                  />
                ))}
              </MenuList>

              <FooterContainer>
                <ContactHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactHeading>

                <ContactContainer>
                  <ContactPlatform src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
                  <ContactPlatform src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
                  <ContactPlatform src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
                </ContactContainer>

                <FooterDescription isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </FooterDescription>
              </FooterContainer>
            </SidebarMenuContainer>
          );
        }}
      </VideosContext.Consumer>
    );
  }
}

export default SidebarMenu;
