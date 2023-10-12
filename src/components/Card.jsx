import React from 'react'

const Card = ({imagen}) => {
  return (
    <div>
        <button
            key={imagen.nombre}
            className={imagen.nombre === imagenCorrecta.nombre ? "correcta" : "incorrecta"}
            onClick={() => handleSubmit(imagen)}
          >
            <div style={{width:"10vw"}}>
              <img src={imagen.imagen} alt={imagen.nombre} style={{width:"100%"}}/>
            </div>
          </button>
    </div>
  )
}

export default Card