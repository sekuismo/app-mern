//Este componente contiene al app.js  ,así todos los componentes pueden compartir el estado 
// renderiza toda la app en childen


export const PostContext = ({children}) => {
    console.log('contenedor')
  return (
    <div>{children}</div>
    
  )
}

