import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageAcademicExcellence extends Struct.ComponentSchema {
  collectionName: 'components_homepage_academic_excellences';
  info: {
    displayName: 'AcademicExcellence';
  };
  attributes: {};
}

export interface HomepageExcellenceInNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_excellence_in_numbers';
  info: {
    displayName: 'ExcellenceInNumbers';
  };
  attributes: {};
}

export interface HomepageExtraActivitiesHighlight
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_extra_activities_highlights';
  info: {
    displayName: 'ExtraActivitiesHighlight';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFooter extends Struct.ComponentSchema {
  collectionName: 'components_homepage_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
  };
}

export interface HomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_homepage_image_sliders';
  info: {
    displayName: 'ImageSlider';
  };
  attributes: {};
}

export interface HomepageLatestUpdates extends Struct.ComponentSchema {
  collectionName: 'components_homepage_latest_updates';
  info: {
    displayName: 'LatestUpdates';
  };
  attributes: {};
}

export interface HomepageMarquee extends Struct.ComponentSchema {
  collectionName: 'components_homepage_marquees';
  info: {
    displayName: 'Marquee';
  };
  attributes: {
    trending: Schema.Attribute.JSON;
  };
}

export interface HomepageTestimoials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimoials';
  info: {
    displayName: 'Testimoials';
  };
  attributes: {};
}

export interface OthersActivityCard extends Struct.ComponentSchema {
  collectionName: 'components_others_activity_cards';
  info: {
    displayName: 'ActivityCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.academic-excellence': HomepageAcademicExcellence;
      'homepage.excellence-in-numbers': HomepageExcellenceInNumbers;
      'homepage.extra-activities-highlight': HomepageExtraActivitiesHighlight;
      'homepage.footer': HomepageFooter;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.image-slider': HomepageImageSlider;
      'homepage.latest-updates': HomepageLatestUpdates;
      'homepage.marquee': HomepageMarquee;
      'homepage.testimoials': HomepageTestimoials;
      'others.activity-card': OthersActivityCard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
