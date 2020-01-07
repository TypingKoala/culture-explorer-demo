import React from'react';
import { ContextualMenuItemType, IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { mergeStyles } from 'office-ui-fabric-react'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import GalleryItem from './GalleryItem';

// import './ContextualMenuExample.scss';

const spacerTR = mergeStyles({
    marginLeft: 'auto',
    marginRight: 'auto'
  });

type CollectionProps = {
    items: any,
    adder: any,
    addCollection: any
}

class CollectionAdder extends React.Component < CollectionProps > {
  public render(): JSX.Element {
    let menu = [{key: "NEWcollectionButton",
        text: "Make a new Collection",
        onClick: ()=>this.props.addCollection("Collection3")}]
    if (this.props.items.length !== 0){
        let keys = Object.keys(this.props.items)
        console.log(typeof(keys[0]))
        for (let i = 0; i<keys.length; i++){
            menu.push({key:keys[i],
            text:keys[i],
            onClick:()=> this.props.adder(keys[i])})
        }
    }
    return (
        <div className={spacerTR}>
            <DefaultButton
            text="Add to Collection"
            menuProps={{
                shouldFocusOnMount: true,
                items: menu
            }}
            />
        </div>
        );
    }
}

export default CollectionAdder