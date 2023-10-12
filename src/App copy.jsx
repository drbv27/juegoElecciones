import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [imagenes, setImagenes] = useState([
    {
      nombre: "perro",
      imagen: "./perro.jpg",
    },
    {
      nombre: "gato",
      imagen: "./gato.jpg",
    },
    {
      nombre: "caballo",
      imagen: "./caballo.jpg",
    },
    {
      nombre: "pollo",
      imagen: "./pollo.jpg",
    },
    {
      nombre: "vaca",
      imagen: "./vaca.jpg",
    },
  ]);

  const [imagenCorrecta, setImagenCorrecta] = useState({
    nombre: "perro",
    imagen: "./perro.jpg",
  });

  const [intentos, setIntentos] = useState(0);

  const handleSubmit = (imagenSeleccionada) => {
    // Cambia la imagen por una con una X
    (async () => {
      imagenSeleccionada.imagen = "./perrox.jpg";
    })();

    if (imagenSeleccionada.nombre === imagenCorrecta.nombre) {
      setImagenCorrecta(imagenes[Math.floor(Math.random() * imagenes.length)]);
      setIntentos(0);
      alert("¡Correcto!");
    } else {
      setIntentos(intentos + 1);
      alert("¡Incorrecto! Intentos restantes: " + (3 - intentos));
    }
  };

  return (
    <div className="App">
      <h1>Elecciones 2023</h1>
      <div className="imagenes">
        {imagenes.map((imagen) => (
          <button
            key={imagen.nombre}
            className={imagen.nombre === imagenCorrecta.nombre ? "correcta" : "incorrecta"}
            onClick={() => handleSubmit(imagen)}
          >
            <div style={{width:"10vw"}}>
              <img src={imagen.imagen} alt={imagen.nombre} style={{width:"100%"}}/>
            </div>
          </button>
        ))}
      </div>
      <p>Intentos restantes: {intentos}</p>
    </div>
  );
}

export default App;



