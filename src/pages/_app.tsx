import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}
