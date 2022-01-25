// EXERCICIO 1
const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// EXERCICIO 2
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
console.log(getPosition(-19.8157, -43.9542));