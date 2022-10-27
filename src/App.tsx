import './App.sass';

import React, { useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Grid from './GRID.svg';
import { ChoiceList } from './components/ChoiceList';
import { states } from './data/stateOptions';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
      },
    }),
  },
});

export default function App() {
  const [listAValue, setListAValue] = useState<string>('');
  const [listBValue, setListBValue] = useState<string[]>([]);
  const [listCValue, setListCValue] = useState<string>('');
  const [listDValue, setListDValue] = useState<string[]>([]);

  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <div className="body-container">
        <header>
          <div>
            <h3>Choosey.</h3>
          </div>
          {/* <div className="pill-chooser"><p>the original choosey</p></div>
        <div className="pill-chooser"><p>multi-choosey</p></div>
        <div className="pill-chooser"><p>choosey search</p></div>
        <div className="pill-chooser"><p>multi-choosey search extreme</p></div> */}
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
          <div className="choice-list-carousel">
            <div>
              <ChoiceList
                label="Single option"
                selected={listAValue}
                options={[
                  { label: 'Option A', value: 'a' },
                  { label: 'Option B', value: 'b' },
                  { label: 'Option C', value: 'c' },
                  { label: 'Option D', value: 'd' },
                  { label: 'Option E', value: 'e' },
                ]}
                onSelect={setListAValue}
              />
            </div>

            <div>
              <ChoiceList
                label="Multiple options"
                selected={listBValue}
                options={[
                  { label: 'Option A', value: 'a' },
                  { label: 'Option B', value: 'b' },
                  { label: 'Option C', value: 'c' },
                  { label: 'Option D', value: 'd' },
                  { label: 'Option E', value: 'e' },
                ]}
                allowMultiple
                onSelect={setListBValue}
              />
            </div>

            <ChoiceList
              label="Single option w/ search"
              autocomplete
              selected={listCValue}
              options={states}
              allowSearch
              onSelect={setListCValue}
            />

            <ChoiceList
              label="Multiple options w/ search"
              selected={setListDValue}
              options={states}
              allowSearch
              allowMultiple
              onSelect={listDValue}
            />

          </div>
        </div>
        <footer>#Better2BeChoosey #DontSnoozeOnChoosey</footer>
      </div>
    </ChakraProvider>

  );
}
