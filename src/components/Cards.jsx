import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   console.log(characters)
   // console.log(props)
   const individual = characters.map((character) => <Card key={character.id}
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         />);
   return (
      <div>
         <ul>
            {individual}
         </ul>
      </div>
      );
}
