import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  // Necesita las llaves
  return (
    <>
      <Header />
      <h1>Mi primer</h1>
      <h2>Componente</h2>
      <Footer />
      <br />
      <Footer />
    </>
  );
};

export default App; // No necesita las llaves

// que es un componente?
/**
 * Es una funcion que retorna JSX
 */

/** Que es JSX?
 *
 * Es HTML dentro de un archivo JS
 */

/**
 * //! RULE:
 * Un componente de React solamente puede retornar 1 elemento JSX
 *
 */

/**
 * Fragment:
 *
 * <Fragment></Fragment>
 * <></>
 */
