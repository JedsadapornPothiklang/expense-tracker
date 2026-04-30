# 💰 Expense Tracker

A modern, responsive expense tracking application built with React and Vite. Track your daily expenses, set budgets, and visualize your spending patterns with ease.

## ✨ Features

- **Dark/Light Theme Support** - Switch between dark and light modes with instant theme switching using CSS Modules
- **Expense Management** - Add, edit, and delete expenses with ease
- **Budget Tracking** - Set monthly budget and track spending percentage
- **Category-Based Analytics** - View spending by category with visual charts
- **CSV Export** - Download your expense data in CSV format
- **Real-time Weather** - See current weather condition based on your location
- **Responsive Design** - Mobile-friendly interface that works on all devices
- **CSS Modules with Variables** - Scoped styling with CSS custom properties for theme support

## 🚀 Live Demo

- **Production**: `https://expense-tracker.vercel.app` (main branch)
- **Staging**: `https://staging.expense-tracker.vercel.app` (staging branch)

> Update these URLs after deploying to Vercel

## 📸 Screenshots

> [Add screenshots here after running the app]
> 
> To capture screenshots:
> 1. Run the development server: `npm run dev`
> 2. Open `http://localhost:5173` in your browser
> 3. Test the features and take screenshots
> 4. Add images to this README

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules with CSS Variables
- **State Management**: React Context API
- **Weather API**: OpenWeather
- **Package Manager**: npm

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Get your free OpenWeather API key from [openweathermap.org](https://openweathermap.org/api)
   - Update `.env.local` with your API key:
   ```
   VITE_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
```

## 🎨 Theme Support

The app supports both light and dark themes using CSS Modules and CSS custom properties:

- **Light Mode** - Clean, bright interface with blue-green accents
- **Dark Mode** - Easy on the eyes with dark backgrounds and light text

Theme preference is saved to localStorage and applies automatically on next visit.

### CSS Variables Available

```css
/* Colors */
--bg-primary         /* Main background color */
--bg-secondary       /* Secondary background */
--text-primary       /* Main text color */
--text-secondary     /* Secondary text */
--text-muted         /* Muted text */
--accent-primary     /* Primary accent color */
--accent-light       /* Light accent */
--accent-hover       /* Hover state color */

/* Components */
--shadow             /* Standard shadow */
--border-color       /* Border color */
--input-bg           /* Input background */
/* ... and more */
```

## 🌐 Environment Variables

Create `.env.local` in the project root:

```env
# Application Title
VITE_APP_APP_TITLE=Expense Tracker

# OpenWeather API (optional, weather won't show without this)
# Get free key from: https://openweathermap.org/api
VITE_APP_OPENWEATHER_API_KEY=your_api_key_here
```

## 📚 Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── AddExpenseForm.jsx      # Form to add new expenses
│   │   ├── ExpenseList.jsx         # List and manage expenses
│   │   ├── ExpenseSummary.jsx      # Summary, budget, and charts
│   │   └── Weather.jsx             # Weather display component
│   ├── context/
│   │   ├── ExpenseContext.jsx      # Expense state management
│   │   └── ThemeContext.jsx        # Theme state management
│   ├── App.jsx                     # Main app component
│   ├── App.module.css              # App styles with theme variables
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point
├── public/                         # Static assets
├── .env.example                    # Environment variables template
├── vercel.json                     # Vercel deployment config
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🔄 Git Workflow

### Branches

- **main** - Production branch, deployed to main URL
- **staging** - Staging branch, deployed to staging preview URL

### Making Changes

1. Create a feature branch from main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request to `main` or `staging` branch

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel automatically detects it's a Vite project

2. **Set environment variables in Vercel Dashboard**
   - Add `VITE_APP_OPENWEATHER_API_KEY` with your API key

3. **Configure branch deployments**
   - Main branch → Production (main URL)
   - Staging branch → Preview (staging URL)

### Build Configuration

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables for both branches

## 💡 Usage Tips

### Adding an Expense
1. Fill in the expense name, amount, and category
2. Select a date (defaults to today)
3. Click "+ Add" button
4. Expense appears in the list below

### Managing Budget
1. Go to the summary sidebar
2. Enter your monthly budget amount
3. Click "Set" to save
4. View progress bar showing budget usage

### Viewing Analytics
1. Category breakdown chart in the summary
2. Filter expenses by category using tab buttons
3. Export all data as CSV for external analysis

### Switching Themes
1. Click the "🌙 Dark" or "☀️ Light" button in the header
2. Theme changes instantly and is saved for next visit
3. Works with all components automatically

### Viewing Weather
1. Weather card displays in the sidebar (if API key is configured)
2. Shows current weather based on your location
3. Requires location permission in browser

## 🐛 Troubleshooting

### Weather not showing
- Check that `VITE_APP_OPENWEATHER_API_KEY` is set in `.env.local`
- Verify API key is valid on [openweathermap.org](https://openweathermap.org)
- Ensure browser location permission is granted
- Check browser console for errors

### CSS variables not working
- Ensure you're importing styles from `App.module.css`
- Check that CSS variable names match exactly
- Clear browser cache if theme doesn't update

### Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `rm -rf .vite`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Before submitting:
1. Test your changes locally
2. Follow the existing code style
3. Update documentation if needed
4. Ensure no console errors or warnings

## 📞 Support

For questions or issues:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots if applicable
4. Share your browser and Node.js version

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Powered by [Vite](https://vitejs.dev)
- Weather data from [OpenWeather](https://openweathermap.org)
- Deployed on [Vercel](https://vercel.com)

---

**Last Updated**: April 30, 2026

Made with ❤️ by Expense Tracker Team
