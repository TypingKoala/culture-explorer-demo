import React from 'react';
import {Stack, Text} from 'office-ui-fabric-react';
import {Header} from './Header';
import {Options} from './Options';

export const App : React.FunctionComponent = () => {
    return (
        <Stack>
            <Stack>
                <Header />
            </Stack>
            <Stack horizontal>
                <Stack grow={1}>
                    <Text>Column A</Text>
                </Stack>
                <Stack grow={1}>
                    <Options/>
                </Stack>
                <Stack grow={1}>
                    <Text>Column C</Text>
                </Stack>
            </Stack>
        </Stack>

    );
};
