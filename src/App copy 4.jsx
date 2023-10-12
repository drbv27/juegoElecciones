import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [imagenes, setImagenes] = useState([
    {
      nombre: "gato",
      imagen: "./gato.jpg",
    },
    {
      nombre: "caballo",
      imagen: "./caballo.jpg",
    },
    {
      nombre: "perro",
      imagen: "./perro.jpg",
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

  const candidatos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  const [imagenCorrecta, setImagenCorrecta] = useState({
    nombre: "perro",
    imagen: "./perro.jpg",
  });

  const [intentos, setIntentos] = useState(0);

  const [numeroCorrecto, setNumeroCorrecto] = useState(6);

  const handleSubmit = (imagenSeleccionada) => {
    // Cambia la imagen por una con una X
    (async () => {
      imagenSeleccionada.imagen = "./perrox.jpg";
    })();

    if (imagenSeleccionada.nombre === imagenCorrecta.nombre) {
      // Alerta de que ha seleccionado la imagen correcta
      alert("Has seleccionado la imagen correcta. Ahora selecciona el número.");

      // Establece el número correcto
      setNumeroCorrecto(6);
    }else{
      // Alerta de que ha seleccionado la imagen incorrecta
      alert("Has seleccionado la imagen incorrecta. Vuelve a intentarlo.");
      return;
    }

    if (numeroCorrecto === null) {
      alert("¡Primero selecciona la imagen!");
    } else {
      if (numeroCorrecto === 6) {
        setImagenCorrecta(imagenes[Math.floor(Math.random() * imagenes.length)]);
        setIntentos(0);
        /* alert("¡Correcto!"); */
        const divCorrecto = document.querySelector('#perro6')
        console.log(divCorrecto)
        divCorrecto.href = `#`
      } else {
        setIntentos(intentos + 1);
        alert("¡Incorrecto! Intentos restantes: " + (3 - intentos));
      }
    }
  };

  return (
    <div className="App">
      <h1>Elecciones 2023</h1>
      <div className="imagenes">
        {imagenes.map((imagen) => (
          <div key={imagen.nombre} className="flex border m-4" style={{width:"40vw"}}>
            <div style={{width:"36%"}}>
              <button
                className={imagen.nombre === imagenCorrecta.nombre ? "correcta" : "incorrecta"}
                onClick={() => handleSubmit(imagen)}
              >
                <div >
                  <img src={imagen.imagen} alt={imagen.nombre} style={{width:"100%"}}/>
                </div>
              </button>
            </div>
            <div style={{width:"64%"}} className="flex flex-wrap">
            {candidatos.map((candidato) => (
                <button
                  className="border rounded w-8 mx-1"
                  key={candidato}
                  id={`${imagen.nombre}${candidato}`}
                >
                  {candidato}
                </button>
              ))}

            </div>
          </div>
        ))}
      </div>
      <p>Intentos restantes: {intentos}</p>
    </div>
  );
}

export default App;
