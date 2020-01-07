import React from 'react';
import { DefaultButton, mergeStyles, Stack } from 'office-ui-fabric-react';

const buttonStyle = mergeStyles({
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10
})

type ButtonProps = {
    setCurrent: any
    reset: any
}

export const Buttons : React.FunctionComponent<ButtonProps> = (props) => {
    return (
        <Stack>
            <DefaultButton className={buttonStyle} text="Switch Current" onClick={props.setCurrent}/>
            <DefaultButton className={buttonStyle} text="Start Over" onClick={props.reset}/>
        </Stack>
    )
};