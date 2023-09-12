import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Provider from "./Provider";
import SearchBox from "./components/SearchBox";

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB Clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
