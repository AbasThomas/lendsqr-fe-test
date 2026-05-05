import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import LoginPage from '../page';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('LoginPage', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('renders login form', () => {
    render(<LoginPage />);
    
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
    expect(screen.getByText('Enter details to login.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('LOG IN')).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<LoginPage />);
    
    const loginButton = screen.getByText('LOG IN');
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid email', async () => {
    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('LOG IN');
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    });
  });

  it('toggles password visibility', () => {
    render(<LoginPage />);
    
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
    const toggleButton = screen.getByText('SHOW');
    
    expect(passwordInput.type).toBe('password');
    
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe('text');
    expect(screen.getByText('HIDE')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('HIDE'));
    expect(passwordInput.type).toBe('password');
  });

  it('submits form with valid credentials', async () => {
    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('LOG IN');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(localStorage.getItem('auth_token')).toBe('mock_token');
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('renders logo and illustration', () => {
    render(<LoginPage />);
    
    const logo = screen.getByAltText('Lendsqr Logo');
    const illustration = screen.getByAltText('Welcome Illustration');
    
    expect(logo).toBeInTheDocument();
    expect(illustration).toBeInTheDocument();
  });
});
