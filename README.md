# Tallento.ai - Full Stack Developer Task


## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tallento
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint for code quality checks

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Heroicons React
- **Fonts**: Geist Sans & Geist Mono
- **Development**: Turbopack for faster builds

## 📁 Project Structure

```
tallento/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles with Tailwind imports
│   │   ├── layout.tsx        # Root layout with font configuration
│   │   └── page.tsx          # Homepage combining Header + HeroBanner
│   └── components/
│       ├── Header.tsx        # Navigation header component
│       └── HeroBanner.tsx    # Main hero section component
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple → Indigo → Blue
- **Accent Gradients**: Pink → Orange, Purple → Pink
- **Text Colors**: White, Gray variations for contrast

### Responsive Design
- **Mobile-first** approach with Tailwind breakpoints
- **Flexible layouts** using CSS Grid and Flexbox
- **Adaptive typography** scaling across devices
- **Interactive hover states** and smooth transitions

### Modern UI Elements
- **Glassmorphism effects** with backdrop blur
- **Gradient text** using `bg-clip-text`
- **Rounded corners** and soft shadows
- **Icon integration** with Heroicons

## 🔧 Development Notes

### Tailwind CSS v4
This project uses the latest Tailwind CSS v4 with the new configuration approach:
- No separate `tailwind.config.js` file needed
- Direct `@import "tailwindcss"` in CSS
- PostCSS configuration in `postcss.config.mjs`

### Component Architecture
- **Functional components** with TypeScript
- **Props-based** design for reusability
- **Modular structure** for easy maintenance
- **Responsive-first** implementation

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Then deploy to [Vercel](https://vercel.com) for automatic deployment.

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- AWS
- DigitalOcean

## 📸 Screenshots

The implemented design matches the provided reference images:
- Header with navigation and branding
- Hero banner with search functionality
- Feature cards and statistics
- Responsive mobile design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created as part of a Full Stack Developer task demonstration.

---

**Built with ❤️ for Tallento.ai**