import React from 'react';


class Compras extends React.Component {
  render() {
  
  const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
  const items = () => {
    return shoppingList.map((item, index) => {
      return (<li key={index}>{ item }</li>);
    });
  }
    return (
        <>
          <h2>Lista de compras</h2>
          <ul>
            { items() }
          </ul>
        </>
    )
  }
}

export default Compras
;