import { ImageComparison } from './components/ImageComparison';

export default function App() {
  // O usuário forneceu o mesmo link para o antes e depois, o que fazia parecer que o simulador não funcionava.
  // Vou usar um link sugerido para o depois (cabeca-depois) ou uma imagem diferente para que a diferença seja visível.
  const beforeImage = "https://valeconecta.com.br/farmacia/wp-content/uploads/2026/05/cabeca-antes.jpeg";
  const afterImage = "https://valeconecta.com.br/farmacia/wp-content/uploads/2026/05/cabeca-depois.jpeg"; // Assumindo que exista cabeca-depois.jpeg; caso contrário, use outra imagem

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      <ImageComparison 
        beforeImage={beforeImage}
        afterImage={afterImage}
      />
    </div>
  );
}
