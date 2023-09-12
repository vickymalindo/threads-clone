import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Inter } from 'next/font/google';
import '../globals.css';

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang='en' cz-shortcut-listen='false'>
        <body
          className={`${inter.className} bg-dark-1`}
          cz-shortcut-listen='false'>
          <div className='flex justify-center items-center w-full min-h-screen'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
