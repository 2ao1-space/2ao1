import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

export const aref = localFont({
  src: "../public/fonts/ArefRuqaaInk-Bold.ttf",
  variable: "--font-aref",
  display: "swap",
});

export const aeonik = localFont({
  src: "../public/fonts/AeonikTRIAL-Regular.otf",
  variable: "--font-aeonik",
  display: "swap",
});

export const anton = localFont({
  src: "../public/fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
});

export const metadata = {
  description: "Ahmed Omran's Portfolio - Front-End Developer",
  keywords: ["Ahmed Omran", "Frontend Developer", "React", "Next.js"],
  authors: [{ name: "Ahmed Omran" }],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${aref.variable} ${aeonik.variable} ${anton.variable}`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G39QYJSQQB"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "G-G39QYJSQQB");
            `,
          }}
        />
      </head>
      <body className="bg-tertiary font-subhead text-primary-800">
        <main
          id="page-content"
          className="bg-tertiary relative p-4 container mx-auto"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
