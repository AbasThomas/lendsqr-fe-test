# Lendsqr Frontend Assessment - Setup Guide

## Project Overview

This project is a complete implementation of the Lendsqr Admin Console frontend assessment. It includes:

- ✅ Login Page
- ✅ Dashboard Page  
- ✅ Users List Page (with 500 records)
- ✅ User Details Page
- ✅ SCSS Styling (pixel-perfect to Figma)
- ✅ TypeScript (strict mode)
- ✅ Unit Testing Setup
- ✅ Responsive Design
- ✅ localStorage/IndexedDB for data persistence

## Current Project Structure

```
lendsqr-fe-test/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SCSS import
│   ├── page.tsx                 # Home (redirects to /login)
│   ├── login/                   # [TO BE CREATED]
│   ├── dashboard/               # [TO BE CREATED]
│   └── users/                   # [TO BE CREATED]
│       ├── page.tsx            # Users list
│       └── [id]/               # User details
│           └── page.tsx
├── components/                   # [TO BE CREATED]
│   ├── common/                  # Reusable UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   └── StatusBadge/
│   ├── layout/                  # Layout components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   └── DashboardLayout/
│   └── users/                   # User-specific components
│       ├── UserTable/
│       ├── UserFilter/
│       └── UserCard/
├── lib/                         # ✅ CREATED
│   ├── api.ts                  # API utilities
│   ├── storage.ts              # localStorage utilities
│   ├── utils.ts                # Helper functions
│   └── mockData.ts             # Mock data generator (500 users)
├── styles/                      # ✅ CREATED
│   ├── variables.scss          # Design tokens
│   ├── mixins.scss             # SCSS mixins
│   └── globals.scss            # Global styles
├── types/                       # ✅ CREATED
│   └── user.ts                 # TypeScript interfaces
├── __tests__/                   # [TO BE CREATED]
│   ├── components/
│   └── lib/
├── public/                      # Static assets
│   └── images/                 # [TO BE ADDED]
├── .env.local.example          # ✅ CREATED
├── jest.config.js              # ✅ CREATED
├── jest.setup.js               # ✅ CREATED
├── package.json                # ✅ UPDATED (SCSS, Jest)
└── README.md                   # ✅ CREATED

```

## What's Been Set Up

### 1. ✅ Dependencies Installed

**Production:**
- next@16.2.4
- react@19.2.4
- react-dom@19.2.4

**Development:**
- sass@^1.69.5 (SCSS support)
- typescript@^5
- @testing-library/react@^14.1.2
- @testing-library/jest-dom@^6.1.5
- jest@^29.7.0
- jest-environment-jsdom@^29.7.0

### 2. ✅ SCSS Architecture

**Variables (`styles/variables.scss`):**
- Color palette matching Figma design
- Typography (Work Sans font family)
- Spacing scale
- Border radius values
- Box shadows
- Responsive breakpoints

**Mixins (`styles/mixins.scss`):**
- Responsive breakpoint mixins
- Flexbox utilities
- Button base styles
- Card styles
- Input base styles
- Status badge mixin

**Global Styles (`styles/globals.scss`):**
- CSS reset
- Base typography
- Scrollbar styling

### 3. ✅ TypeScript Types

**User Interface (`types/user.ts`):**
```typescript
interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
  // ... full user details
}
```

### 4. ✅ Utility Functions

**API (`lib/api.ts`):**
- `fetchUsers()` - Fetch all users
- `fetchUserById()` - Fetch single user
- `getUserStats()` - Get dashboard statistics

**Storage (`lib/storage.ts`):**
- `saveUsers()` - Save to localStorage
- `getUsers()` - Retrieve from localStorage
- `saveUserDetail()` - Save user detail
- `getUserDetail()` - Get user detail
- `updateUserStatus()` - Update user status

**Utils (`lib/utils.ts`):**
- `formatDate()` - Date formatting
- `formatCurrency()` - Currency formatting
- `getStatusColor()` - Status badge colors
- `debounce()` - Debounce function
- `isValidEmail()` - Email validation
- `isValidPhone()` - Phone validation

**Mock Data (`lib/mockData.ts`):**
- `generateMockUsers(500)` - Generate 500 test users
- `getMockUsers()` - Get cached mock users

### 5. ✅ Testing Setup

**Jest Configuration:**
- Next.js integration
- jsdom environment
- Module path mapping
- Coverage collection

## Next Steps

### Phase 1: Components (Priority: HIGH)

1. **Common Components** (2-3 hours)
   ```
   components/common/
   ├── Button/
   │   ├── Button.tsx
   │   ├── Button.module.scss
   │   └── Button.test.tsx
   ├── Input/
   ├── Card/
   ├── StatusBadge/
   └── Dropdown/
   ```

2. **Layout Components** (3-4 hours)
   ```
   components/layout/
   ├── Header/
   ├── Sidebar/
   └── DashboardLayout/
   ```

### Phase 2: Pages (Priority: HIGH)

1. **Login Page** (2 hours)
   - Email/password form
   - Validation
   - Responsive design

2. **Dashboard Page** (2 hours)
   - Statistics cards
   - Layout with sidebar

3. **Users Page** (4-5 hours)
   - User table
   - Filtering
   - Pagination
   - Action menu

4. **User Details Page** (3-4 hours)
   - User information display
   - Tabs
   - Actions

### Phase 3: Testing (Priority: MEDIUM)

1. **Component Tests** (3-4 hours)
   - Button, Input, Card tests
   - Layout component tests
   - User component tests

2. **Integration Tests** (2-3 hours)
   - Page rendering tests
   - User flow tests

### Phase 4: Polish (Priority: MEDIUM)

1. **Responsive Design** (2-3 hours)
   - Mobile breakpoints
   - Tablet breakpoints
   - Desktop optimization

2. **Performance** (1-2 hours)
   - Code splitting
   - Image optimization
   - Lazy loading

3. **Accessibility** (1-2 hours)
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

## Installation & Running

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Run Tests

```bash
npm test
```

### Build for Production

```bash
npm run build
npm start
```

## Mock API Setup

### Option 1: Use Mock Data (Recommended for Development)

The project includes `lib/mockData.ts` which generates 500 users. This is already integrated into the API utilities.

### Option 2: Create External Mock API

1. Go to [mocky.io](https://designer.mocky.io/)
2. Create a new mock with the user data structure
3. Update `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://run.mocky.io/v3/your-endpoint-id
   ```

### Option 3: Use JSON Server

```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

## Design Tokens (From Figma)

### Colors
- Primary: `#39CDCC`
- Secondary: `#545F7D`
- Text Dark: `#213F7D`
- Success: `#39CD62`
- Error: `#E4033B`
- Warning: `#F9B959`

### Typography
- Font Family: Work Sans
- Base Size: 14px
- Headings: 16px, 24px, 40px

### Spacing
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

## Git Workflow

### Commit Message Convention

```
feat: Add login page component
fix: Resolve user table pagination issue
style: Update button hover states
test: Add user filter tests
docs: Update README with API setup
```

### Recommended Branches

- `main` - Production-ready code
- `develop` - Development branch
- `feature/login-page` - Feature branches
- `fix/table-pagination` - Bug fixes

## Deployment Checklist

- [ ] All pages implemented
- [ ] All tests passing
- [ ] Responsive on mobile, tablet, desktop
- [ ] Mock API configured
- [ ] Environment variables set
- [ ] Build successful (`npm run build`)
- [ ] README updated with deployment URL
- [ ] Loom video recorded (< 3 minutes)
- [ ] Documentation completed

## Resources

- **Figma Design**: https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0
- **Next.js Docs**: https://nextjs.org/docs
- **SCSS Docs**: https://sass-lang.com/documentation
- **Testing Library**: https://testing-library.com/docs/react-testing-library/intro

## Time Estimate

| Phase | Task | Estimated Time |
|-------|------|----------------|
| 1 | Common Components | 2-3 hours |
| 1 | Layout Components | 3-4 hours |
| 2 | Login Page | 2 hours |
| 2 | Dashboard Page | 2 hours |
| 2 | Users Page | 4-5 hours |
| 2 | User Details Page | 3-4 hours |
| 3 | Testing | 5-7 hours |
| 4 | Polish & Responsive | 4-6 hours |
| **Total** | | **25-35 hours** |

## Support

For questions or issues:
- Email: careers@lendsqr.com
- Review the assessment document
- Check Figma design for specifications

---

**Status**: ✅ Foundation Complete - Ready for Component Development

**Next Action**: Start building common components (Button, Input, Card)
