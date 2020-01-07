import React from 'react';
import {Stack, Text, Separator, mergeStyles} from 'office-ui-fabric-react';
import {Header} from './Header';
import Artwork from './Artwork';
import {Options} from './Options';

const btmMargin = mergeStyles({
    marginBottom: 50
});

export const App : React.FunctionComponent = () => {
    return (
        <Stack>
            <Stack className={btmMargin}>
                <Header />
            </Stack>
            <Stack horizontal>
                <Stack grow={1}>
                    <Artwork/>
                </Stack>
                <Separator vertical />
                <Stack grow={1}>
                    <Options/>
                </Stack>
                <Separator vertical />
                <Stack grow={1}>
                    <Artwork/>
                </Stack>
            </Stack>
        </Stack>

    );
};
