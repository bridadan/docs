module.exports = {
  title: "Golioth",
  tagline: "The Device You're Developing Is Cloud Ready",
  url: "https://docs.golioth.io",
  themes: ["@docusaurus/theme-live-codeblock"],
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "golioth", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: "Golioth",
        src: "img/white_logo.svg",
      },
      items: [
        {
          to: "getting-started",
          activeBasePath: "getting-started",
          label: "Getting Started",
          position: "left",
        },
        {
          to: "hardware",
          activeBasePath: "hardware",
          label: "Hardware",
          position: "left",
        },
        {
          to: "firmware",
          activeBasePath: "firmware",
          label: "Firmware",
          position: "left",
        },
        {
          to: "cloud",
          activeBasePath: "cloud",
          label: "Cloud",
          position: "left",
        },
        {
          to: "reference",
          activeBasePath: "reference",
          label: "Reference",
          position: "left",
        },
        {
          href: "https://github.com/golioth",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://console.golioth.io",
          label: "Console",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/getting-started",
            },
            {
              label: "Over the Air Updates",
              to: "/cloud/services/ota",
            },
          ],
        },
        {
          title: "Reference",
          items: [
            {
              label: "API and SDK Reference",
              to: "/reference",
            },
            {
              label: "API Docs",
              to: "/reference/rest-api/overview",
            },
            /*{
              label: 'Zephyr SDK',
              to: 'docs/advanced/running-locally',
            },*/
            {
              label: "goliothctl",
              to: "/reference/command-line-tools/goliothctl/goliothctl/",
            },
            {
              label: "coap",
              to: "/reference/command-line-tools/coap/coap/",
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },*/
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/golioth",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Golioth. Built with ❤️ & Docusaurus.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '42Q13YI9MY',

      // Public API key: it is safe to commit it
      apiKey: '174525da827993e07fc87b28736000f1',

      indexName: 'golioth',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through
      // window.location instead on history.push. Useful when our Algolia
      // config crawls multiple documentation sites and we want to
      // navigate with window.location.href to them. externalUrlRegex
      //'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: 'https://github.com/golioth/golioth/edit/master/docs/',
        },
        gtag: {
          trackingID: "G-C2MSLQD9D7",
          anonymizeIP: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   //editUrl: 'https://github.com/golioth/golioth/edit/master/docs/blog/',
        // },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("swagger-ui-react/swagger-ui.css"),
          ],
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        path: `./.env.${process.env.HOSTING_ENV}`, // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      },
    ],
    "@docusaurus/plugin-ideal-image",
    // [
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     redirects: [
    //       {
    //         to: '/docs/', // string
    //         from: ['/docs/oldDocPathFrom2019', '/docs/legacyDocPathFrom2016'], // string | string[]
    //       },
    //     ],
    //   },
    // ],
  ],
};
