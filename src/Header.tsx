import React from 'react';
import {CommandBar, ICommandBarItemProps} from 'office-ui-fabric-react/lib/CommandBar';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';

// initialize icons
initializeIcons();

export const Header : React.FunctionComponent = () => {
  
  const _items: ICommandBarItemProps[] = [
    {
      key: 'title',
      text: 'Deep Culture Explorer',
      iconProps: { iconName: 'BranchSearch' }
    }
  ];

  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'cart',
      text: 'Cart',
      ariaLabel: 'Cart',
      iconOnly: true,
      iconProps: { iconName: 'ShoppingCart' }
    }
  ];

  return (
    <CommandBar
      items={_items}
      farItems={_farItems}
    />
  );
};