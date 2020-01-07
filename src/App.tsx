import React from 'react';
import {Stack, Text, Separator, mergeStyles} from 'office-ui-fabric-react';
import {Header} from './Header';
import Artwork from './Artwork';
import Options from './Options';
import GalleryItem from './GalleryItem';
import ListGrid from './Gallery';
import ContextualMenuDefaultExample from './CollectionAdder';
import {Buttons} from './Buttons';

const btmMargin = mergeStyles({
    marginBottom: 50
});

export const App : React.FunctionComponent = () => {
    const RIJKSMUSEUM_API_KEY = process.env.REACT_APP_RIJKSMUSEUM_API_KEY;

    const defaultGalleryItem = new GalleryItem(
        "https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0",
        "The Night Watch",
        "Officers and other civic guardsmen of District II in Amsterdam, under the command of Captain Frans Banninck Cocq and Lieutenant Willem van Ruytenburch, known as ‘The Night Watch’"
    );

    const defaultSelectedGalleryItem = new GalleryItem(
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Peacemakers_1868.jpg",
        "The Peacemakers",
        "A meeting between Union leadership."
    )

    const [ current, setCurrent ] = React.useState(defaultGalleryItem);

    const [ selected, setSelected ] = React.useState(defaultSelectedGalleryItem);

    const [ galleryItems, setGalleryItems ] = React.useState([defaultGalleryItem, defaultGalleryItem]);

    return (
        <Stack>
            <Stack className={btmMargin}>
                <Header />
            </Stack>
            <Stack horizontal>
                <Stack grow={1}>
                    <Artwork item={current} />
                    <ContextualMenuDefaultExample/>
                    <Buttons setCurrent={() => setCurrent(selected)}/>
                </Stack>
                <Separator vertical />
                <Stack grow={1}>
                    <Options/>
                </Stack>
                <Separator vertical />
                <Stack grow={1}>
                    <Artwork item={selected} />
                    <ListGrid items={galleryItems} />
                </Stack>
            </Stack>
        </Stack>

    );
};
