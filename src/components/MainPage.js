import React from 'react';
import Contact from './Contact';
import FindStore from './FindStore';
import Story from './Story';
import TeaCarousel from './TeaCarousel';
import TeaGallery from './TeaGallery';

import MainNav from "./MainNav";


class MainPage extends React.Component {
  render() {
    return (
      <div>
          <MainNav/>
        <Story></Story>
        <TeaCarousel></TeaCarousel>
        <TeaGallery></TeaGallery>
        <FindStore></FindStore>
        <Contact></Contact>
      </div>
    );
  }
}

export default MainPage;
