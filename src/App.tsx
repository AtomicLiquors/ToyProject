import React from "react";
import "@/App.css";
import "@/Transition.css";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";
import Feed from "@/pages/Feed";
import Join from "@/pages/Join";
import Navbar from "@/components/layout/Navbar";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App: React.FC = () => {
  const location = useLocation();

  return (
    /* location.pathname==="/postwrite"?location.pathname:null */

    <S.AppContainer>
      <S.ScreenContainer>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="slide"
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/join" element={<Join />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </S.ScreenContainer>
      <Navbar />
    </S.AppContainer>
  );
};

const S = {
  AppContainer: styled.div``,

  ScreenContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

export default App;
