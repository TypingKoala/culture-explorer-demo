import React from 'react';
import { Stack, FontWeights, Dropdown, IDropdownOption, IDropdownStyles} from 'office-ui-fabric-react';

const boldStyle = {
  root: { fontWeight: FontWeights.semibold }
}

interface IState {
}

interface IProps {
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width:300 }
}

const cultureOptions: IDropdownOption[] = [
    { key: 'cultureChinese', text: 'Chinese' },
    { key: 'cultureAmerican', text: 'American' },
    { key: 'cultureBritish', text: 'British' },
    { key: 'cultureKorean', text: 'Korean' }
]

const mediumOptions: IDropdownOption[] = [
    { key: 'mediumPainting', text: 'Painting'},
    { key: 'mediumSculpture', text: 'Sculpture'},
    { key: 'mediumPottery', text: 'Pottery'},
    { key: 'mediumArmor', text: 'Armor'}
]

class Options extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
  }

  render() {
    return(
      <Stack>
        <Dropdown
          placeholder="Select Culture"
          label="Culture"
          options={cultureOptions}
          styles={dropdownStyles}
          style={{"marginBottom" : "10px"}}
          onChange={this.handleChange}
        />
        <Dropdown
          placeholder="Select Medium"
          label="Medium"
          options={mediumOptions}
          styles={dropdownStyles}
          style={{"marginBottom" : "10px"}}
          onChange={this.handleChange}
        />
      </Stack>
    );
    
  }
}

export { Options };