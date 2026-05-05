# Development Guide - Lendsqr Frontend Assessment

## 🎯 Overview

This guide will walk you through building the remaining components and pages for the Lendsqr assessment. The foundation is complete - now it's time to build!

## 📋 Development Phases

### Phase 1: Common Components (Priority: HIGH)

#### 1.1 Button Component (30 minutes)

**File**: `components/common/Button/Button.tsx`

```typescript
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
```

**File**: `components/common/Button/Button.module.scss`

```scss
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.button {
  @include button-base;
  
  &.primary {
    background-color: $primary-color;
    color: $white;
    
    &:hover:not(:disabled) {
      background-color: darken($primary-color, 10%);
    }
  }
  
  &.secondary {
    background-color: $secondary-color;
    color: $white;
    
    &:hover:not(:disabled) {
      background-color: darken($secondary-color, 10%);
    }
  }
  
  &.outline {
    background-color: transparent;
    border: 1px solid $primary-color;
    color: $primary-color;
    
    &:hover:not(:disabled) {
      background-color: rgba($primary-color, 0.1);
    }
  }
  
  &.danger {
    background-color: $error-color;
    color: $white;
    
    &:hover:not(:disabled) {
      background-color: darken($error-color, 10%);
    }
  }
  
  &.small {
    padding: 8px 16px;
    font-size: $font-size-small;
  }
  
  &.medium {
    padding: 12px 24px;
    font-size: $font-size-base;
  }
  
  &.large {
    padding: 16px 32px;
    font-size: $font-size-large;
  }
  
  &.fullWidth {
    width: 100%;
  }
}
```

**File**: `components/common/Button/Button.test.tsx`

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

#### 1.2 Input Component (30 minutes)

**File**: `components/common/Input/Input.tsx`

```typescript
import { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'date';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  required = false,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          required={required}
          className={`${styles.input} ${error ? styles.error : ''} ${icon ? styles.withIcon : ''}`}
        />
        {type === 'password' && (
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
```

#### 1.3 StatusBadge Component (20 minutes)

**File**: `components/common/StatusBadge/StatusBadge.tsx`

```typescript
import styles from './StatusBadge.module.scss';

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
```

**File**: `components/common/StatusBadge/StatusBadge.module.scss`

```scss
@use '@/styles/variables' as *;

.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 100px;
  font-size: $font-size-small;
  font-weight: 400;
  
  &.active {
    background: rgba($active-color, 0.1);
    color: $active-color;
  }
  
  &.inactive {
    background: rgba($inactive-color, 0.1);
    color: $inactive-color;
  }
  
  &.pending {
    background: rgba($pending-color, 0.1);
    color: $pending-color;
  }
  
  &.blacklisted {
    background: rgba($blacklisted-color, 0.1);
    color: $blacklisted-color;
  }
}
```

### Phase 2: Layout Components (Priority: HIGH)

#### 2.1 Sidebar Component (1 hour)

**File**: `components/layout/Sidebar/Sidebar.tsx`

Key features:
- Navigation menu items
- Active state highlighting
- Collapsible on mobile
- Icons for each menu item

#### 2.2 Header Component (1 hour)

**File**: `components/layout/Header/Header.tsx`

Key features:
- Search bar
- Notification bell
- User profile dropdown
- Logo

#### 2.3 DashboardLayout Component (30 minutes)

**File**: `components/layout/DashboardLayout/DashboardLayout.tsx`

```typescript
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import styles from './DashboardLayout.module.scss';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};
```

### Phase 3: Pages (Priority: HIGH)

#### 3.1 Login Page (2 hours)

**File**: `app/login/page.tsx`

```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/common/Input/Input';
import { Button } from '@/components/common/Button/Button';
import { isValidEmail } from '@/lib/utils';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      // Store auth token (mock)
      localStorage.setItem('auth_token', 'mock_token');
      router.push('/dashboard');
    }
  };
  
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSection}>
        {/* Logo and illustration */}
      </div>
      <div className={styles.rightSection}>
        <div className={styles.loginForm}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
              error={errors.email}
            />
            
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              error={errors.password}
            />
            
            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>
            
            <Button type="submit" fullWidth>
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
```

#### 3.2 Dashboard Page (2 hours)

**File**: `app/dashboard/page.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout/DashboardLayout';
import { api } from '@/lib/api';
import { UserStats } from '@/types/user';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  
  useEffect(() => {
    const fetchStats = async () => {
      const data = await api.getUserStats();
      setStats(data);
    };
    
    fetchStats();
  }, []);
  
  return (
    <DashboardLayout>
      <div className={styles.dashboard}>
        <h1>Users</h1>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.icon}>{/* Icon */}</div>
            <p className={styles.label}>USERS</p>
            <p className={styles.value}>{stats?.totalUsers.toLocaleString()}</p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.icon}>{/* Icon */}</div>
            <p className={styles.label}>ACTIVE USERS</p>
            <p className={styles.value}>{stats?.activeUsers.toLocaleString()}</p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.icon}>{/* Icon */}</div>
            <p className={styles.label}>USERS WITH LOANS</p>
            <p className={styles.value}>{stats?.usersWithLoans.toLocaleString()}</p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.icon}>{/* Icon */}</div>
            <p className={styles.label}>USERS WITH SAVINGS</p>
            <p className={styles.value}>{stats?.usersWithSavings.toLocaleString()}</p>
          </div>
        </div>
        
        {/* User table will go here */}
      </div>
    </DashboardLayout>
  );
}
```

#### 3.3 Users Page (4-5 hours)

**File**: `app/users/page.tsx`

Key features:
- User table with all columns
- Filtering by organization, username, email, date, phone, status
- Pagination (100 items per page)
- Action menu (View Details, Blacklist, Activate)
- Responsive table

#### 3.4 User Details Page (3-4 hours)

**File**: `app/users/[id]/page.tsx`

Key features:
- User information display
- Tabs (General Details, Documents, Bank Details, Loans, Savings, App and System)
- Blacklist/Activate actions
- Back to users navigation

## 🧪 Testing Strategy

### Unit Tests
Test each component in isolation:
- Rendering
- Props handling
- User interactions
- Edge cases

### Integration Tests
Test page functionality:
- Form submissions
- API calls
- Navigation
- Data persistence

### Example Test Structure

```typescript
describe('ComponentName', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {});
    it('renders with correct props', () => {});
  });
  
  describe('Interactions', () => {
    it('handles click events', () => {});
    it('handles input changes', () => {});
  });
  
  describe('Edge Cases', () => {
    it('handles empty data', () => {});
    it('handles errors', () => {});
  });
});
```

## 📱 Responsive Design Checklist

### Mobile (< 480px)
- [ ] Single column layout
- [ ] Hamburger menu
- [ ] Stacked cards
- [ ] Touch-friendly buttons (min 44px)
- [ ] Horizontal scrolling tables

### Tablet (480px - 768px)
- [ ] Two column layout where appropriate
- [ ] Collapsible sidebar
- [ ] Adjusted spacing

### Desktop (> 768px)
- [ ] Full sidebar visible
- [ ] Multi-column layouts
- [ ] Hover states
- [ ] Larger spacing

## ♿ Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Alt text for images
- [ ] Color contrast ratios (WCAG AA)
- [ ] Screen reader friendly

## 🎨 Design Fidelity Checklist

Compare your implementation with Figma:
- [ ] Exact colors match
- [ ] Spacing matches (use browser dev tools)
- [ ] Typography matches (font, size, weight)
- [ ] Border radius matches
- [ ] Shadows match
- [ ] Icons match
- [ ] Hover states match
- [ ] Active states match

## 🚀 Performance Optimization

- [ ] Use React.memo for expensive components
- [ ] Implement virtual scrolling for large lists
- [ ] Lazy load images
- [ ] Code splitting for routes
- [ ] Debounce search inputs
- [ ] Cache API responses

## 📝 Git Workflow

### Commit Message Format
```
type(scope): subject

body (optional)

footer (optional)
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Examples**:
```
feat(button): add button component with variants
fix(login): resolve email validation issue
style(users): update table responsive design
test(input): add input component tests
docs(readme): update setup instructions
```

### Recommended Branches
- `main` - Production ready
- `develop` - Development
- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes

## 🔍 Code Review Checklist

Before committing:
- [ ] Code follows TypeScript best practices
- [ ] No `any` types used
- [ ] SCSS follows BEM methodology
- [ ] Components are reusable
- [ ] Tests are written and passing
- [ ] No console.log statements
- [ ] Error handling implemented
- [ ] Loading states implemented
- [ ] Responsive design verified
- [ ] Accessibility checked

## 📦 Deployment Checklist

- [ ] All features implemented
- [ ] All tests passing
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Environment variables configured
- [ ] README updated with deployment URL
- [ ] Performance tested
- [ ] Cross-browser tested
- [ ] Mobile tested

## 🎥 Loom Video Checklist

Your 3-minute video should cover:
1. **Introduction** (15 seconds)
   - Your name
   - Brief overview

2. **Design Comparison** (1 minute)
   - Show Figma design
   - Show your implementation
   - Highlight pixel-perfect matches

3. **Feature Walkthrough** (1 minute)
   - Login functionality
   - Dashboard statistics
   - User filtering and pagination
   - User details page

4. **Technical Highlights** (30 seconds)
   - TypeScript usage
   - SCSS architecture
   - Testing approach

5. **Conclusion** (15 seconds)
   - Thank you
   - Contact information

**Remember**: Face must be visible throughout!

## 📞 Getting Help

If you're stuck:
1. Check the documentation files
2. Review the Figma design
3. Check Next.js documentation
4. Email careers@lendsqr.com

## 🎯 Final Tips

1. **Start Simple**: Build basic versions first, then enhance
2. **Test Early**: Don't wait until the end to test
3. **Commit Often**: Small, focused commits
4. **Stay Organized**: Keep files and folders structured
5. **Match Figma**: Use browser dev tools to measure exact spacing
6. **Ask Questions**: If requirements are unclear, ask
7. **Time Management**: Track your time per phase
8. **Take Breaks**: Fresh eyes catch more issues

---

**Good luck with your development!** 🚀

You have a solid foundation. Now it's time to build something amazing!
