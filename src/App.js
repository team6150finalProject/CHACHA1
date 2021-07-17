import React from 'react';
import Container from 'react-bootstrap/Container';
import Contact from './components/Contact';
import FindStore from './components/FindStore';
import MainFooter from './components/MainFooter';
import MainNav from './components/MainNav';
import Story from './components/Story';
import TeaCarousel from './components/TeaCarousel';
import TeaGallery from './components/TeaGallery';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainNav></MainNav>
        <Story></Story>
        <TeaCarousel></TeaCarousel>
        <Container>
          <TeaGallery></TeaGallery>
          <FindStore></FindStore>
          <Contact></Contact>
        </Container>
        <MainFooter></MainFooter>
      </div>
    );
  }
}

export default App;
