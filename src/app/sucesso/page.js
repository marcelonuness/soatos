import Link from 'next/link';

const Agradecimento = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-4xl font-bold mb-4">Agradecemos pelo seu e-mail!</div>
      <p className="text-lg mb-8">
        Agradecemos por entrar em contato conosco. Entraremos em contato o mais breve possível.
      </p>     
     
        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voltar para o Início
        </Link>
 
    </div>
  );
};

export default Agradecimento;
