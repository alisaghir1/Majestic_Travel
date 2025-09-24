'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, MapPin, FileText, MessageSquare, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_last_activity');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    router.push('/');
  }, [router]);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem('admin_authenticated');
    const lastActivity = localStorage.getItem('admin_last_activity');
    
    if (auth === 'true' && lastActivity) {
      const now = new Date().getTime();
      const lastActivityTime = parseInt(lastActivity);
      const sessionTimeout = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      if (now - lastActivityTime < sessionTimeout) {
        setIsAuthenticated(true);
        // Update last activity
        localStorage.setItem('admin_last_activity', now.toString());
      } else {
        // Session expired
        handleLogout();
      }
    }

    // Set up activity tracking
    const updateActivity = () => {
      if (isAuthenticated) {
        localStorage.setItem('admin_last_activity', new Date().getTime().toString());
      }
    };

    // Track user activity
    document.addEventListener('mousedown', updateActivity);
    document.addEventListener('keydown', updateActivity);
    document.addEventListener('scroll', updateActivity);

    return () => {
      document.removeEventListener('mousedown', updateActivity);
      document.removeEventListener('keydown', updateActivity);
      document.removeEventListener('scroll', updateActivity);
    };
  }, [isAuthenticated, handleLogout]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        localStorage.setItem('admin_authenticated', 'true');
        localStorage.setItem('admin_last_activity', new Date().getTime().toString());
        setIsAuthenticated(true);
        setUsername('');
        setPassword('');
      } else {
        alert('Incorrect username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#1c355e]">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter admin username (email)"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter admin password"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1c355e] text-white p-3 rounded-lg hover:bg-[#2a4a7a] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Services', href: '/admin/services', icon: Package },
    { name: 'Destinations', href: '/admin/destinations', icon: MapPin },
    { name: 'Blogs', href: '/admin/blogs', icon: FileText },
    { name: 'Testimonials', href: '/admin/testimonials', icon: Users },
    { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1c355e] text-white">
        <div className="p-6">
          <h1 className="text-xl font-bold">Majestic Admin</h1>
        </div>
        <nav className="mt-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#2a4a7a] hover:text-white"
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
          <button
            onClick={handleLogout}
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-red-600 hover:text-white w-full text-left mt-8"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}