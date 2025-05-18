import type { Schema, Struct } from '@strapi/strapi';

export interface HomePageActivitiesHighlight extends Struct.ComponentSchema {
  collectionName: 'components_home_page_activities_highlights';
  info: {
    description: '';
    displayName: 'activiy-card';
    icon: 'globe';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageActivitiesHightlight extends Struct.ComponentSchema {
  collectionName: 'components_home_page_activities_hightlights';
  info: {
    displayName: 'Activities-Hightlight';
  };
  attributes: {
    activities: Schema.Attribute.Component<
      'home-page.activities-highlight',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomePageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'quote';
  };
  attributes: {
    button1: Schema.Attribute.String;
    button2: Schema.Attribute.String;
    subText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home-page.activities-highlight': HomePageActivitiesHighlight;
      'home-page.activities-hightlight': HomePageActivitiesHightlight;
      'home-page.hero-section': HomePageHeroSection;
    }
  }
}
