import Link from "next/link";
import "./globals.css";
import DndContextProvider from "./dnd-context";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="bg-sky-300 flex gap-6 p-8 text-black">
          <Link href="/">home</Link>
          <Link href="/">home</Link>
          <Link href="/">home</Link>
          <Link href="/">home</Link>
        </nav>
        <DndContextProvider>{children}</DndContextProvider>
      </body>
    </html>
  );
}
