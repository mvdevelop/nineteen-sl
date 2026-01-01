
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Aprendizado Personalizado',
      description: 'Conteúdo adaptado ao seu nível e objetivos de aprendizado.'
    },
    {
      icon: '🎧',
      title: 'Áudio Nativo',
      description: 'Gravações com falantes nativos para perfeita pronúncia.'
    },
    {
      icon: '📱',
      title: 'Acesso em Qualquer Lugar',
      description: 'Estude no computador, tablet ou smartphone.'
    },
    {
      icon: '📊',
      title: 'Progresso Detalhado',
      description: 'Acompanhe sua evolução com relatórios detalhados.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Estudante',
      content: 'Em 6 meses já consigo manter conversas em inglês com confiança!',
      avatar: 'MS'
    },
    {
      name: 'João Santos',
      role: 'Profissional',
      content: 'A metodologia diferenciada me ajudou a ser promovido no trabalho.',
      avatar: 'JS'
    },
    {
      name: 'Ana Oliveira',
      role: 'Viajante',
      content: 'Finalmente consigo viajar sem medo de me comunicar no exterior.',
      avatar: 'AO'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Domine o Inglês de Forma{' '}
              <span className="text-yellow-300">Definitiva</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Método inovador que combina tecnologia e didática para te levar da teoria à fluência
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="text-lg px-8">
                  Começar Agora Gratuitamente
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="secondary" size="lg" className="text-lg px-8">
                  Conhecer os Cursos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Nineteen English?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece tudo que você precisa para alcançar a fluência em inglês
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Junte-se a mais de 10.000 alunos satisfeitos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para transformar seu inglês?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comece hoje mesmo e tenha acesso a 7 dias grátis de todos os cursos
            </p>
            <Link to="/register">
              <Button size="lg" className="text-lg px-8">
                Experimente Grátis
              </Button>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Sem necessidade de cartão de crédito. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
