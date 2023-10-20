import { useEffect, useState } from "react";
import "./App.css";
import Swal from 'sweetalert2'

const initialState = [
  {
    nombre: "juntos",
    imagen: "./Juntos.png",
  },
  {
    nombre: "tepertenece",
    imagen: "./Tepertenece.png",
  },
  {
    nombre: "renace",
    imagen: "./Renace.png",
  },
  {
    nombre: "verde",
    imagen: "./Verde.png",
  },
  {
    nombre: "nosune",
    imagen: "./NosUne.png",
  },
  {
    nombre: "historico",
    imagen: "./PactoHistorico.png",
  },
  {
    nombre: "conservador",
    imagen: "./Convervador.png",
  },
  {
    nombre: "independientes",
    imagen: "./Independientes.png",
  },
  {
    nombre: "fuerzapaz",
    imagen: "./FuezaPaz.png",
  },
  {
    nombre: "asi",
    imagen: "./ASi.png",
  },
  {
    nombre: "centrod",
    imagen: "./CentroDemocratico.png",
  },
  {
    nombre: "gente",
    imagen: "./Gente.png",
  },
  {
    nombre: "liberal",
    imagen: "./Liberal.png",
  },
  {
    nombre: "decente",
    imagen: "./PactoDecente.png",
  },
  {
    nombre: "salvacion",
    imagen: "./Salvacion.png",
  },
  {
    nombre: "ecologista",
    imagen: "./Ecologista.png",
  },
  {
    nombre: "creemos",
    imagen: "./Creemos.png",
  },
];

const initialStateNum = [ {
  nombre: "1",
  imagen: "./1.png",
},
{
  nombre: "2",
  imagen: "./2.png",
},
{
  nombre: "3",
  imagen: "./3.png",
},
{
  nombre: "4",
  imagen: "./4.png",
},
{
  nombre: "5",
  imagen: "./5.png",
},
{
  nombre: "SIX",
  imagen: "./6.png",
},
{
  nombre: "7",
  imagen: "./7.png",
},
{
  nombre: "8",
  imagen: "./8.png",
},
{
  nombre: "9",
  imagen: "./9.png",
},
{
  nombre: "10",
  imagen: "./10.png",
},
{
  nombre: "11",
  imagen: "./11.png",
},
{
  nombre: "12",
  imagen: "./12.png",
},
{
  nombre: "13",
  imagen: "./13.png",
},
{
  nombre: "14",
  imagen: "./14.png",
},
{
  nombre: "15",
  imagen: "./15.png",
},
{
  nombre: "16",
  imagen: "./16.png",
},
{
  nombre: "17",
  imagen: "./17.png",
},
{
  nombre: "18",
  imagen: "./18.png",
},
{
  nombre: "19",
  imagen: "./19.png",
},
{
  nombre: "20",
  imagen: "./20.png",
},
{
  nombre: "21",
  imagen: "./21.png",
},
];


function App() {
  const [imagenes, setImagenes] = useState(initialState);
  const [numeros, setNumeros] = useState(initialStateNum);
  const [numeros2, setNumeros2] = useState(initialStateNum);

  const [imagenCorrecta, setImagenCorrecta] = useState({
    nombre: "tepertenece",
    imagen: "./Tepertenece.png",
  });

  const [numCorrecto, setNumCorrecto] = useState({
    nombre: "SIX",
    imagen: "./6.png",
  });

  const [candidatoOk, setCandidatoOk] = useState(null);
  const [paridoOk, setPartidoOk] = useState(null);

  const handlePartido = (imagenSeleccionada) => {
    if(imagenSeleccionada.nombre === imagenCorrecta.nombre){
      setPartidoOk(true)
      console.log('correcto')
      Swal.fire({
        icon: 'success',
        title: 'No olvides marcar el candidato!',
        text: 'Estas a un paso de logralo!',
      })
      const imagenCorrectaElement = document.querySelector(`#${imagenCorrecta.nombre}`);
      console.log(`[data-imagen="${imagenCorrecta}"]`)
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
  const handleCandidato = (candidatoSeleccionado, imagenSeleccionada) => {
    console.log(candidatoSeleccionado, imagenSeleccionada)
    console.log(numCorrecto, imagenCorrecta)
    if(candidatoSeleccionado.nombre === numCorrecto.nombre && imagenSeleccionada.nombre === imagenCorrecta.nombre){
      setCandidatoOk(true)
      console.log('correcto')
      Swal.fire({
        icon: 'success',
        title: 'No olvides marcar el partido!',
        text: 'Estas a un paso de lograrlo!',
      })
      const numCorrectaElement = document.querySelector(`#${numCorrecto.nombre}`);
      console.log(`[data-imagen="${numCorrecto.nombre}"]`)
      console.log(numCorrectaElement)
      numCorrectaElement.src = "./6Marcado.png";
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
      imageWidth: 350,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¿Jugar otra vez?',
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
        
        const numCorrectaElement = document.querySelector(`#${numCorrecto.nombre}`);
        console.log(`[data-imagen="${numCorrecto.nombre}"]`)
        console.log(numCorrectaElement)
        numCorrectaElement.src = "./6.png";

      }else{
        window.location.href = "https://fredycardenasconcejal.com/"
      }
    }
    )
  }
},[candidatoOk, paridoOk,imagenes])

  return (
    <div className="App">
      <h1 className="font-extrabold text-3xl max-md:text-sm">VOTO PARA CONCEJO MUNICIPAL DE</h1>
      <h1 className="font-bold text-3xl max-md:text-sm  ">MEDELLIN - ANTIOQUIA</h1>
      <h1 className="font-extrabold text-3xl text-[#BA3330] mb-10 max-md:text-sm">MARCAR MÁS DE UNA LISTA ANULA EL VOTO</h1>
      <div className="imagenes flex flex-col flex-wrap mia justify-between mt-16">
        
        {imagenes.map((imagen,index) => (
          <div key={imagen.nombre} className="flex border-4 border-black mb-14 p-[0.5vw] w-[30vw] max-md:w-[100vw]">
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
            {index <2  && numeros2.map((numero2,index) => (
                <button key={numero2.nombre}
                  className="correcta font-sans font-bold text-[1.4vw] border-2 border-black rounded-lg w-[3.26vw] h-[1.9vw] m-[0.1vw] max-md:w-[8.6vw] max-md:text-[4vw] max-md:h-[6vw] max-md:m-[0.5vw] max-md:rounded-base " 
                  onClick={() => handleCandidato(numero2, imagen)}>
                  <div >
                    <img src={numero2.imagen} alt={numero2.nombre} style={{width:"100%"}} id={numero2.nombre+"1"}/>
                  </div>
                </button>
               ))}

            {index !==0 &&  index !==1 &&index !==4 &&  index !==5 &&  index !==15 && numeros.map((numero,index) => (
                <button key={numero.nombre}
                  className={numero.nombre === numCorrecto.nombre ? "correcta font-sans font-bold text-[1.4vw] border-2 border-black rounded-lg w-[3.26vw] h-[1.9vw] m-[0.1vw] max-md:w-[8.6vw] max-md:text-[4vw] max-md:h-[6vw] max-md:m-[0.5vw] max-md:rounded-base " 
                                                                  : "incorrecta font-sans font-bold text-[1.4vw] border-2 border-black rounded-lg w-[3.26vw] h-[1.9vw] m-[0.1vw] max-md:w-[8.6vw] max-md:text-[4vw] max-md:h-[6vw] max-md:m-[0.5vw] max-md:rounded-base "}
                  onClick={() => handleCandidato(numero, imagen)}>
                  <div >
                    <img src={numero.imagen} alt={numero.nombre} style={{width:"100%"}} id={numero.nombre}/>
                  </div>
                </button>
               ))}
            </div>


            {/* <div style={{width:"61%"}} className="flex flex-wrap">
            {index !==8 &&  index !==10 &&  index !==13 && candidatos.map((candidato) => (
                <button
                  className="font-sans font-bold text-[1.4vw] border-2 border-black rounded-lg w-[3.26vw] h-[1.9vw] m-[0.1vw]
                              max-md:w-[8.6vw] max-md:text-[4vw] max-md:h-[6vw] max-md:m-[0.5vw] max-md:rounded-base "
                  onClick={() => handleCandidato(`${imagen.nombre}${candidato}`)}
                  key={candidato}
                  id={`${imagen.nombre}${candidato}`}>
                  {candidato}
                </button>
              ))}
            </div> */}


          </div>
        ))}
      </div>
      {/* <p>Intentos restantes: {intentos}</p> */}
    </div>
  );
}

export default App;
