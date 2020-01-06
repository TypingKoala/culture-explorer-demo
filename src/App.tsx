import React from 'react';
import {Stack, Text, FontWeights} from 'office-ui-fabric-react';

const boldStyle = {
    root: {
        fontWeight: FontWeights.semibold
    }
};

export const App : React.FunctionComponent = () => {
    return (
        <Stack>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    {/*header*/}
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm4">
                      <Text>Column A</Text>
                    </div>
                    <div className="ms-Grid-col ms-sm4">
                      <Text>Column B</Text>
                    </div>
                    <div className="ms-Grid-col ms-sm4">
                      <Text>Coumn C</Text>
                    </div>
                </div>
            </div>
        </Stack>

    );
};
