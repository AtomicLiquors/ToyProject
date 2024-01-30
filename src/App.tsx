import React from "react";
import "./App.css";
import "./Transition.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./common/layout/Navbar";
import Paths from "./util/consts/Paths";
import { Flex } from "./styles/container";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Pages from "./pages";

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
              <Route path="/" element={<Pages.Landing />} />
              <Route path={Paths.JOIN} element={<Pages.Join />} />
              <Route path={Paths.JOININFO} element={<Pages.JoinInfo />} />
              <Route
                path={Paths.JOINPROFILEMESSAGE}
                element={<Pages.JoinProfileMessage />}
              />
              <Route path="/*" element={<Pages.NotFound />} />
              <Route path={Paths.FEED} element={<Pages.Feed />} />
              <Route path={Paths.NEWPOST} element={<Pages.NewPost />} />
              <Route path={Paths.NOTIFICATIONS} element={<Pages.Notifications />} />
              <Route path={Paths.PROFILE} element={<Pages.Profile />} />
              <Route path={Paths.PROFILEEDIT} element={<Pages.ProfileEdit />} />
              <Route path={Paths.SEARCH} element={<Pages.Search />} />
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
