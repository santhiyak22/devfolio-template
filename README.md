
# DevFolio — Modern Developer Portfolio Template

A modern, responsive developer portfolio template built with Next.js, React, TypeScript, and Tailwind CSS. Features a premium dark interface, light mode, project showcase, skills section, and contact links.

## Features

- Modern, responsive portfolio design
- Dark mode and light mode toggle
- Hero section with developer introduction
- About section
- Project showcase cards
- Skills and technology section
- Contact section with email link
- GitHub and LinkedIn links
- Reusable portfolio data configuration
- Built with Next.js and TypeScript

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS

## Getting Started

### 1. Install Node.js

Install a compatible Node.js LTS version from:

https://nodejs.org/

### 2. Extract the project

Extract the DevFolio ZIP file to a folder on your computer.

### 3. Open the project

Open the project folder in VS Code or your preferred code editor.

### 4. Install dependencies

Open a terminal in the project root directory and run:

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

### 6. Open in your browser

Visit:

http://localhost:3000

## Customize Your Portfolio

### Personal Information

Open the portfolio data file:

`src/Data/portfolio.ts`

If your project uses a lowercase `data` folder, use `src/data/portfolio.ts` instead.

Update the following information:

- Name
- Professional role
- Location
- Email address
- Introduction and about section
- GitHub profile URL
- LinkedIn profile URL

### Projects

In the portfolio data file, update the project entries with your own:

- Project title
- Category
- Technology stack
- Project number
- Visual style and symbol

Replace the sample project descriptions with details about your real projects.

### Skills

Update the skills array with the technologies you use.

Examples:

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS

### Colors and Styling

Edit the relevant Tailwind CSS classes and styles to customize colors, spacing, typography, and other visual elements.

### Dark and Light Mode

Use the theme toggle in the navigation bar to switch between dark and light modes.

## Build for Production

Run the following command to create a production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

## Deployment

You can deploy your portfolio using Vercel.

1. Push your project to a Git repository.
2. Import the repository into Vercel.
3. Follow the deployment instructions.
4. Open your deployed website and verify all links and sections.

Documentation:

https://nextjs.org/docs/app/building-your-application/deploying

## Support

For help with installation or customization, contact the template seller using the support details provided with your purchase.

## License

This template is provided under the license included with your purchase. Review the supplied license before using, modifying, or redistributing the template.
