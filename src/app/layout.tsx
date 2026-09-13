import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
    title: "Car Comparison App",
    description: "Find the best car for your needs",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={cn("font-sans", inter.variable)}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
