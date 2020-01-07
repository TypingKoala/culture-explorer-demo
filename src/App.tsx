import React from 'react';
import {Stack, Text} from 'office-ui-fabric-react';

export const App : React.FunctionComponent = () => {
    return (
        <Stack>
            <Stack>
                {/*header*/}
            </Stack>
            <Stack horizontal>
                <Stack grow={1}>
                    <Text>Column A</Text>
                </Stack>
                <Stack grow={1}>
                    <Text>Column B</Text>
                </Stack>
                <Stack grow={1}>
                    <Text>Column C</Text>
                </Stack>
            </Stack>
        </Stack>

    );
};
