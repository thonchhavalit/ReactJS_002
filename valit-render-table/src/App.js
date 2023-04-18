import './App.css';
import TableRender from './components/Table';
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  let productLink = 'https://api.escuelajs.co/api/v1/products';
  fetch(productLink).then(res => {
    return res.json();
  }).then(data => setProducts(data))

  return (
    <table class="table">
      <thead>
        <tr style={{ color: 'red' }}>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <TableRender productLink={products} />
    </table>
  )
}

export default App;