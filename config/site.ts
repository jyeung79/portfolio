export type SiteConfig = typeof siteConfig

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
      title: "About",
      href: "/about",
    }
  ],
  links: {
    twitter: "https://twitter.com/jyeung79",
    github: "https://github.com/jyeung79",
    docs: "https://ui.shadcn.com",
    linkedin: "https://www.linkedin.com/in/jeffery-yeung/",
  },
  tech: {
    react: "https://react.dev/",
    reactNative: "https://reactnative.dev/",
    expo: "https://expo.dev",
  }
}