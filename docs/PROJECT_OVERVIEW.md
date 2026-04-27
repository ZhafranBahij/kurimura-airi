# Project Overview: Purrfectly Zen

Welcome to the **Purrfectly Zen** project documentation. This guide provides a map of the codebase to help you quickly identify which files to modify for updates.

## 🚀 Technology Stack
- **Framework:** [Astro](https://astro.build/) (v5.16.9)
- **UI Library:** [React](https://react.dev/) (v19.2.3)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4.1.18)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📁 Project Structure

### 1. Layouts (`src/layouts/`)
- **`Layout.astro`**: The primary wrapper for all pages. Edit this file to change global elements like the `<head>`, shared meta tags, or global wrapper styles.

### 2. Pages (`src/pages/`)
These are Astro files that define the routes of the application. Most of them act as shells that import a corresponding React component from `src/components/`.

| Route | Astro Page | Corresponding Component | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | `index.astro` | `HomePage.tsx` | Main landing page |
| `/about` | `about.astro` | `AboutPage.tsx` | About us / Information |
| `/contact` | `contact.astro` | `ContactPage.tsx` | Contact form and details |
| `/explore` | `explore.astro` | `ExplorePage.tsx` | Exploration/Content discovery |
| `/faq` | `faq.astro` | `FaqPage.tsx` | Frequently Asked Questions |
| `/guide` | `guide.astro` | `GuidePage.tsx` | How-to guides/Instructional content |
| `/join` | `join.astro` | `JoinPage.tsx` | Sign-up / Membership page |
| `/privacy` | `privacy.astro` | `PrivacyPage.tsx` | Privacy policy |
| `/app` | `app.astro` | `ZenApp.tsx` | The core application experience |

### 3. Components (`src/components/`)
This is where the bulk of the UI and logic reside. Since the project uses React, these `.tsx` files are the primary place to make content and design changes.

- **To update page content:** Go to the corresponding `.tsx` file in `src/components/` (see the table above).
- **To update application logic:** Modify `ZenApp.tsx`.

## 🛠️ How to Update

### Updating Text or Images
1. Identify which page the content is on.
2. Find the corresponding React component in `src/components/`.
3. Edit the JSX/TSX content.
4. Images are stored in `public/images/`. Add new images there and reference them as `/images/your-image.png`.

### Changing Styles
This project uses Tailwind CSS. To change the look and feel:
- Modify the Tailwind classes directly within the components in `src/components/`.
- Use `tailwind-merge` and `clsx` (already installed) for conditional styling.

### Adding a New Page
1. Create a new `.astro` file in `src/pages/` (e.g., `services.astro`).
2. Create a corresponding React component in `src/components/` (e.g., `ServicesPage.tsx`).
3. Import the component into the `.astro` page and wrap it in the `Layout.astro` component.
