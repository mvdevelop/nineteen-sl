
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center animate-fade-in">
        <div className="relative">
          <h1 className="text-9xl font-bold text-primary-100">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
              <p className="text-xl text-gray-600 mb-8">
                Oops! A página que você está procurando não existe ou foi movida.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-6">
          <p className="text-gray-500">
            Aqui estão alguns links que podem ajudar:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/">
              <Button variant="primary" fullWidth>
                Página Inicial
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="secondary" fullWidth>
                Nossos Cursos
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Precisa de ajuda?{' '}
              <Link to="/contact" className="text-primary-600 hover:text-primary-500 font-medium">
                Entre em contato com nosso suporte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
