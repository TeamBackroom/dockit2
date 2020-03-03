import S from '@sanity/desk-tool/structure-builder';
import {
  MdMenu,
  MdSettings,
  MdPerson,
  MdDescription,
  MdLocalOffer,
  MdFlashOn,
  MdAnnouncement,
  MdAssignmentTurnedIn,
  MdSettingsInputComponent,
  MdInsertDriveFile,
  MdAttachMoney,
} from 'react-icons/lib/md';
import IframePreview from '../previews/IframePreview';

// Web preview configuration
const remoteURL = 'https://dockit2.netlify.com';
const localURL = 'http://localhost:8000';
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL;

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.divider(),
      S.listItem()
        .title('Nav')
        .icon(MdMenu)
        .schemaType('nav')
        .child(
          S.editor()
            .id('nav')
            .schemaType('nav')
            .documentId('nav'),
        ),
      S.divider(),
      S.listItem()
        .title('Landing Page')
        .icon(MdInsertDriveFile)
        .child(
          S.editor()
            .id('landingPage')
            .schemaType('landingPage')
            .documentId('landingPage'),
        ),
      S.listItem()
        .title('Features')
        .icon(MdSettingsInputComponent)
        .schemaType('feature')
        .child(S.documentTypeList('feature').title('Features')),
      S.listItem()
        .title('Solutions')
        .icon(MdAssignmentTurnedIn)
        .schemaType('solution')
        .child(S.documentTypeList('solution').title('Solutions')),
      S.listItem()
        .title('Statements')
        .icon(MdAnnouncement)
        .schemaType('statement')
        .child(S.documentTypeList('statement').title('Statements')),
      S.listItem()
        .title('CTAs')
        .icon(MdFlashOn)
        .schemaType('cta')
        .child(S.documentTypeList('cta').title('CTAs')),
      S.listItem()
        .title('Pricing')
        .icon(MdAttachMoney)
        .schemaType('plan')
        .child(S.documentTypeList('plan').title('Subscription PLans')),
      S.divider(),
      S.listItem()
        .title('Blog posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(MdLocalOffer)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'category',
            'author',
            'post',
            'siteSettings',
            'landingPage',
            'feature',
            'cta',
            'solution',
            'statement',
            'nav',
            'plan',
          ].includes(listItem.getId()),
      ),
    ]);
