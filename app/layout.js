import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weights: ["400", "500", "600"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: "400"
});

export const metadata = {
  title: "Rowel Alvero Jr",
  description: "ROWEL ALVERO JR - Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
