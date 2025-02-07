export type NavLink = {
  title: string;
  url: string;
  color?: string;
  hoverColor?: string;
};

export type NavigationData = {
  navLinks: NavLink[];
  footerLinks: { title: string; url: string }[];
};

export type OpeningHours = {
  day: string;
  hours: string;
}[];
