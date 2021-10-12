import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";

function App() {
  let listPeliculas = [
    {
      img: "images/uploads/mv1.jpg",
      titulo: "oblivion (2012)",
      calificacion: "8.1",
      director: "Joss Whedon",
      actores: "Robert Downey Jr.,Chris Evans,Chris Hemsworth",
      fecha: "1 May 2015",
      duracion: "2h21min",
      descripcion:
        "Earth's mightiest heroes must come together and learn to \
			fight as a team  if they are to stop the mischievous Loki and his alien\
			army from enslaving humanity...",
    },
    {
      img: "images/uploads/mv2.jpg",
      titulo: "into the wild (2014)",
      calificacion: "7.8",
      director: "Anthony Russo, Joe Russo",
      actores: "Chris Evans, Samuel L. Jackson, Scarlett Johansson",
      fecha: "1 May 2015",
      duracion: "2h21min",
      descripcion:
        "As Steve Rogers struggles to embrace his role in the modern\
			world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black\
			Widow, to battle a new threat...",
    },
    {
      img: "images/uploads/mv3.jpg",
      titulo: "blade runner (2015)",
      calificacion: "7.3",
      director: "Peyton Reed",
      actores: "Paul Rudd, Michael Douglas",
      fecha: "1 May 2015",
      duracion: "2h21min",
      descripcion:
        "Armed with a super-suit with the astonishing ability to shrink in scale\
				but increase in strength, cat burglar Scott Lang must embrace his inner\
				hero and help...",
    },
    {
      img: "images/uploads/mv4.jpg",
      titulo: "Mulholland pride (2013)",
      calificacion: "7.2",
      director: "Anthony Russo, Joe Russo",
      actores: "Robert Downey Jr., Guy Pearce, Don Cheadle",
      fecha: "1 May 2015",
      duracion: "2h21min",
      descripcion:
        "When Tony Stark's world is torn apart by a formidable terrorist called\
				the Mandarin, he starts an odyssey of rebuilding and retribution...",
    },
    {
      img: "images/uploads/mv5.jpg",
      titulo: "skyfall: evil of boss (2013)",
      calificacion: "7.0",
      director: "Alan Taylor",
      actores: "Natalie Portman, Chris Hemsworth, Tom Hiddleston",
      fecha: "1 May 2015",
      duracion: "2h21min",
      descripcion:
        "When Tony Stark's world is torn apart by a formidable terrorist called\
				the Mandarin, he starts an odyssey of rebuilding and retribution...",
    },
  ];
  return (
    <PageWrapper>
      {listPeliculas.map((singlePelicula) => (
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
    </PageWrapper>
  );
}

export default App;
