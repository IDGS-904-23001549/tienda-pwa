import React from 'react';

export const Header = ({ titulo }) => {
  return (
    <header className="bg-success text-white text-center py-3">
      <h1 className="mb-0">{titulo}</h1>
      <small>Tienda de abarrotes - Hernandez</small>
    </header>
  );
};