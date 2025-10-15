export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jeff Yeung",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Other",
      href: "/other",
    },
  ],
  links: {
    twitter: "https://twitter.com/jyeung79",
    github: "https://github.com/jyeung79",
    linkedin: "https://www.linkedin.com/in/jeffery-yeung/",
    resume:
      "https://drive.google.com/file/d/1XiE3DOeQtsHsPwpTYoey6GAxdXSrfTQp/view?usp=sharing",
  },
  tech: {
    react: "https://react.dev/",
    reactNative: "https://reactnative.dev/",
    expo: "https://expo.dev",
  },
};
