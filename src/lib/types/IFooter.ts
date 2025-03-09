export type FooterLink = {
  url: string;
  label: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FeedbackSection = {
  title: string;
  button_url: string;
  button_text: string;
  description: string;
};

export type IFooterData = {
  guides: FooterSection;
  contact_info: FooterSection;
  general_info: FooterSection;
  feedback_section: FeedbackSection;
};
