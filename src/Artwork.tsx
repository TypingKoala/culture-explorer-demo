import React from 'react';
import { Image, Text, Stack, mergeStyles} from 'office-ui-fabric-react';

const spacerB = mergeStyles({
    paddingBottom: 10,
  });

class Artwork extends React.Component{
  render(){
      return(
            <Stack
            horizontalAlign="center"
            verticalAlign="start"
            className={spacerB}
            >
                <Image
                    src='//q42imageserver.appspot.com/thumbnail/aa08df9c-0af9-4195-b31b-f578fbe0a4c9?cx=893&cy=702&cw=954&ch=954&w=200&h=200'
                    className={spacerB}
                />
                <Text variant="large">The Night Watch, Rembrandt van Rijn, 1642</Text>
                <Text variant="small">oil on canvas</Text>
            </Stack>
      )
  }
};

export default Artwork;