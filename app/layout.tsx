import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { RootProvider } from "fumadocs-ui/provider";


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
        <RootProvider>
          <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
        </RootProvider>

      </body>
    </html>
  );
}
