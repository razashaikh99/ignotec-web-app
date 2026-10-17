# Ignotec — Corporate Portfolio

A responsive software house portfolio built with React, recreating Ignotec's existing WordPress design as a component-based frontend.

The website showcases services, industry solutions, insights, technology partners, and career opportunities, with an enquiry form for prospective clients.

> **Status:** Frontend migration in progress. The home page is implemented; additional pages and backend integrations are still to be built.

## Features

- **Responsive navigation:** Animated mega menus for Services, Solutions, Digital Assets, Startup Enablement, and About Us. Mobile menus use an accordion with one dropdown open at a time.
- **Hero carousel:** Autoplay, swipe gestures, desktop arrows, and clickable pagination with an active indicator.
- **Featured insights:** Reusable cards with images and animated hover content.
- **Statistics and services:** Responsive carousels for company figures and service offerings.
- **Technology partners:** A data-driven logo grid with white cards for transparent assets.
- **Careers banner:** A full-width image section with an Explore Careers call to action.
- **Contact form:** Searchable country selection with flags, phone validation, inline errors, and normalized submission payloads.
- **Footer:** Service and resource links, newsletter email validation, social icons, and policy links.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19, JavaScript / JSX |
| Build tooling | Vite 8 |
| Styling | Tailwind CSS 4, Space Grotesk |
| Routing | React Router 7 |
| Carousels | Swiper |
| Country selection | React Select, Country Flag Icons |
| Phone validation | libphonenumber-js |
| Icons | Lucide React, React Icons |
| Code checks | ESLint, Node.js test runner |

## Getting Started

Use **Node.js 24+** and **Yarn Classic 1.22.x**. The repository includes `yarn.lock` for consistent dependency installation.

From the project directory:

```bash
yarn install --frozen-lockfile
yarn dev
```

Open the local URL printed by Vite in your terminal. No environment variables are required for the current frontend preview. Google Fonts requires an internet connection; a sans-serif fallback is configured.

## Commands

| Command | Purpose |
| --- | --- |
| `yarn dev` | Start the development server with hot reload |
| `yarn build` | Generate the production build in `dist/` |
| `yarn preview` | Preview the production build locally |
| `yarn lint` | Run ESLint across the project |
| `node --test src/pages/Home/components/contactValidation.test.js` | Run contact validation and payload tests |

## Project Structure

```text
src/
├── assets/images/          # Site images, partner logos, and image exports
├── components/
│   ├── Button/            # Shared button and link variants
│   ├── Header/
│   │   └── components/    # Mega menus and mobile accordion
│   ├── Footer/            # Footer navigation and subscription preview
│   └── Wrapper/           # Shared header, page content, and footer layout
├── config/index.js        # Home page copy, cards, statistics, and partners
├── pages/Home/
│   ├── components/        # Home sections, reusable cards, and form validation
│   └── index.jsx          # Home page section composition
├── routes/index.jsx       # Client-side route definitions
├── index.css              # Tailwind theme, global styles, and animations
└── main.jsx               # Application entry point
```

## Content and Styling

- Edit home page copy and card data in `src/config/index.js`.
- Add images to `src/assets/images/` and export them from its `index.js`.
- Manage fonts and theme tokens in `src/index.css`; the Google Fonts stylesheet is linked in `index.html`.
- Use `src/components/Button/` for consistent uppercase text, padding, and rounded button styling. It supports internal links, external links, click handlers, variants, and optional icons.
- Add new pages to `src/routes/index.jsx` and update the relevant navigation destinations.

## Form Behavior

The contact form requires first name, last name, a valid contact number, country, and acceptance of the Terms & Conditions. Email and message are optional; an entered email is validated, and messages are limited to 2,000 characters.

Valid contact submissions print a trimmed payload to the browser console, including the phone number in international format and the selected country name/code. Newsletter submissions also validate the email and log a preview payload.

**Neither form currently sends data to a server or email service.** Confirmation messages describe the local preview behavior.

## Performance

- The contact form and its dependencies load when the section approaches the viewport.
- Below-the-fold images use lazy loading.
- Country flags load as separate SVG assets instead of one stylesheet containing all flags.
- The careers banner uses an optimized image while retaining the original asset in the source directory.

## Current Limitations

- Only `/` is registered as a page. Unmatched routes redirect to the home page, including navigation destinations that have not been implemented yet.
- Some content is sample data, and social icons currently use placeholder internal routes pending verified company URLs.
- Enquiry delivery, newsletter subscription, search, and language switching still need service integrations or implementation.

## Production Build

```bash
yarn build
yarn preview
```

Deploy the generated `dist/` directory to a static hosting provider. When adding additional client-side pages, configure the host to serve `index.html` for application routes so direct visits and refreshes work with `BrowserRouter`.
