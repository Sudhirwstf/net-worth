import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";
const spaceMono = localFont({
  src: [{ path: "../fonts/SpaceMono-Regular.ttf", weight: "400", style: "normal" }],
  display: "swap",
});

export const metadata = {
  title: "Networth",
  description: "Question Answering",
};

// Move viewport to a separate export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ fontFamily: `${spaceMono.style.fontFamily}, monospace` }} className="h-full">
      <body className="m-0 p-0 w-full h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="p-4 pb-5 h-full max-w-[1440px] mx-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
