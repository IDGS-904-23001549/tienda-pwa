import React from 'react';
import { ProductoCard } from './ProductoCard';

export const Gallery = ({ productos, formatearPrecio }) => {
  return (
    <div className="row g-3">
      {productos.map((p) => (
        <ProductoCard key={p.id} producto={p} formatearPrecio={formatearPrecio} />
      ))}
    </div>
  );
};