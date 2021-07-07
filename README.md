### TODO
Figure out some way to allow people to reach out via an automated text message to me

# Personal Profile Page
forked from below

🚀 Landing Page theme written in Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), [ESLint](https://eslint.org), [Prettier](https://prettier.io), [PostCSS](https://postcss.org), [Tailwind CSS](https://tailwindcss.com).

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a [Next js templates demo](https://creativedesignsguru.com/demo/nextjs-landing-page/).

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:8080 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
├── README.md            # README file
├── public
│   └── assets
│       └── images       # Image used by the template, it can be replaced by your own images
├── src
│   ├── background       # Atomic background component
│   ├── button           # Atomic button component
│   ├── cta              # Atomic cta component
│   ├── feature          # Atomic feature component
│   ├── footer           # Atomic footer component
│   ├── hero             # Atomic hero component
│   ├── layout           # Atomic layout component
│   ├── navigation       # Atomic navigation component
│   ├── pages            # Next JS pages includes index page
│   ├── styles           # Atomic styles component
│   ├── templates        # List of blocks components
│   └── utils            # Atomic utils component
├── tailwind.config.js   # Tailwind CSS configuration file
└── tsconfig.json        # TypeScript file
```

### Customization

You can easily configure the theme. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/main.css`: your CSS file using Tailwind CSS
- `utils/Config.ts`: website configuration file
- `src/pages/index.tsx`: the index page of the theme use the `Base` component
- `src/template/Base.tsx`: the `Base` component using component blocks
- `src/templates/*`: the list of component blocks
- `src/*`: other folders in src are the atomic components used by components blocks

Here is the layer:

- the entry point: `index.tsx` in `src/pages`
- the `Base` template: `Base.tsx` in `src/templates`
- use component blocks from `src/templates/*`
- use atomic components from `src/*`

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your theme is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/itsreddy/profile-page)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---
