import React from 'react';
import Main from '../components-main/Main';
import MainHeader from '../components-main/MainHeader';
import MainIntro from '../components-main/MainIntro';
import MainFooter from '../components-main/MainFooter';
import MainMap from '../components-main/MainMap';

const MainView = () => {
  return (
    <>
      <MainHeader />
      <Main>
        <MainIntro />
        <MainMap />
      </Main>
      <MainFooter />
    </>
  );
};

export default MainView;

/* 버튼 클릭시 나오는 메인 화면 */
