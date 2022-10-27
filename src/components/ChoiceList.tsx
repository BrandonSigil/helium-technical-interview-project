// Implement your ChoiceList component here.
import * as React from 'react';
import { Select } from '@chakra-ui/react';

export type ChoiceListProps = {
  label: string;
  selected: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string[]>> | string | string[];
  onSelect?: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string[]>> | string[];
  options:{
    label: any;
    value: string;
  }[];
  autocomplete?: boolean;
  allowSearch?: boolean;
  allowMultiple?: boolean;

};

export function ChoiceList(props: ChoiceListProps): React.ReactElement {
  // const renderOptionList = props.options.map((label, value) => {
  //   <option key={value}>{label}</option>
  // });

  console.log(props.options.label)

  return (
    <Select placeholder={props.label }>
      {/* {props.options.map((label, value) => (
        <option key={value}>{label}</option>
      ))} */}
    </Select>
  );
}

export default ChoiceList;
