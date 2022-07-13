import { useState } from 'react'
import './App.sass'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import blue from '@mui/material/colors/index'
import { SvgIcon } from '@mui/material';
import Grid from './GRID.svg';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='body-container'>
      <header>
        <div>
          <h3>Choosey.</h3>
        </div>
        <div className='pill-chooser'><p>the original choosey</p></div>
        <div className='pill-chooser'><p>multi-choosey</p></div>
        <div className='pill-chooser'><p>choosey search</p></div>
      </header>
      <div className='gradient-container'>  </div>
        <div className='hero-container'>
          <img className='hero__grid' src={Grid} />
          <h2 className='hero__sub-head'>In a world with so many options, it's ok to be:</h2>
          <h1>CHOOSEY</h1>
      </div>
      <div className='choicelist-container'>
        <div className='choosey-title'>
          <ArrowCircleLeftOutlinedIcon />
          <h2>The Original Choosey</h2>
          <ArrowCircleRightOutlinedIcon/>
        </div>
        <div className='choosey-description'>
          <p> All gas, no brakes. Pick from multiple choices. </p>
        </div>
        <div className='choice-list-carousel'>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      {/* <div className="description">
        <div> 
          <p>
          At Choosey, fashion isn't just a purchase you make or the clothes adorning your bod. It's about a lifestyle. Where will you be when Choosey Choicelist comes back? Hopefully drippin' in our $800 t-shirt.
          </p>
        </div>

      </div>
      <footer>#Better2BeChoosey</footer> */}
    </div>
  )
}
