import React from "react";
import "@/App.css";
import "@/Transition.css";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Landing from "@/pages/landing/Landing";
import NotFound from "@/pages/NotFound";
import Feed from "@/pages/feed/Feed";
import Join from "@/pages/join/Join";
import Navbar from "@/common/layout/Navbar";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Paths from "@/util/consts/Paths";
import JoinInfo from "@/pages/join/JoinInfo";
import JoinProfileMessage from "@/pages/join/JoinProfileMessage";
import Profile from "@/pages/profile/Profile";
import Search from "@/pages/search/Search";
import NewPost from "@/pages/newpost/NewPost";
import ProfileEdit from "@/pages/newpost/ProfileEdit";
import Notifications from "@/pages/notifications/Notifications";
import { Flex } from "./styles/container";

const App: React.FC = () => {
  const location = useLocation();

  return (
    /* location.pathname==="/postwrite"?location.pathname:null */

    <S.AppContainer>
      <S.ScreenContainer $column>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="slide"
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path={Paths.JOIN} element={<Join />} />
              <Route path={Paths.JOININFO} element={<JoinInfo />} />
              <Route
                path={Paths.JOINPROFILEMESSAGE}
                element={<JoinProfileMessage />}
              />
              <Route path="/*" element={<NotFound />} />
              <Route path={Paths.FEED} element={<Feed />} />
              <Route path={Paths.NEWPOST} element={<NewPost />} />
              <Route path={Paths.NOTIFICATIONS} element={<Notifications />} />
              <Route path={Paths.PROFILE} element={<Profile />} />
              <Route path={Paths.PROFILEEDIT} element={<ProfileEdit />} />
              <Route path={Paths.SEARCH} element={<Search />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </S.ScreenContainer>
      <Navbar/>
    </S.AppContainer>
  );
};

const S = {
  AppContainer: styled.div`
  `,


  ScreenContainer: styled(Flex)`
  `,
};

export default App;
