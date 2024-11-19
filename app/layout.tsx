import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Practice create portfolio with Mantine UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
      </body>
    </html>
  );
}
