import { ImageComparison } from './components/ImageComparison';

export default function App() {
  const beforeImage = "https://valeconecta.com.br/tatimelo/wp-content/uploads/2026/05/antes.png";
  const afterImage = "https://valeconecta.com.br/tatimelo/wp-content/uploads/2026/05/depois.png";

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      <ImageComparison 
        beforeImage={beforeImage}
        afterImage={afterImage}
      />
    </div>
  );
}
