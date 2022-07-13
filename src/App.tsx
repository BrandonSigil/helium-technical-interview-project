import './App.sass';

import React from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Grid from './GRID.svg';
import ChoiceList from './components/ChoiceList';

export default function MultipleSelect() {
  return (
    <div className="body-container">
      <header>
        <div>
          <h3>Choosey.</h3>
        </div>
        <div className="pill-chooser"><p>the original choosey</p></div>
        <div className="pill-chooser"><p>multi-choosey</p></div>
        <div className="pill-chooser"><p>choosey search</p></div>
      </header>
      <div className="gradient-container">  </div>
      <div className="hero-container">
        <img className="hero__grid" alt="grid-svg-design" src={Grid} />
        <h2 className="hero__sub-head">In a world with so many options, it's ok to be:</h2>
        <h1>CHOOSEY</h1>
      </div>
      <div className="choicelist-container">
        <div className="choosey-title">
          <ArrowCircleLeftOutlinedIcon />
          <h2>The Original Choosey</h2>
          <ArrowCircleRightOutlinedIcon />
        </div>
        <div className="choosey-description">
          <p> All gas, no brakes. Pick from multiple choices. </p>
        </div>
        <div className="choice-list-carousel" />
      </div>
      {/* <div className="description">
        <div>
          <p>
          At Choosey, fashion isn't just a purchase you make or the clothes adorning your bod.
          It's about a lifestyle. Where will you be when Choosey Choicelist comes back?
          Hopefully drippin' in our $800 t-shirt.
          </p>
        </div>

      </div>
      <footer>#Better2BeChoosey</footer> */}
    </div>
  );
}
