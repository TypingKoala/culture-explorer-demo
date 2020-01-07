import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import GalleryItem from './GalleryItem';

type CardProps = {
  item: GalleryItem
  setSelected: any
}

export class GalleryCard extends React.PureComponent<CardProps> {

  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          name: this.props.item.title,
          linkProps: {
            href: '#'
          },
          previewImageSrc: this.props.item.url,
          imageFit: ImageFit.cover,
          width: 200,
          height: 150
        }
      ]
    };

    return (
      <DocumentCard
        onClick={()=>this.props.setSelected(this.props.item)}
      >
        <DocumentCardPreview {...previewProps} />
        {/* <DocumentCardTitle
          title="The Nightwatch"
          shouldTruncate={true}
        /> */}
      </DocumentCard>
    );
  }
}