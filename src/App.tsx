import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";
import Feed from "@/pages/Feed";
import Navbar from "@/components/layout/Navbar";

const App: React.FC = () => {
  return (
    <S.AppContainer className="main-container">
      <S.WidthFrame>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar/>
      </S.WidthFrame>
    </S.AppContainer>
  );
};

const S = {
  AppContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
  `,

  WidthFrame: styled.div`
    width: 500px;
  `
}
        

export default App;
