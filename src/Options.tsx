import React from 'react';
import { Stack, Dropdown, IDropdownOption, IDropdownStyles} from 'office-ui-fabric-react';
import { mergeStyles } from '@uifabric/merge-styles';

const dropdown = mergeStyles({
    marginBottom : 10
});

interface IState {
}

interface IProps {
  options? : Object,
  handleCultureChange? : (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void,
  handleMediumChange? : (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width:300 }
}

const cultureOptions: IDropdownOption[] = [
    { key: 'cultureChinese', text: 'Chinese' },
    { key: 'cultureAmerican', text: 'American' },
    { key: 'cultureBritish', text: 'British' },
    { key: 'cultureKorean', text: 'Korean' }
];

const mediumOptions: IDropdownOption[] = [
    { key: 'mediumPainting', text: 'Painting'},
    { key: 'mediumSculpture', text: 'Sculpture'},
    { key: 'mediumPottery', text: 'Pottery'},
    { key: 'mediumArmor', text: 'Armor'}
];

class Options extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(event : React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void {
    console.log(option)
  }

  private createDropdowns(): JSX.Element[] {
    let dropdowns: JSX.Element[] = [];

    let selectors: Object = {
      culture: {
        callback: this.handleChange,
        options: ['Chinese', 'American', 'British', 'Korean']
      },
      medium: {
        callback: this.handleChange,
        options: ['Painting', 'Sculpture', 'Pottery', 'Armor']
      }
    };

    for (let category in Object.keys(selectors)) {
      if (Object.prototype.hasOwnProperty.call(selectors, category)) {
        dropdowns.push(
          <Dropdown
              placeholder={"Select " + category}
              label={category}
              options={cultureOptions}
              styles={dropdownStyles}
              className={dropdown}
              onChange={this.props.handleCultureChange}
            />
        )
      }
    }

    return dropdowns;
  }

  render() {
    return(
      <Stack>
        <Stack.Item align="center">
          <Dropdown
            placeholder={"Select Culture"}
            label={"Culture"}
            options={cultureOptions}
            styles={dropdownStyles}
            className={dropdown}
            onChange={this.props.handleCultureChange}
          />
          <Dropdown
            placeholder={"Select Medium"}
            label={"Medium"}
            options={mediumOptions}
            styles={dropdownStyles}
            className={dropdown}
            onChange={this.props.handleMediumChange}
          />
        </Stack.Item>
      </Stack>
    );
  }
}

export default Options