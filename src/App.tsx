import React from 'react';
import {Stack, Text, Separator} from 'office-ui-fabric-react';
import {Header} from './Header';
import Artwork from './Artwork';
import {Options} from './Options';

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
                <Separator vertical />
                <Stack grow={1}>
                    <Options/>
                </Stack>
                <Separator vertical />
                <Stack grow={1}>
                    {/* <Text>Column C</Text> */}
                    <Artwork/>
                </Stack>
            </Stack>
        </Stack>

    );
};
