import type { Schema, Struct } from '@strapi/strapi';

export interface ContactUsCampusGallery extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_campus_galleries';
  info: {
    displayName: 'CampusGallery';
  };
  attributes: {
    galleries: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContactUsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    email: Schema.Attribute.Email;
    schoolAddress: Schema.Attribute.Blocks;
    schoolHours: Schema.Attribute.Blocks;
    telephone: Schema.Attribute.String;
  };
}

export interface ContactUsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    faq: Schema.Attribute.Component<'others.faq', true>;
  };
}

export interface ContactUsHowToReachUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_how_to_reachuses';
  info: {
    displayName: 'HowToReachUs';
  };
  attributes: {
    byCar: Schema.Attribute.Text;
    publicTransport: Schema.Attribute.Text;
  };
}

export interface GalleriMomentMoment extends Struct.ComponentSchema {
  collectionName: 'components_galleri_moment_moments';
  info: {
    displayName: 'Moment';
  };
  attributes: {
    MomentCards: Schema.Attribute.Component<'others.moment-card', true>;
  };
}

export interface HomepageAcademicExcellence extends Struct.ComponentSchema {
  collectionName: 'components_homepage_academic_excellences';
  info: {
    displayName: 'AcademicExcellence';
  };
  attributes: {
    excellence: Schema.Attribute.Component<'others.acad-exc-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageExcellenceInNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_excellence_in_numbers';
  info: {
    displayName: 'ExcellenceInNumbers';
  };
  attributes: {
    cards: Schema.Attribute.Component<'others.excel-in-num-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageExtraActivitiesHighlight
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_extra_activities_highlights';
  info: {
    displayName: 'ExtraActivitiesHighlight';
  };
  attributes: {
    activities: Schema.Attribute.Component<'others.activity-card', true>;
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
    contact: Schema.Attribute.Component<'others.foot-details', false>;
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
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomepageLatestUpdates extends Struct.ComponentSchema {
  collectionName: 'components_homepage_latest_updates';
  info: {
    displayName: 'LatestUpdates';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    updates: Schema.Attribute.Component<'others.latest-update-card', true>;
  };
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
  attributes: {
    subtitle: Schema.Attribute.Text;
    testimony: Schema.Attribute.Component<'others.testimony-c-ard', true>;
    title: Schema.Attribute.String;
  };
}

export interface LatestAnnouncementpageAnnounement
  extends Struct.ComponentSchema {
  collectionName: 'components_latest_announcementpage_announements';
  info: {
    displayName: 'announement';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    details: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['Important', 'Events', 'Academic', 'Sports', 'General']
    >;
  };
}

export interface OthersAcadExcCard extends Struct.ComponentSchema {
  collectionName: 'components_others_acad_exc_cards';
  info: {
    displayName: 'AcadExcCard';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
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

export interface OthersExcelInNumCard extends Struct.ComponentSchema {
  collectionName: 'components_others_excel_in_num_cards';
  info: {
    displayName: 'ExcelInNumCard';
  };
  attributes: {
    label: Schema.Attribute.String;
    percentage: Schema.Attribute.String;
  };
}

export interface OthersFaq extends Struct.ComponentSchema {
  collectionName: 'components_others_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface OthersFootDetails extends Struct.ComponentSchema {
  collectionName: 'components_others_foot_details';
  info: {
    displayName: 'FootDetails';
  };
  attributes: {
    contact: Schema.Attribute.JSON;
    motto: Schema.Attribute.Text;
  };
}

export interface OthersGarisMasaSejarahCard extends Struct.ComponentSchema {
  collectionName: 'components_others_garis_masa_sejarah_cards';
  info: {
    displayName: 'GarisMasaSejarahCard';
  };
  attributes: {
    date: Schema.Attribute.Date;
    details: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OthersLatestUpdateCard extends Struct.ComponentSchema {
  collectionName: 'components_others_latest_update_cards';
  info: {
    displayName: 'LatestUpdateCard';
  };
  attributes: {
    comments: Schema.Attribute.Integer;
    date: Schema.Attribute.DateTime;
    details: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageLabel: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
  };
}

export interface OthersMomentCard extends Struct.ComponentSchema {
  collectionName: 'components_others_moment_cards';
  info: {
    displayName: 'MomentCard';
  };
  attributes: {
    date: Schema.Attribute.Date;
    details: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    location: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OthersTestimonyCArd extends Struct.ComponentSchema {
  collectionName: 'components_others_testimony_c_ards';
  info: {
    displayName: 'TestimonyCArd';
  };
  attributes: {
    identity: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    testimony: Schema.Attribute.Text;
  };
}

export interface SchoolHistoryGarisMasaSejarah extends Struct.ComponentSchema {
  collectionName: 'components_school_history_garis_masa_sejarahs';
  info: {
    displayName: 'GarisMasaSejarah';
  };
  attributes: {
    GarisMasaSejarahCards: Schema.Attribute.Component<
      'others.garis-masa-sejarah-card',
      true
    >;
  };
}

export interface SchoolHistoryKemudahanDanPembinaan
  extends Struct.ComponentSchema {
  collectionName: 'components_school_history_kemudahan_dan_pembinaans';
  info: {
    displayName: 'KemudahanDanPembinaan';
  };
  attributes: {
    details: Schema.Attribute.Text;
    imgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SchoolHistoryKepimpinanSekolah extends Struct.ComponentSchema {
  collectionName: 'components_school_history_kepimpinan_sekolahs';
  info: {
    displayName: 'KepimpinanSekolah';
  };
  attributes: {
    label: Schema.Attribute.Text;
    list: Schema.Attribute.JSON;
  };
}

export interface SchoolHistoryMisiDanMatlamat extends Struct.ComponentSchema {
  collectionName: 'components_school_history_misi_dan_matlamats';
  info: {
    displayName: 'MisiDanMatlamat';
  };
  attributes: {
    details: Schema.Attribute.Text;
    quote: Schema.Attribute.Text;
  };
}

export interface SchoolHistoryPencapaian extends Struct.ComponentSchema {
  collectionName: 'components_school_history_pencapaians';
  info: {
    displayName: 'Pencapaian';
  };
  attributes: {
    list: Schema.Attribute.JSON;
  };
}

export interface SchoolHistoryPengenalan extends Struct.ComponentSchema {
  collectionName: 'components_school_history_pengenalans';
  info: {
    displayName: 'Pengenalan';
  };
  attributes: {
    details: Schema.Attribute.Text;
    theNumbers: Schema.Attribute.JSON;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
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
      'contact-us.campus-gallery': ContactUsCampusGallery;
      'contact-us.contact-info': ContactUsContactInfo;
      'contact-us.faqs': ContactUsFaqs;
      'contact-us.how-to-reach-us': ContactUsHowToReachUs;
      'galleri-moment.moment': GalleriMomentMoment;
      'homepage.academic-excellence': HomepageAcademicExcellence;
      'homepage.excellence-in-numbers': HomepageExcellenceInNumbers;
      'homepage.extra-activities-highlight': HomepageExtraActivitiesHighlight;
      'homepage.footer': HomepageFooter;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.image-slider': HomepageImageSlider;
      'homepage.latest-updates': HomepageLatestUpdates;
      'homepage.marquee': HomepageMarquee;
      'homepage.testimoials': HomepageTestimoials;
      'latest-announcementpage.announement': LatestAnnouncementpageAnnounement;
      'others.acad-exc-card': OthersAcadExcCard;
      'others.activity-card': OthersActivityCard;
      'others.excel-in-num-card': OthersExcelInNumCard;
      'others.faq': OthersFaq;
      'others.foot-details': OthersFootDetails;
      'others.garis-masa-sejarah-card': OthersGarisMasaSejarahCard;
      'others.latest-update-card': OthersLatestUpdateCard;
      'others.moment-card': OthersMomentCard;
      'others.testimony-c-ard': OthersTestimonyCArd;
      'school-history.garis-masa-sejarah': SchoolHistoryGarisMasaSejarah;
      'school-history.kemudahan-dan-pembinaan': SchoolHistoryKemudahanDanPembinaan;
      'school-history.kepimpinan-sekolah': SchoolHistoryKepimpinanSekolah;
      'school-history.misi-dan-matlamat': SchoolHistoryMisiDanMatlamat;
      'school-history.pencapaian': SchoolHistoryPencapaian;
      'school-history.pengenalan': SchoolHistoryPengenalan;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
