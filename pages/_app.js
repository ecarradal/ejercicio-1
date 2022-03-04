import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const unaConstante = "Ejercicio #1";

  return (
    <>
      <h1>{unaConstante}</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
