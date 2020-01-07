import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

export class GalleryCard extends React.PureComponent {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          name: 'The Night Watch',
          linkProps: {
            href: 'http://bing.com',
            target: '_blank'
          },
          previewImageSrc: "https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0",
          imageFit: ImageFit.cover,
          width: 200,
          height: 150
        }
      ]
    };

    return (
      <DocumentCard
        onClickHref="http://bing.com"
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
