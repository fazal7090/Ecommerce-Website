import Footer from '@/components/footer';
import './globals.css';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-providers';
import ToastProvider from '@/providers/toast-providers';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
