interface Details {
  name: string;
  positions: string[];
  phone: string;
  email: string;
  website: string;
  github: string;
  code: string;
  sections: Array<Technologies>;
}

interface SectionItem {
  organization?: string;
  position?: string;
  location?: string;
  dates?: string;
  title?: string;
  items: string[];
}

interface Section {
  title: string;
  items: SectionItem[];
}
