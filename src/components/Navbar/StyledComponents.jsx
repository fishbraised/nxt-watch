import { RiGalleryFill } from "react-icons/ri";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15.5vh;
  padding: 0 6em;
  background-color: ${(props) =>
    props.isDarkTheme ? "rgb(24, 24, 24)" : "rgb(255, 255, 255)"};
`;

export const WebsiteLogo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 195px;

  @media screen and (max-width: 992px) {
    width: 145px;
  }
`;

export const LightingModeButton = styled.button`
  all: unset;

  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const HamburgerButton = styled.button`
  all: unset;

  width: 30px;
  height: 30px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const ProfileIcon = styled.img`
  width: 30px;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const LogoutIconButton = styled.button`
  all: unset;

  width: 30px;
  height: 30px;
  cursor: pointer;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  all: unset;

  padding: 0.25em 1em;
  border: 1px solid
    ${(props) =>
      props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(230, 48, 42)"};
  border-radius: 0.125em;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(230, 48, 42)"};
  font-size: 1.5rem;
  font-family: "Roboto";
  cursor: pointer;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em;
  border-radius: 1em;
  box-shadow: grey 0px 0px 20px;
  background-color: ${(props) =>
    props.isDarkTheme ? "rgb(24, 24, 24)" : "rgb(255, 255, 255)"};
`;

export const ModalHeading = styled.h2`
  margin: 0;
  margin-bottom: 1em;
  color: ${(props) =>
    props.isDarkTheme ? "rgb(255, 255, 255)" : "rgb(110, 0, 0)"};
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Roboto";
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 225px;
`;

export const ModalButton = styled.button`
  all: unset;

  padding: 0.5em 1.25em;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.125em;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Roboto";
  cursor: pointer;
`;
