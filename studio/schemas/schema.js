// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import author from './documents/author';
import category from './documents/category';
import cta from './documents/cta';
import feature from './documents/feature';
import landingPage from './documents/landingPage';
import licensePage from './documents/licensePage';
import nav from './documents/nav';
import plan from './documents/plan';
import post from './documents/post';
import pricingPage from './documents/pricingPage';
import siteSettings from './documents/siteSettings';
import solution from './documents/solution';
import statement from './documents/statement';
import termsPage from './documents/termsPage';
import testimonial from './documents/testimonial';
import video from './documents/video';

// Object types
import authorReference from './objects/authorReference';
import bioPortableText from './objects/bioPortableText';
import bodyPortableText from './objects/bodyPortableText';
import excerptPortableText from './objects/excerptPortableText';
import featuresSection from './objects/featuresSection';
import formSection from './objects/formSection';
import heroSection from './objects/heroSection';
import heroSimple from './objects/heroSimple';
import mainImage from './objects/mainImage';
import navItem from './objects/navItem';
import seo from './objects/seo';
import testimonialsSection from './objects/testimonialsSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    authorReference,
    bioPortableText,
    bodyPortableText,
    category,
    cta,
    excerptPortableText,
    feature,
    featuresSection,
    formSection,
    heroSection,
    heroSimple,
    landingPage,
    licensePage,
    mainImage,
    nav,
    navItem,
    plan,
    post,
    pricingPage,
    seo,
    siteSettings,
    solution,
    statement,
    termsPage,
    testimonial,
    testimonialsSection,
    video,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
