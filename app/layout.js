// ---------------------------------------------------------------- //
// File Name: app/layout.js
// Function: This is the main layout for the entire website,
//         used to configure elements that appear
//         on all pages, such as the header, footer, and content width.
// ---------------------------------------------------------------- //

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdsterraLayoutWrapper from '../components/AdsterraLayoutWrapper'; 
// Removed import 'video.js/dist/video-js.css'; from here

export const metadata = {
  // Changing title and description to English
  title: 'Erica Stream | Watch Movies and TV Series Streaming Free',
  description: 'Your ultimate destination for high-quality Watch Movies and TV shows streaming.',
  // Menambahkan meta keywords untuk SEO
  keywords: ['Erica Stream', 'watch free movies', 'watch free tv series', 'streaming', 'film gratis'],
  // Open Graph meta tags for Facebook
  openGraph: {
    title: 'Erica Stream | Watch Movies and TV Series Streaming Free',
    description: 'Your ultimate destination for high-quality Watch Movies and TV shows streaming.',
    url: 'https://ericastream.netlify.app/',
    siteName: 'Erica Stream',
    images: [
      {
        url: 'https://live.staticflickr.com/65535/54742212042_56276e557f_b.jpg',
        width: 1200,
        height: 630,
        alt: 'Erica Stream',
      },
    ],
    // Changing locale to English
    locale: 'en_US',
    type: 'website',
    // Special property for Facebook, 'og:app_id'
    appId: 'cut.erna.984',
  },
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    site: '@WatchStream123', // Your Twitter user
    creator: '@WatchStream123',
    // Mengoreksi kesalahan ketik pada deskripsi
    title: 'Erica Stream | Watch Movies and TV Series Streaming Free',
    description: 'Your ultimate destination for high-quality Watch Movies and TV shows streaming.',
    images: ['https://live.staticflickr.com/65535/54742212042_56276e557f_b.jpg'], // Replace with the appropriate image URL
  },
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Adding suppressHydrationWarning to address hydration errors. */}
      {/* This often happens when third-party scripts or browser extensions modify the body tag. */}
      <body suppressHydrationWarning={true}>
        <AdsterraLayoutWrapper>
          {/* Main container with a maximum width */}
          {/* Moving Header, content, and Footer into this container */}
          <div className="mx-auto max-w-7xl">
            <Header />
            {children}
            <Footer />
          </div>
        </AdsterraLayoutWrapper>
      </body>
    </html>
  );
}
