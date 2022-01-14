//Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const student = {}

  Object.assign(student, student1,student2);

  for (let key of Object.keys(student)){
    console.log(`Nome da habilidade: ${key} , Nível: ${student[key]}`);
}

//2.Faça string determinando qual é  chave e qual é o valor
const student3 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

for (let key of Object.keys(student3)){
    console.log(`chave: ${key} - valor ${student3[key]}`);
}



