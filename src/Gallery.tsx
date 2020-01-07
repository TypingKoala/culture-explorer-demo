import React from 'react';
import { FocusZone, List, IRectangle, ITheme, getTheme, mergeStyleSets, mergeStyles } from 'office-ui-fabric-react';
import GalleryItem from './GalleryItem';
import { GalleryCard } from './Gallery2';

//from site- scrollable list

type GalleryProps = {
  items: GalleryItem[]
  setSelected: any
}

interface IListGridExampleClassObject {
  listGridExample: string;
  listGridExampleTile: string;
  listGridExampleSizer: string;
  listGridExamplePadder: string;
  listGridExampleLabel: string;
  listGridExampleImage: string;
}

const theme: ITheme = getTheme();
const { palette, fonts } = theme;

const containerSize = mergeStyles({
    position: 'relative',
    maxHeight: '50vh',
    paddingTop: '20px',
    paddingRight: '4px',
    paddingLeft: '4px',
    paddingBottom: '20px',
    overflowX: 'hidden',
    overflowY: 'auto',

});

const classNames: IListGridExampleClassObject = mergeStyleSets({
  listGridExample: {
    overflow: 'hidden',
    fontSize: 0,
    position: 'relative'
  },
  listGridExampleTile: {
    textAlign: 'center',
    outline: 'none',
    position: 'relative',
    float: 'left',
    background: palette.neutralLighter,
    selectors: {
      'focus:after': {
        content: '',
        position: 'absolute',
        left: 2,
        right: 2,
        top: 2,
        bottom: 2,
        boxSizing: 'border-box',
        border: `1px solid ${palette.white}`
      }
    }
  },
  listGridExampleSizer: {
    paddingBottom: '100%'
  },
  listGridExamplePadder: {
    position: 'absolute',
    left: 2,
    top: 2,
    right: 2,
    bottom: 2
  },
  listGridExampleLabel: {
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#FFFFFF',
    position: 'absolute',
    padding: 10,
    bottom: 0,
    left: 0,
    width: '100%',
    fontSize: fonts.small.fontSize,
    boxSizing: 'border-box'
  },
  listGridExampleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }
});

class ListGrid extends React.Component<GalleryProps> {
  private _columnCount: number;

  constructor(props: GalleryProps) {
    super(props);
    this._columnCount = 3;
  }

  public render(): JSX.Element {
    return (
      <div className={containerSize}>
        <FocusZone data-is-scrollable='true'>
          <List
            className={classNames.listGridExample}
            items={this.props.items}
            onRenderCell={this._onRenderCell}
          />
        </FocusZone>
      </div>
    );
  }

  private _onRenderCell = (item: any): JSX.Element => {
    return (
      <div
        className={classNames.listGridExampleTile}
        data-is-focusable={true}
        style={{
          width: 100 / this._columnCount + '%',
          height: 150
        }}
      >
        <div className={classNames.listGridExampleSizer}>
          <div className={classNames.listGridExamplePadder}>
            <GalleryCard item={item} setSelected={()=>this.props.setSelected(item)}/>
          </div>
        </div>
      </div>
    );
  };
}

// const ListGridExampleWrapper = () => <Fabric><ListGridExample /></Fabric>;
export default ListGrid;
