import './App.scss';
import Login from './components/login/Login';
import CreateAccount from './components/create-account/CreateAccount';
import Slide from './components/slider/Slider';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Button from './components/button/Button';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLogin, setCurrentLogin] = useState(1);

  const changeSlide = (slide) => () => {
    setCurrentSlide(slide)
  }


  const changeLogin = (index) => () => {
    setCurrentLogin(index)
  }


  return (
    <div className="App">
      <div className="box-slider">
        <AutoPlaySwipeableViews index={currentSlide} onChangeIndex={(index)=> changeSlide(index)()}>
          <Slide
            title="Marcenas mattis egestas"
            informations="Erdum et malesuada fames ac ante ileum
            primmer in faucibus uspendisse porta."
            className="container-how-to"
          />
          <Slide
            title="Neque porro quisquam est qui dolorem"
            informations=" when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            className="container-how-to2"
          />
          <Slide
            title="Neque porro quisquam est qui dolorem"
            informations=" when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            className="container-how-to3"
          />
          <Slide
            title="Neque porro quisquam est qui dolorem"
            informations=" when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            className="container-how-to4"
          />
        </AutoPlaySwipeableViews>
        <div className="box-button-slide">
          <Button active={currentSlide === 0} onClick={changeSlide(0)} />
          <Button active={currentSlide === 1} onClick={changeSlide(1)}/>
          <Button active={currentSlide === 2} onClick={changeSlide(2)}/>
          <Button active={currentSlide === 3} onClick={changeSlide(3)}/>
        </div>
      </div>
      {currentLogin === 1 && <Login onClick={changeLogin(0)}/>}
      {currentLogin === 0 && <CreateAccount  onClick={changeLogin(1)} />}
    </div>
  );
}

export default App;