'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    // Admin routes: no navbar/footer, just the children (admin layout handles its own layout)
    return <>{children}</>;
  }

  // Regular routes: show navbar and footer
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}