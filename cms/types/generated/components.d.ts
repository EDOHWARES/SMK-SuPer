import type { Schema, Struct } from '@strapi/strapi';

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
      'home-page.hero-section': HomePageHeroSection;
    }
  }
}
