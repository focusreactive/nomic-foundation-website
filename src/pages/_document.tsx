import { Html, Head, Main, NextScript } from 'next/document';

const MeasurementID = process.env.NEXT_PUBLIC_MEASUREMENT_ID as string;

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/EncodeSans.woff2'
          as='font'
          type='font/woff2'
          // crossOrigin='true'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${MeasurementID}');

            `,
          }}
        />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          const theme = localStorage.getItem('theme') || 'LIGHT';
          document.body.className = theme;`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
