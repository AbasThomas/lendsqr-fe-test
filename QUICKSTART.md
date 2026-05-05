# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
```bash
cp .env.local.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 What's Already Built

### ✅ Complete Foundation
- **SCSS Architecture**: Variables, mixins, global styles
- **TypeScript Types**: User interface and related types
- **Utilities**: API, storage, formatting, validation
- **Mock Data**: 500 user records generator
- **Testing Setup**: Jest + React Testing Library
- **Documentation**: Comprehensive README and guides

### 🎨 Design System Ready
All design tokens from Figma are defined in `styles/variables.scss`:
- Colors (primary, secondary, status colors)
- Typography (Work Sans font)
- Spacing scale
- Border radius
- Shadows
- Breakpoints

### 🛠 Utility Functions Ready
- `formatDate()` - Format dates
- `formatCurrency()` - Format Nigerian Naira
- `getStatusColor()` - Get status badge colors
- `isValidEmail()` - Email validation
- `isValidPhone()` - Phone validation
- `debounce()` - Debounce function

### 💾 Data Management Ready
- `api.fetchUsers()` - Fetch all users
- `api.fetchUserById()` - Fetch single user
- `storage.saveUsers()` - Save to localStorage
- `storage.getUsers()` - Get from localStorage
- `getMockUsers()` - Get 500 mock users

## 🎯 Next Steps

### Option 1: Build Components First (Recommended)
```bash
# Create common components
components/common/Button/
components/common/Input/
components/common/Card/
```

### Option 2: Build Pages First
```bash
# Create pages
app/login/page.tsx
app/dashboard/page.tsx
app/users/page.tsx
```

### Option 3: Follow the Full Guide
See `SETUP.md` for detailed step-by-step instructions.

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `styles/variables.scss` | Design tokens (colors, spacing, etc.) |
| `styles/mixins.scss` | Reusable SCSS patterns |
| `types/user.ts` | TypeScript interfaces |
| `lib/api.ts` | API utilities |
| `lib/storage.ts` | localStorage utilities |
| `lib/utils.ts` | Helper functions |
| `lib/mockData.ts` | Mock data generator |

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🏗 Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 📖 Documentation

- **README.md** - Full project documentation
- **SETUP.md** - Detailed setup guide
- **PROJECT_STATUS.md** - Current project status
- **QUICKSTART.md** - This file

## 🎨 Figma Design

https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0

## 💡 Tips

1. **Use SCSS Modules**: Import styles as `import styles from './Component.module.scss'`
2. **Follow BEM**: Use Block-Element-Modifier naming (e.g., `user-card__header`)
3. **Type Everything**: No `any` types - use proper TypeScript
4. **Test as You Go**: Write tests alongside components
5. **Mobile First**: Start with mobile design, then scale up
6. **Check Figma**: Verify spacing, colors, and typography

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### SCSS Not Compiling
```bash
# Reinstall sass
npm install sass --save-dev
```

### TypeScript Errors
```bash
# Check TypeScript
npx tsc --noEmit
```

## 📞 Need Help?

- Check `SETUP.md` for detailed instructions
- Review `PROJECT_STATUS.md` for current progress
- Email: careers@lendsqr.com

---

**Ready to build? Start with creating the Button component!**

```bash
mkdir -p components/common/Button
touch components/common/Button/Button.tsx
touch components/common/Button/Button.module.scss
touch components/common/Button/Button.test.tsx
```
