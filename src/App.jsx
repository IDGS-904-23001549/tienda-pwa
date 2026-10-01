import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [segundos, setSegundos] = useState(3);

  // productos del catálogo
  const obtenerProductos = async () => {
    const catalogo = [
      { id: 1, nombre: 'Leche 1L', precio: 28.50, imagen: 'https://tse2.mm.bing.net/th/id/OIP.wlEsbta3F6OyonpBEyDfVQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 2, nombre: 'Pan Blanco', precio: 42.00, imagen: 'https://tse3.mm.bing.net/th/id/OIP.BEpFrpWFzrZBWPD5yJy0AgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 3, nombre: 'Huevos 12pz', precio: 55.00, imagen: 'https://tse1.explicit.bing.net/th/id/OIP.X9zIkLtSUirY-3y7HBEjHAHaFB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 4, nombre: 'Arroz 1kg', precio: 24.00, imagen: 'https://tse1.mm.bing.net/th/id/OIP.2uCZEOpdG4MwyaMmZUUEEgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 5, nombre: 'Frijol 1kg', precio: 32.00, imagen: 'https://tse3.mm.bing.net/th/id/OIP.P72zDVwJs1omO7jgs5L4pgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 6, nombre: 'Aceite 1L', precio: 38.00, imagen: 'https://www.aceitesoleobercho.com/img/productos/aceite-oliva-virgen-extra-1l-20.jpg' },
      { id: 7, nombre: 'Azúcar 1kg', precio: 26.00, imagen: 'https://th.bing.com/th/id/R.fa198aebf70318faaab916f7e06671df?rik=L%2fypg02DfGdZEw&pid=ImgRaw&r=0' },
      { id: 8, nombre: 'Sal 1kg', precio: 18.00, imagen: 'https://th.bing.com/th/id/R.57efb18d0fc2f398fdbc342e9ade4b7a?rik=zASpj8bceyZ%2fMw&pid=ImgRaw&r=0' },
    ];
    return catalogo;
  };

  // formatea precio
  const formatearPrecio = (precio) => {
    return '$' + precio.toFixed(2);
  };

  // delay de 3 segundos
  const esperar = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // inicia la carga con cuenta regresiva
  const iniciarCarga = async () => {
    setCargando(true);
    setSegundos(3);
    
    const intervalo = setInterval(() => {
      setSegundos(s => {
        if (s <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    await esperar(3000);
    const datos = await obtenerProductos();
    setProductos(datos);
    setCargando(false);
  };

  useEffect(() => {
    iniciarCarga();
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <Header titulo="Abarrotes Hernandez" />
      
      <main className="container py-4">
        {cargando ? (
          <div className="text-center py-5">
            <div className="spinner-border text-success mb-3" style={{width: '3rem', height: '3rem'}}></div>
            <h4>Cargando catálogo...</h4>
            <h1 className="text-success fw-bold">{segundos} s</h1>
          </div>
        ) : (
          <Gallery productos={productos} formatearPrecio={formatearPrecio} />
        )}
      </main>
    </div>
  );
}

export default App;