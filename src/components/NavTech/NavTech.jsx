import React, { useState } from "react";
import {
  NavContainerThi,
  NavContanier,
  NavContanierLogoMain,
  NavContanierLogoMainImg,
  NavContanierLogoMainSpan,
  NavContanierSec,
  NavHeader,
  NavHeaderSub,
  NavWrapper,
  NavrightEighth,
  NavrightFifth,
  NavrightFir,
  NavrightNinth,
  NavrightSec,
  NavrightSecSub,
  NavrightSecsSpan,
  NavrightSecsSpanIcon,
  NavrightSeventh,
  NavrightTenth,
  NavrightThi,
  NotBot,
  NotBotAt,
  NotCon,
  NotUl,
  NotWrap,
} from "./NavTech.elements";
import Logo from "../../assets/log.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { persistor } from "../../redux/store";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/userRedux";
import { Button } from "../../globalStyles";

const NavTech = () => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  const toggleNotification = () => {
    setShowNotification((prevState) => !prevState);
  };

  const handleSignOut = () => {
    // Dispatch the signOut action
    dispatch(signOut());
    persistor.purge();
    // Optionally, you can also redirect the user to the home page or perform other clean-up tasks here
  };

  const Notification = () => {
    return (
      <NotWrap>
        <NotCon>
          <NotUl>
            <NotBot>
              <NotBotAt to={"/upload"}>توظيف</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/upload"}>البحث عن وظيفة</NotBotAt>
            </NotBot>
            <hr />
            <NotBot>
              <NotBotAt to={"/product/nurse"}>التمريض</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/physician"}>الاطباء</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/dentist"}>اسنان</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/technician"}>فني</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/reception"}>استقبال</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/management"}>ادارة</NotBotAt>
            </NotBot>
            <hr style={{ marginBottom: "6px" }} />
            <NotBot>
              <NotBotAt to={"/signup"}>
                <Button>تسجيل الدخول</Button>
              </NotBotAt>
            </NotBot>
            <Button primary onClick={handleSignOut}>
              تسجيل الخروج
            </Button>
          </NotUl>
        </NotCon>
      </NotWrap>
    );
  };

  return (
    <>
      {showNotification && <Notification />}
      <NavHeader>
        <NavHeaderSub>
          <NavWrapper>
            <NavContanier>
              <NavContanierLogoMain>
                <Link to="/">
                  <NavContanierLogoMainImg src={Logo} alt="" />
                </Link>
              </NavContanierLogoMain>
            </NavContanier>
            <NavContanierSec></NavContanierSec>
            <NavContainerThi>
              <NavrightFir></NavrightFir>
              <NavrightThi></NavrightThi>
              <NavrightFifth></NavrightFifth>
              <Link to={"/signup"} onClick={handleSignOut}>
                <NavrightSec>
                  <NavrightSecSub>
                    <NavrightSecsSpan>
                      <NavrightSecsSpanIcon></NavrightSecsSpanIcon>
                    </NavrightSecsSpan>
                  </NavrightSecSub>
                </NavrightSec>
              </Link>
              <NavrightSeventh>
                <Link to={"/upload"}>
                  <Button>قدم الان</Button>
                </Link>
              </NavrightSeventh>
              <NavrightEighth></NavrightEighth>
              <NavrightNinth></NavrightNinth>
              <NavrightTenth>
                <NavrightSecSub>
                  <NavrightSecsSpan>
                    <NavrightSecsSpanIcon onClick={toggleNotification}>
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{
                          color: "#808080",
                          fill: "currentcolor",
                          display: "block",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      />
                    </NavrightSecsSpanIcon>
                  </NavrightSecsSpan>
                </NavrightSecSub>
              </NavrightTenth>
            </NavContainerThi>
          </NavWrapper>
        </NavHeaderSub>
      </NavHeader>
    </>
  );
};

export default NavTech;
