export default function Card(props) {
   return (
      <div>
         <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button>
         <h2>Nombre: {props.name}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Genero: {props.gender}</h2>
         <img  src={props.image} alt="" />
      </div>
   );
}
