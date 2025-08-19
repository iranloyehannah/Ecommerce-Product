# E-commerce Product Page

This is a fully responsive e-commerce product page built with React and TypeScript. It includes a working cart and interactive image gallery, and the main goal was to recreate the given design as closely as possible while ensuring a smooth, real-store-like user experience.

## Features

- 👀 View the optimal layout for the site depending on their device's screen size
- 👁️ See hover states for all interactive elements on the page
- 📖 Open a lightbox gallery by clicking on the large product image
- 💡 Switch the large product image by clicking on the small thumbnail images
- ➕ Add items to the cart
- 🫣 View the cart and remove items from it

## Tech Stack

- Vite
- Typescript
- pnpm
- Tailwindcss v4
- React Router v7
- React Icon v5
- Framer Motion v12
- ESLint

### Screenshot

![](./screenshot.jpg)

1. Clone the repository:

```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

- `pnpm run dev` - Runs the app in development mode
- `pnpm run build` - Builds the app for production (creates a `dist` directory)
- `pnpm run preview` - Previews the production build (must run `build` first)
- `pnpm run lint` - Runs ESLint

## Development

### Prerequisites

- Node.js (v18 )
- pnpm (v8)

### Environment Setup

1. Install pnpm if you haven't already:

```bash
npm install -g pnpm
```

2. Install project dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

### Production Build

To create a production build and preview it:

1. Build the project:

```bash
pnpm run build
```

2. Preview the production build:

```bash
pnpm run preview
```

The preview will be available at `http://localhost:4173`.

## Features in Detail

### E-commerce Product

- createContext handled add and delete Items in cart
- hover states for all interactive elements
- Number of Items added display at the top of cart icon

### UI/UX

- Responsive design for all screen sizes
- Tailwindcss consistent look and feel
- Framer-Motion for smooth transitions
- Intuitive user interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature`)
5. Open a Pull Request

## Acknowledgments

- Tailwindcss for the UI layout
- Vite + React + Typescript for the build tooling
- React Router for navigation
- Framer-Motion for Animation

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Useful resources

-[totaltypescript]- (https://www.totaltypescript.com/books/total-typescript-essentials/kickstart-your-typescript-setup) -[AltschoolMentor] -(https://typescript.oluwasetemi.dev/1)

- Website - [Iranloye Hannah](https://www.your-site.com)
- Twitter - [@Callmii_hems](https://www.twitter.com/Callmi_hems)

## Getting Started

## License

This project is licensed under the MIT License.
