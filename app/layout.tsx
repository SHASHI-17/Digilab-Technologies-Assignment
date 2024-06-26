
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";



const inter = Noto_Sans({
  style: "normal",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "DigiLab Technologies Assignment",
  description: "PWA setup + Push Notifications",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/express.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        {children}
        <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(d, t) {
                                var g = d.createElement(t),
                                s = d.getElementsByTagName(t)[0];
                                g.src = "https://cdn.pushalert.co/integrate_250770ab486ea1fa618623938c080e3b.js";
                                s.parentNode.insertBefore(g, s);
                            }(document, "script"));
                        `,
                    }}
                />
        </body>
    </html>
  );
}
