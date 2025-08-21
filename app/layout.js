import Script from "next/script";
import "./globals.css";

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
    <html lang="en">
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
      <body className="bg-tertiary font-subhead text-primary-800 px-2">
        <main
          id="page-content"
          className="relative container mx-auto cursor-default"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
