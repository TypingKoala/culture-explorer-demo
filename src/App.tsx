import React from 'react';
import {Stack, Text, Separator, mergeStyles} from 'office-ui-fabric-react';
import {Header} from './Header';
import Artwork from './Artwork';
import Options from './Options';
import GalleryItem from './GalleryItem';
import ListGrid from './Gallery';
import CollectionAdder from './CollectionAdder';
import {Buttons} from './Buttons';

const btmMargin = mergeStyles({
    marginBottom: 50
});

interface IProps {};

interface IState {
    current: GalleryItem,
    selected: GalleryItem,
    galleryItems: GalleryItem[]
    collections: any
}

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

export class App extends React.Component<IProps, IState> {
    
    constructor(props:any) {
        super(props);
        this.state = {
            current: defaultGalleryItem,
            selected: defaultSelectedGalleryItem,
            galleryItems: [defaultGalleryItem, defaultGalleryItem, defaultGalleryItem, defaultGalleryItem, defaultGalleryItem],
            collections: {'col1': [defaultGalleryItem], 'col2':[defaultGalleryItem, defaultGalleryItem]}
        }
        this.setSelected = this.setSelected.bind(this);
    }

    setCurrent(newCurrent: GalleryItem): void {
        this.setState({"current": newCurrent});
    }

    setSelected(newSelected: GalleryItem): void {
        this.setState({"selected": newSelected});
    }

    setGalleryItems(newItems: GalleryItem[]): void {
        this.setState({"galleryItems": newItems});
    }

    componentWillMount() {
        const api_key = process.env.REACT_APP_RIJKSMUSEUM_API_KEY;
        const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${api_key}&involvedMaker=Rembrandt+van+Rijn`;

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((resJson: any) => {
                let newItems: GalleryItem[] = [];
                resJson.artObjects.forEach((obj:any) => {
                    newItems.push(new GalleryItem(obj.webImage.url, obj.title, obj.longTitle));
                });
                this.setGalleryItems(newItems);
            });
    }

    render() {
        return (
            <Stack>
                <Stack className={btmMargin}>
                    <Header />
                </Stack>
                <Stack horizontal>
                    <Stack grow={1}>
                        <Artwork item={this.state.current} />
                        <CollectionAdder items={this.state.collections}/>
                        <Buttons 
                            setCurrent={() => this.setCurrent(this.state.selected)} 
                            reset={() => {this.setCurrent(defaultGalleryItem); this.setSelected(defaultSelectedGalleryItem)}}/>
                    </Stack>
                    <Separator vertical />
                    <Stack grow={1}>
                        <Options/>
                    </Stack>
                    <Separator vertical />
                    <Stack grow={1}>
                        <Artwork item={this.state.selected} />
                        <ListGrid items={this.state.galleryItems} setSelected={this.setSelected}/>
                    </Stack>
                </Stack>
            </Stack>
    
        );
    }
}
