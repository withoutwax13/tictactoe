import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tic Tac Toe",
  description: "Tic Tac Toe game built with React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-200 header">
          <a
            href="https://github.com/withoutwax13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 16.41 5.27 20.17 9.36 21.5C10.07 21.58 10.5 21.27 10.5 20.98V18.69C7.19 19.38 6.73 17.8 6.73 17.8C6.32 16.84 5.68 16.6 5.68 16.6C4.71 16.07 5.71 16.08 5.71 16.08C6.69 16.12 7.32 17.04 7.32 17.04C8.23 18.63 10.17 18.28 11.05 17.95C11.22 17.18 11.61 16.62 12.05 16.38C8.82 16.15 5.4 15.42 5.4 11.5C5.4 10.39 5.93 9.63 6.77 9C6.61 8.71 6.2 7.31 6.82 5.92C6.82 5.92 7.49 5.65 10.5 7.38C11.57 7.08 12.7 6.92 13.86 7.38C16.86 5.65 17.54 5.92 17.54 5.92C18.16 7.31 17.75 8.71 17.59 9C18.43 9.63 18.96 10.39 18.96 11.5C18.96 15.44 15.55 16.14 12.32 16.38C12.76 16.62 13.15 17.18 13.32 17.95C14.2 18.28 16.14 18.63 17.05 17.04C17.05 17.04 17.68 16.12 18.66 16.08C19.66 16.08 20.66 16.07 19.69 16.6C19.05 16.6 18.41 16.84 18 17.8C18 17.8 17.54 19.38 14.23 18.69V20.98C14.23 21.27 14.66 21.58 15.37 21.5C19.46 20.17 22.73 16.41 22.73 12C22.73 6.48 18.24 2 12 2Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
