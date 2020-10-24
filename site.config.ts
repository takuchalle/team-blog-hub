export const config = {
  siteMeta: {
    title: "hub.takuchalle.dev",
    teamName: "takuchalle",
    description: "takuchalle posts hub",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "hub.takuchalle.dev"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
  ],
};
