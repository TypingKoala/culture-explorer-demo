import React from 'react';
import {Stack, Fabric} from 'office-ui-fabric-react';
import {Header} from './Header';
import Artwork from './Artwork';
import {Options} from './Options';
import ListGridExample from './Gallery';

export const App : React.FunctionComponent = () => {
    return (
        <Stack>
            <Stack>
                <Header />
            </Stack>
            <Stack horizontal>
                <Stack grow={1}>
                    {/* <Text>Column A</Text> */}
                    <Artwork/>
                </Stack>
                <Stack grow={1}>
                    <Options/>
                </Stack>
                <Stack grow={1}>
                    <Artwork/>
                    <ListGridExample/>
                </Stack>
            </Stack>
        </Stack>

    );
};
