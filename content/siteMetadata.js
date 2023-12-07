const siteMetadata = {
  title: 'theos_dev',
  author: 'Ian.C',
  headerTitle: 'theos_dev',
  description: 'Software Developer at Castynet',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog-ian-chege.vercel.app/',
  siteRepo: 'https://github.com/Ian-Chege/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ianchege001@gmail.com',
  github: 'https://github.com/Ian-Chege',
  linkedin: 'https://www.linkedin.com/in/ian-chege/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
