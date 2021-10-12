import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculasJson from "./peliculas.json";
import Paginacion from "./paginacion";
import { useState } from "react";
function App() {
  const [paginaActual, setPaginaActual] = useState(1);

  const TOTAL_POR_PAGINA = 7;

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };

  let peliculas = peliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map((singlePelicula) => (
        <Pelicula
          titulo={singlePelicula.titulo}
          calificacion={singlePelicula.calificacion}
          director={singlePelicula.director}
          actores={singlePelicula.actores}
          fecha={singlePelicula.fecha}
          duracion={singlePelicula.duracion}
          img={singlePelicula.img}
        >
          {singlePelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default App;
