import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";

export const aref = localFont({
  src: "../public/fonts/ArefRuqaaInk-Bold.ttf",
  variable: "--font-aref",
});
export const aeonik = localFont({
  src: "../public/fonts/AeonikTRIAL-Regular.otf",
  variable: "--font-aeonik",
});

export const metadata = {
  // title: `${info.name} | ${info.role}`,
  description:
    "Ahmed Omran's Portfolio - Front-End Developer specializing in HTML, CSS, JavaScript, and React. Check out my projects and contact me.",
  keywords: [
    "Ahmed Omran",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "2ao1",
    "ao",
    "AO",
  ],
  authors: [{ name: "Ahmed Omran" }],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
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
      <body className="bg-tertiary relative font-subhead text-primary-800">
        <main
          id="page-content"
          className="bg-tertiary bg-amber-200 relative p-4 container mx-auto"
        >
          <h1 className={`${aref.variable} font-mainHead text-main`}>
            heyyyyy
          </h1>
          <h1 className="text-main ">hey</h1>
          {/* className="bg-tertiary relative p-4 container mx-auto opacity-0" */}
          {children}
        </main>
      </body>
    </html>
  );
}
