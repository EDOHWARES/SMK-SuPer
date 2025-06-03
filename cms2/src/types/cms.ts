export interface Section {
  _id?: string;
  type:
    | "hero"
    | "announcements"
    | "chart"
    | "highlights"
    | "statistics"
    | "updates"
    | "academic"
    | "testimonials"
    | "footer"
    | "custom";
  title?: string;
  subtext?: string;
  content?: any;
  images?: string[];
  buttons?: Array<{
    text: string;
    link: string;
    variant?: "primary" | "secondary";
  }>;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Page {
  _id?: string;
  name: string;
  slug: string;
  title: string;
  description?: string;
  sections: Section[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id?: string;
  email: string;
  name: string;
  role: "admin" | "editor";
  createdAt: Date;
}
