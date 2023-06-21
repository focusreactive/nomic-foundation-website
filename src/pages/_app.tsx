import '../styles/globals.css';
import { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-R2J7RJ7J6F" async={true} />
    <Script id="google-analytics-script">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-R2J7RJ7J6F');`}
    </Script>
  </>
}
