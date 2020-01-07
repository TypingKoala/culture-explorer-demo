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
    items: any
}
type Entries = {
    key: string,
    text:string,
    onClick: Function
}

class CollectionAdder extends React.Component < CollectionProps > {
  public render(): JSX.Element {
    if (this.props.items.length !== 0){
        let keys = Object.keys(this.props.items)
        let menu = [{key: keys[0],
            text:keys[0],
            onClick: ()=> console.log("added")}]
        for (let i = 1; i<keys.length; i++){
            menu.push({key:keys[i],
            text:keys[i],
            onClick:()=>console.log("added")})
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