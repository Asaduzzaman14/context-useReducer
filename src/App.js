import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import { useEffect, useState } from 'react';
import ProductProvider from './context/ProductProvider';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route';

function App() {
  const [data, setData] = useState()

  useEffect(() => {

    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setData(data.data))
  }, [])

  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ProductProvider>

    </div>
  );
}

export default App;
