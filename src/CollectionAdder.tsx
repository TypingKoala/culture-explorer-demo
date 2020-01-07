import React from'react';
import { ContextualMenuItemType, IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { mergeStyles } from 'office-ui-fabric-react'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
// import './ContextualMenuExample.scss';

const spacerTR = mergeStyles({
    marginLeft: 'auto',
    marginRight: 'auto'
  });

class ContextualMenuDefaultExample extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={spacerTR}>
        <DefaultButton
          text="Add to Collection"
          menuProps={{
            shouldFocusOnMount: true,
            items: [ //will change to make collections
              {
                key: 'newItem',
                text: 'New',
                onClick: () => console.log('New clicked')
              },
              {
                key: 'divider_1',
                itemType: ContextualMenuItemType.Divider
              },
              {
                key: 'rename',
                text: 'Rename',
                onClick: () => console.log('Rename clicked')
              },
              {
                key: 'edit',
                text: 'Edit',
                onClick: () => console.log('Edit clicked')
              },
              {
                key: 'properties',
                text: 'Properties',
                onClick: () => console.log('Properties clicked')
              },
              {
                key: 'linkNoTarget',
                text: 'Link same window',
                href: 'http://bing.com'
              },
              {
                key: 'linkWithTarget',
                text: 'Link new window',
                href: 'http://bing.com',
                target: '_blank'
              },
              {
                key: 'linkWithOnClick',
                name: 'Link click',
                href: 'http://bing.com',
                onClick: (ev?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined, item?: IContextualMenuItem | undefined) => {
                  alert('Link clicked');
                  if(ev !== undefined){
                    ev.preventDefault();
                  }
                },
                target: '_blank'
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default ContextualMenuDefaultExample