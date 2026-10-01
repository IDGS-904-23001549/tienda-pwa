import React from 'react';

export const ProductoCard = ({ producto, formatearPrecio }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} style={{height: '200px', objectFit: 'cover'}} />
        <div className="card-body">
          <h6 className="card-title">{producto.nombre}</h6>
          <p className="card-text text-success fw-bold">{formatearPrecio(producto.precio)}</p>
        </div>
      </div>
    </div>
  );
};