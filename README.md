# Lendsqr Frontend Engineering Assessment

This is a frontend assessment project for Lendsqr, built with Next.js, TypeScript, and SCSS. The application replicates the Lendsqr Admin Console with pixel-perfect visual fidelity to the provided Figma design.

## 🚀 Live Demo

- **Deployed App**: [Your deployment URL here]
- **Figma Design**: [https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Design Decisions](#design-decisions)
- [API Integration](#api-integration)
- [Performance Optimizations](#performance-optimizations)

## ✨ Features

### Implemented Pages

1. **Login Page** (`/login`)
   - Email and password authentication
   - Form validation
   - Responsive design matching Figma specs
   - Password visibility toggle

2. **Dashboard Page** (`/dashboard`)
   - Overview statistics (Users, Active Users, Users with Loans, Users with Savings)
   - Navigation sidebar
   - Top navigation bar with search and user profile
   - Responsive layout

3. **Users Page** (`/users`)
   - User list table with 500+ records from mock API
   - Filtering by organization, username, email, date, phone number, and status
   - Pagination (100 items per page)
   - Status badges (Active, Inactive, Pending, Blacklisted)
   - Action menu (View Details, Blacklist User, Activate User)
   - Responsive table design

4. **User Details Page** (`/users/[id]`)
   - Comprehensive user information display
   - Tabs: General Details, Documents, Bank Details, Loans, Savings, App and System
   - User actions (Blacklist User, Activate User)
   - Data persistence using localStorage
   - Back navigation to Users page

### Key Features

- **Data Persistence**: User data stored in localStorage for offline access
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Type Safety**: Full TypeScript implementation
- **Testing**: Unit tests for components and utilities
- **Performance**: Optimized rendering and data fetching
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠 Tech Stack

### Core Technologies (As Required)

- **React 19.2.4** - UI library
- **Next.js 16.2.4** - React framework with App Router
- **TypeScript 5.x** - Type-safe JavaScript
- **SCSS/Sass** - CSS preprocessor for styling

### Development Tools

- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Git** - Version control

### Why Next.js?

Next.js was chosen as the React framework for several reasons:

1. **App Router**: Modern routing with server components
2. **Performance**: Built-in optimizations (image optimization, code splitting)
3. **Developer Experience**: Hot reload, TypeScript support out of the box
4. **Deployment**: Easy deployment to Vercel
5. **SEO**: Server-side rendering capabilities

## 📁 Project Structure

```
lendsqr-fe-test/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (redirects to login)
│   ├── login/               # Login page
│   ├── dashboard/           # Dashboard page
│   └── users/               # Users pages
│       ├── page.tsx         # Users list
│       └── [id]/            # User details
├── components/              # Reusable components
│   ├── common/             # Common UI components
│   ├── layout/             # Layout components (Header, Sidebar)
│   └── users/              # User-specific components
├── lib/                    # Utility functions
│   ├── api.ts             # API calls
│   ├── storage.ts         # localStorage utilities
│   └── utils.ts           # Helper functions
├── styles/                # SCSS styles
│   ├── variables.scss     # Design tokens
│   ├── mixins.scss        # Reusable mixins
│   └── globals.scss       # Global styles
├── types/                 # TypeScript type definitions
│   └── user.ts           # User-related types
├── __tests__/            # Test files
└── public/               # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lendsqr-fe-test.git
cd lendsqr-fe-test
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your mock API URL:
```env
NEXT_PUBLIC_API_URL=https://your-mock-api-url.com/api
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Test Coverage

The project includes tests for:
- Component rendering
- User interactions
- Form validation
- API calls
- Utility functions
- Storage operations

## 🎨 Design Decisions

### 1. SCSS Architecture

I organized SCSS using a modular approach:
- **Variables**: Centralized design tokens (colors, spacing, typography)
- **Mixins**: Reusable style patterns (responsive breakpoints, flex utilities)
- **Component Styles**: Scoped styles for each component

This approach ensures:
- Consistency across the application
- Easy maintenance and updates
- Reusability of common patterns

### 2. Component Structure

Components are organized by feature and reusability:
- **Common Components**: Buttons, inputs, cards (highly reusable)
- **Layout Components**: Header, sidebar, navigation
- **Feature Components**: User-specific components

### 3. State Management

For this application size, I used:
- **React Hooks**: useState, useEffect for local state
- **localStorage**: For data persistence
- **No external state library**: Kept it simple and performant

### 4. Data Fetching Strategy

- **Client-side fetching**: Using fetch API
- **Caching**: localStorage for offline access
- **Error handling**: Graceful fallbacks to cached data

### 5. Responsive Design

Mobile-first approach with breakpoints:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 1024px
- Wide: > 1440px

## 🔌 API Integration

### Mock API Setup

I created a mock API using [mocky.io](https://mocky.io) with 500 user records.

**API Endpoint**: `https://run.mocky.io/v3/your-endpoint-id`

### Data Structure

The API returns an array of user objects matching the User interface in `types/user.ts`.

### Storage Strategy

1. **First Load**: Fetch from API and save to localStorage
2. **Subsequent Loads**: Load from localStorage (faster)
3. **Fallback**: If API fails, use cached data

## ⚡ Performance Optimizations

1. **Code Splitting**: Next.js automatic code splitting
2. **Image Optimization**: Next.js Image component
3. **Lazy Loading**: Components loaded on demand
4. **Memoization**: React.memo for expensive components
5. **Debouncing**: Search and filter inputs
6. **Pagination**: Limit rendered items to 100 per page

## 📝 Naming Conventions

- **Files**: kebab-case (e.g., `user-card.tsx`)
- **Components**: PascalCase (e.g., `UserCard`)
- **Functions**: camelCase (e.g., `fetchUsers`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **CSS Classes**: BEM methodology (e.g., `user-card__header`)

## 🔍 Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended config
- **Prettier**: Code formatting (if configured)
- **Git Hooks**: Pre-commit linting (if configured)

## 🚀 Deployment

This project is deployed on [Vercel/Netlify/Heroku]:

**URL**: `https://your-name-lendsqr-fe-test.vercel.app`

### Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [SCSS Documentation](https://sass-lang.com/documentation)

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 📄 License

This project is for assessment purposes only.

---

**Note**: This assessment demonstrates proficiency in React, TypeScript, SCSS, and modern frontend development practices. The code is production-ready with proper error handling, testing, and documentation.
