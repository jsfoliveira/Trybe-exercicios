// EXERCICIO 1
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;
  console.log(nationality);

  // EXERCICIO 2
  const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

  const personagem = {
    firstName: 'João',
    lastName: 'Jr II',
  };
  
  const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };
  
  console.log(getNationality(otherPerson)); // Ivan is Russian
  console.log(getNationality(personagem)); // João is Brazilian
