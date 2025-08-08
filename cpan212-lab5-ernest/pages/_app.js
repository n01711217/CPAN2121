import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
