'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('auth_token');
    if (!token) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <button 
          onClick={() => {
            localStorage.removeItem('auth_token');
            router.push('/login');
          }}
          className={styles.logoutButton}
        >
          Logout
        </button>
      </div>
      
      <div className={styles.content}>
        <div className={styles.welcomeCard}>
          <h2>Welcome to Lendsqr Admin Console</h2>
          <p>Your dashboard is being built. The foundation is complete!</p>
          
          <div className={styles.statusGrid}>
            <div className={styles.statusItem}>
              <span className={styles.icon}>✅</span>
              <span>Project Setup Complete</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.icon}>✅</span>
              <span>SCSS Architecture Ready</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.icon}>✅</span>
              <span>TypeScript Types Defined</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.icon}>✅</span>
              <span>Utilities & Mock Data Ready</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.icon}>⏳</span>
              <span>Components - In Progress</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.icon}>⏳</span>
              <span>User Pages - In Progress</span>
            </div>
          </div>
          
          <div className={styles.nextSteps}>
            <h3>Next Steps:</h3>
            <ol>
              <li>Build common components (Button, Input, Card)</li>
              <li>Create layout components (Sidebar, Header)</li>
              <li>Build user list page with table</li>
              <li>Build user details page</li>
              <li>Add tests</li>
            </ol>
          </div>
          
          <div className={styles.docs}>
            <h3>📚 Documentation:</h3>
            <ul>
              <li><strong>README.md</strong> - Full project documentation</li>
              <li><strong>SETUP.md</strong> - Detailed setup guide</li>
              <li><strong>DEVELOPMENT_GUIDE.md</strong> - Step-by-step development instructions</li>
              <li><strong>QUICKSTART.md</strong> - Quick start guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
