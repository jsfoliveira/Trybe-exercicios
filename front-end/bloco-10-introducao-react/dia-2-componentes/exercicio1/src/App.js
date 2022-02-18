import './App.css';
import Header  from './Componentes/Header';
import Greeting from './Componentes/Greeting';
import Image from './Componentes/Image';
import Album from  './Componentes/Album';

function App() {
  const album01 = {
    title: 'Mylo Xyloto',
    releaseDate: {
      year: '2011',
      month: '10',
      day: '24',
    },
  };
  
  return (
    <>
      <Header />
      <Greeting name="Juliana" lastName="Oliveira" />
      <Image src="{source}" alternativeText="Foto do gato" />
      {/* não consegui colocar a imagem */}
      <Album album={ album01 } />
    </>
  );
}

export default App;
