import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
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
