# Assessment (Urbio Blog)

A modern blog website built with Next.js 15, Material-UI (MUI), Redux Toolkit Query, react-hook-form, and notistack. This project demonstrates a complete full-stack blog application featuring:

- **Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR)**
- **RTK Query for API data fetching**
- **Client-side state management with Redux Toolkit**
- **Form handling with react-hook-form and Yup validation**
- **Infinite scrolling for posts**
- **Notistack notifications**
- **Material-UI for UI components and theming**
- **Nextjs-toploader for a top progress indicator**

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features in Action](#features-in-action)
- [Customization](#customization)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **Next.js App Router (v15):**  
  Uses the new Next.js app router for a clean separation between server and client components.

- **Incremental Static Regeneration (ISR):**  
  Pages such as the post list and individual post pages are statically generated and revalidated periodically for optimal performance and SEO.

- **API Data Fetching:**  
  Data is fetched using RTK Query and Axios. Custom hooks manage infinite scroll for the post list.

- **Form Handling & Validation:**  
  Create-post forms use react-hook-form with Yup-based validation. Custom form components such as `FormTextField` wrap MUI’s `TextField` for seamless integration.

- **Global State Management:**  
  Redux Toolkit Query is used for efficient data fetching and caching. The Redux store is configured in a separate provider.

- **Notifications:**  
  Notistack is integrated for showing success/error notifications across the application.

- **Custom Theming:**  
  MUI theming and a global Emotion cache are set up to ensure consistent styling across the app.

- **Top Loader:**  
  Nextjs-toploader displays a loading progress bar at the top during route changes.

## Folder Structure

```
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── layout.tsx               # Root layout (includes Providers, top loader, header, etc.)
│   ├── page.tsx                 # Home page (post list with ISR)
│   └── posts
│       └── [id]
│           └── page.tsx         # Individual post page with ISR
├── biome.json
├── components
│   ├── FormTextField
│   │   └── index.tsx            # MUI TextField wrapper for react-hook-form
│   ├── index.ts
│   ├── layout
│   │   ├── header.tsx           # Header component
│   │   └── index.ts
│   └── post
│       ├── create-post-dialogue.tsx  # Modal for creating a new post
│       ├── create-post-form.tsx      # Create post form component
│       ├── index.ts
│       ├── post-card.tsx             # Card component for individual posts
│       └── post-list.tsx             # List component for displaying posts (infinite scroll)
├── features
│   ├── blog.ts                  # RTK Query API endpoints for blog posts
│   └── index.ts
├── hooks
│   ├── index.ts
│   ├── useCreatePost.ts         # Custom hook to handle post creation (includes notistack notifications)
│   └── useInfinitePosts.ts      # Custom hook for infinite scroll behavior
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── providers
│   ├── index.tsx                # Aggregated Providers (Redux, MUI, Emotion, etc.)
│   ├── store.tsx                # Redux store provider
│   └── theme.tsx                # MUI Theme Provider (light mode)
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── requirement.pdf
├── schemas
│   ├── create-post.ts           # Yup validation schema for creating posts
│   └── index.ts
├── store
│   └── index.ts                 # Redux store configuration
├── styles
│   └── globals.css              # Global CSS styles
├── tsconfig.json
├── types
│   └── index.ts                 # TypeScript types and interfaces
├── utils
│   ├── axios.ts                 # Axios configuration and base query for RTK Query
│   ├── dateFormatter.ts         # Utility to format dates
│   └── index.ts
└── yarn.lock
```

## Installation

### Prerequisites

- Node.js (v14 or later)
- Yarn or npm

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/assessment.git
   cd assessment
   ```

2. **Install Dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env.local` file in the root directory and add your environment variables. For example:

   ```env
   NEXT_PUBLIC_API_INSTANCE=https://your-api.example.com/api/v1
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

## Usage

- **Development:**

  ```bash
  yarn dev
  # or
  npm run dev
  ```

  The application will run at [http://localhost:3000](http://localhost:3000).

- **Production Build:**

  ```bash
  yarn build
  yarn start
  # or
  npm run build
  npm run start
  ```

## Features in Action

- **Home Page:**  
  Displays a list of blog posts with infinite scroll. The page is statically generated and revalidated using ISR.

- **Post Detail Page:**  
  Each post detail page is rendered with ISR for improved performance and SEO.

- **Creating a Post:**  
  Click the "New Post" button (or similar UI) to open a modal. The create post form uses react-hook-form with Yup validation. Upon submission, a success notification is displayed via notistack and the modal closes automatically.

- **Notifications:**  
  Global notifications are handled using notistack, with the provider wrapping the entire application.

- **Top Loader:**  
  Nextjs-toploader displays a loading progress bar at the top during route changes.

## Customization

- **Theme & Styles:**  
  Update `providers/theme.tsx` to modify your MUI theme. The current configuration uses a light theme.

- **Validation Schemas:**  
  Modify or extend the Yup schemas in the `schemas` folder as needed.

- **API Integration:**  
  Customize your API endpoints in `features/blog.ts` and adjust Axios settings in `utils/axios.ts`.

## Scripts

- `yarn dev` – Run the development server.
- `yarn build` – Build the application for production.
- `yarn start` – Start the production server.
- `yarn lint` – Run ESLint for code quality.
- `yarn format` – Format code using Biome.

## Dependencies

Major dependencies include:
- **Next.js 15** – Framework for server-rendered React applications.
- **@mui/material** & **@mui/icons-material** – UI components and icons.
- **@reduxjs/toolkit & react-redux** – Redux state management.
- **axios** – HTTP client for API requests.
- **react-hook-form** – Form state management.
- **yup** – Schema validation.
- **notistack** – Notification system.
- **react-infinite-scroll-component** – Infinite scrolling.
- **nextjs-toploader** – Top progress loader.
- **Emotion** – CSS-in-JS solution for styling with MUI.

## License

This project is licensed under the MIT License.
