# Conference History Map

A React application to visualize your conference speaking history on an interactive map and a chronological list view.

This project is designed to be easily customized. By simply modifying the data file, you can create your own conference history portfolio.

![Demo Screenshot](./screenshot.png)
*(Replace this with an actual screenshot of your application)*

## Features

- **Interactive Map View**: Displays conference locations with markers using [React Leaflet](https://react-leaflet.js.org/).
- **Chronological History View**: A timeline list of your talks, grouped by year.
- **Detailed Info Cards**: Clicking a map pin reveals a card with conference details (theme, slides link, proposal link, etc.).
- **Multiple Events Support**: Handles multiple conferences at the same location with a carousel navigation in the popup.
- **Responsive Design**: Optimized for both desktop and mobile devices using [Tailwind CSS](https://tailwindcss.com/).
- **Category Tags**: Color-coded tags for different technology categories (e.g., PHP, TypeScript, Go).

## Getting Started

### 1. Fork and Clone

First, fork this repository to your own GitHub account. Then, clone it to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/conference-history.git
cd conference-history
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Run Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the app running.

## Customization

### Update Conference Data

The core data is located in `src/data.ts`. To use your own history, simply edit this file.

1.  Open `src/data.ts`.
2.  Update the `conferences` array with your speaking engagements.

**Data Model:**

```typescript
export interface Conference {
  date: string;       // YYYY-MM-DD
  venue: string;      // Venue name
  coords: [number, number]; // [Latitude, Longitude]
  name: string;       // Conference Name
  url: string;        // Official Conference URL
  theme: string;      // Your Talk Title
  slidesUrl: string;  // URL to your slides (SpeakerDeck, etc.)
  proposalUrl?: string; // (Optional) URL to your proposal
  isBest: boolean;    // Highlight as a "Best" talk
  type: ConferenceType; // Category (see below)
}
```

**Adding New Categories:**

If you need new categories (e.g., "Python", "Rust"), update the `ConferenceType` definition in `src/data.ts` and add corresponding colors in `src/App.tsx` under the `typeColors` object.

### Update Profile Info

To change the title, avatar icon, and GitHub link in the header:

1.  Open `src/App.tsx`.
2.  Search for the `<header>` section.
3.  Replace the `src` attribute of the `<img>` tag with your own avatar URL.
4.  Update the text "Kanon's Conference History" to your name.
5.  Update the `href` attribute of the GitHub link to your own repository URL.

```tsx
<h1 className="flex items-center text-xl font-bold tracking-tight text-gray-800 mr-4">
  <img 
    src="YOUR_AVATAR_URL_HERE" 
    alt="Your Name" 
    className="w-8 h-8 rounded-full mr-2" 
  />
  Your Name's Conference History
</h1>
<a
    href="https://github.com/YOUR_USERNAME/YOUR_REPO"
    target="_blank"
    rel="noreferrer"
    className="text-gray-500 hover:text-gray-700 transition-colors"
    aria-label="GitHub Repository"
>
    <IconGithub className="w-6 h-6" />
</a>
```

## Deployment

This is a static site (SPA), so it can be deployed to any static hosting service like **Firebase Hosting**, **Cloudflare Pages**, **Vercel**, or **GitHub Pages**.

**Build the project:**

```bash
npm run build
```

The output will be in the `dist/` directory. Upload this directory to your hosting provider.

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Leaflet](https://leafletjs.com/) / [React Leaflet](https://react-leaflet.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is open source and available under the [MIT License](LICENSE).