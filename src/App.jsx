import { useEffect, useState } from "react";
import "./App.css";
import Swal from 'sweetalert2'

const initialState = [
  {
    nombre: "juntos",
    imagen: "./Juntos.png",
  },
  {
    nombre: "asi",
    imagen: "./ASi.png",
  },
  {
    nombre: "tepertenece",
    imagen: "./Tepertenece.png",
  },
  {
    nombre: "centrod",
    imagen: "./CentroDemocratico.png",
  },
  {
    nombre: "renace",
    imagen: "./Renace.png",
  },
  {
    nombre: "gente",
    imagen: "./Gente.png",
  },
  {
    nombre: "verde",
    imagen: "./Verde.png",
  },
  {
    nombre: "liberal",
    imagen: "./Liberal.png",
  },
  {
    nombre: "nosune",
    imagen: "./NosUne.png",
  },
  {
    nombre: "decente",
    imagen: "./PactoDecente.png",
  },
  {
    nombre: "historico",
    imagen: "./PactoHistorico.png",
  },
  {
    nombre: "salvacion",
    imagen: "./Salvacion.png",
  },
  {
    nombre: "conservador",
    imagen: "./Convervador.png",
  },
  {
    nombre: "ecologista",
    imagen: "./Ecologista.png",
  },
  {
    nombre: "independientes",
    imagen: "./Independientes.png",
  },
  {
    nombre: "creemos",
    imagen: "./Creemos.png",
  },
  {
    nombre: "fuerzapaz",
    imagen: "./FuezaPaz.png",
  },
];



function App() {
  const [imagenes, setImagenes] = useState(initialState);

  const candidatos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  const [imagenCorrecta, setImagenCorrecta] = useState({
    nombre: "tepertenece",
    imagen: "./Tepertenece.png",
  });

  const [candidatoOk, setCandidatoOk] = useState(null);
  const [paridoOk, setPartidoOk] = useState(null);


  const handlePartido = (imagenSeleccionada) => {
    if(imagenSeleccionada.nombre === imagenCorrecta.nombre){
      setPartidoOk(true)
      console.log('correcto')
      Swal.fire({
        icon: 'success',
        title: 'Perfecto',
        text: 'Ese es nuestro partido, no olvides marcar el candidato!',
      })
      const imagenCorrectaElement = document.querySelector(`#${imagenCorrecta.nombre}`);
      console.log(`[data-imagen="${imagenCorrecta.nombre}"]`)
      console.log(imagenCorrectaElement)
      imagenCorrectaElement.src = "./Tepertenecex.png";
    }
    else{
      console.log('incorrecto')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ese no es nuestro partido!',
      })
    }
    }
  const handleCandidato = (candidatoSeleccionado) => {
    console.log(candidatoSeleccionado)
    if(candidatoSeleccionado === 'tepertenece6'){
      setCandidatoOk(true)
      console.log('correcto')
      Swal.fire({
        icon: 'success',
        title: 'Perfecto',
        text: 'Ese es nuestro candidato, no olvides marcar el partido !',
      })
    }
    else{
      console.log('incorrecto')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ese no es nuestro candidato!',
      })
    }
    }

  useEffect(() => {

      console.log(candidatoOk, paridoOk)
  if(candidatoOk && paridoOk){
    Swal.fire({
      title: 'Genial!',
      text: 'Así debes votar el 29 de Octubre.',
      imageUrl: './Fredy-Gana-circular-_1_.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Jugar otra vez?',
      cancelButtonText: 'Salir'
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        Swal.fire(
          'Empezemos de nuevo!',
        )
        setCandidatoOk(null)
        setPartidoOk(null)
        const imagenCorrectaElement = document.querySelector(`#${imagenCorrecta.nombre}`);
        console.log(`[data-imagen="${imagenCorrecta.nombre}"]`)
        console.log(imagenCorrectaElement)
        imagenCorrectaElement.src = "./Tepertenece.png";
      }else{
        window.location.href = "https://fredycardenasconcejal.com/"
      }
    }
    )
  }
},[candidatoOk, paridoOk,imagenes])

  return (
    <div className="App">
      <h1 className="font-extrabold text-3xl">VOTO PARA CONCEJO MUNICIPAL DE</h1>
      <h1 className="font-bold text-3xl">MEDELLIN - ANTIOQUIA</h1>
      <h1 className="font-extrabold text-3xl text-[#BA3330] mb-10">MARCAR MÁS DE UNA LISTA ANULA EL VOTO</h1>
      <div className="imagenes flex justify-between">
        {imagenes.map((imagen,index) => (
          <div key={imagen.nombre} className="flex border-4 border-black mb-14 p-[0.5vw]" style={{width:"30vw", height:"12vw"}}>
            <div style={{width:"39%"}}>
              <button 
                className={imagen.nombre === imagenCorrecta.nombre ? "correcta" : "incorrecta"}
                onClick={() => handlePartido(imagen)}>
                <div >
                  <img src={imagen.imagen} alt={imagen.nombre} style={{width:"100%"}} id={imagen.nombre}/>
                </div>
              </button>
            </div>
            <div style={{width:"61%"}} className="flex flex-wrap">
            {index !==8 &&  index !==10 &&  index !==13 && candidatos.map((candidato) => (
                <button
                  className="font-sans font-bold text-[1.4vw] border-2 border-black rounded-lg w-[3.26vw] h-[1.9vw] m-[0.1vw]"
                  onClick={() => handleCandidato(`${imagen.nombre}${candidato}`)}
                  key={candidato}
                  id={`${imagen.nombre}${candidato}`}>
                  {candidato}
                </button>
              ))}

            </div>
          </div>
        ))}
      </div>
      {/* <p>Intentos restantes: {intentos}</p> */}
    </div>
  );
}

export default App;
