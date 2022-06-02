import { useState } from 'react'
import './App.css'

import { ChoiceList } from './components/ChoiceList';
import {states} from "./data/stateOptions";

function App() {
  const [listAValue, setListAValue] = useState<string>('');
  const [listBValue, setListBValue] = useState<string[]>([]);
  const [listCValue, setListCValue] = useState<string>('');
  const [listDValue, setListDValue] = useState<string[]>([]);

  return (
    <div className="App">
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

      <ChoiceList
        label="Single option w/ search"
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
  )
}

export default App
