'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      // Store mock auth token
      localStorage.setItem('auth_token', 'mock_token');
      router.push('/dashboard');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <Image 
            src="/logo.svg" 
            alt="Lendsqr Logo" 
            width={174}
            height={36}
            priority
          />
        </div>
        <div className={styles.illustration}>
          <Image 
            src="/login_img.png" 
            alt="Welcome Illustration" 
            width={600}
            height={337}
            priority
          />
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.loginForm}>
          <h1>Welcome!</h1>
          <p className={styles.subtitle}>Enter details to login.</p>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? styles.error : ''}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>
            
            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? styles.error : ''}
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
            </div>
            
            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>
            
            <button type="submit" className={styles.loginButton}>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
