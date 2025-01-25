import './App.css';
import { useState, useEffect, useRef } from 'react';
import Navigator from './components/layouts/Navigator.jsx';
import * as Styled from './components/styledComponents.js';
import Home from './components/pages/Home.jsx';
import Introduce from './components/pages/Introduce.jsx';
import Values from './components/pages/Values.jsx';
import Projects from './components/pages/Projects.jsx';

function App() {
  const contentDivRef = useRef();

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();

      const { deltaY } = e;
      const { scrollTop } = contentDivRef.current;
      const pageHeight = window.innerHeight;
      const dividerHeight = 5;

      if (deltaY > 50) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          contentDivRef.current.scrollTo({
            top: pageHeight + dividerHeight,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          contentDivRef.current.scrollTo({
            top: pageHeight * 2 + dividerHeight * 2,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          contentDivRef.current.scrollTo({
            top: pageHeight * 3 + dividerHeight * 3,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          contentDivRef.current.scrollTo({
            top: pageHeight * 3 + dividerHeight * 3,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else if (deltaY < -50) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          contentDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          contentDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          contentDivRef.current.scrollTo({
            top: pageHeight + dividerHeight,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          contentDivRef.current.scrollTo({
            top: pageHeight * 2 + dividerHeight * 2,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
      contentDivRef.current.scrollTo({
        top: pageHeight * (pageIndex + 1) + dividerHeight * (pageIndex + 1),
        left: 0,
        behavior: 'smooth',
      });
    };
    const contentDivRefCurrent = contentDivRef.current;
    contentDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      contentDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <>
      <Navigator></Navigator>
      <Styled.contentDiv ref={contentDivRef}>
        <Home></Home>
        <Styled.screenDivider></Styled.screenDivider>
        <Introduce></Introduce>
        <Styled.screenDivider></Styled.screenDivider>
        <Values></Values>
        <Styled.screenDivider></Styled.screenDivider>
        <Projects></Projects>
      </Styled.contentDiv>
    </>
  );
}

export default App;
