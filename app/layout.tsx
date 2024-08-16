import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk  = Space_Grotesk ({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title:'Fatima',
	authors: {
		name: "Fatima",
	},

	description:
  "I'm a Frontend developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "FatimaAlhamed",
		description:
    "I'm a Frontend developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000",
		siteName: "FatimaAlhamed",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
