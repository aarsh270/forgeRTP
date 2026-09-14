import Head from 'next/head'
import { ThemeUIProvider } from 'theme-ui'
import theme from '../lib/theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Head>
        <title>Hack Club RTP — Where teens make cool stuff</title>
        <meta
          name="description"
          content="Hack Club RTP is a student-led community of teenagers making cool projects at Eva Perry Regional Library."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://assets.hackclub.com/icon-rounded.png" />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: 'Phantom Sans';
          src:
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Regular.woff')
              format('woff'),
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Regular.woff2')
              format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Phantom Sans';
          src:
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Italic.woff')
              format('woff'),
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Italic.woff2')
              format('woff2');
          font-weight: normal;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Phantom Sans';
          src:
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff')
              format('woff'),
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff2')
              format('woff2');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Phantom Sans', system-ui, -apple-system, sans-serif;
        }
        @keyframes teens-gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}
