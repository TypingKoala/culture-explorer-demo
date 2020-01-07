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
    adder: any
}

class CollectionAdder extends React.Component < CollectionProps > {
  public render(): JSX.Element {
    if (this.props.items.length !== 0){
        let keys = Object.keys(this.props.items)
        console.log(typeof(keys[0]))
        let menu = [{key: keys[0],
            text:keys[0],
            onClick: ()=>this.props.adder(keys[0])}]
        for (let i = 1; i<keys.length; i++){
            menu.push({key:keys[i],
            text:keys[i],
            onClick:()=> this.props.adder(keys[i])})
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
        return (
            <div>
            </div>
            );
    }
}

export default CollectionAdder