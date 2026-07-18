// Global styles
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Budding Beauty - Grow Your Glow. Discover beauty products, trusted recommendations, and exclusive deals." />
        <meta name="theme-color" content="#22c55e" />
        <meta property="og:title" content="Budding Beauty" />
        <meta property="og:description" content="Grow Your Glow - Discover beauty products, trusted recommendations, and exclusive deals" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
