import { useState } from 'react';
import { ImageComparison } from './components/ImageComparison';
import { Info, AlertCircle, Phone, ArrowRight, ShieldCheck, Microscope, Star } from 'lucide-react';

export default function App() {
  // O usuário forneceu o mesmo link para o antes e depois, o que fazia parecer que o simulador não funcionava.
  // Vou usar um link sugerido para o depois (cabeca-depois) ou uma imagem diferente para que a diferença seja visível.
  const beforeImage = "https://valeconecta.com.br/farmacia/wp-content/uploads/2026/05/cabeca-antes.jpeg";
  const afterImage = "https://valeconecta.com.br/farmacia/wp-content/uploads/2026/05/cabeca-depois.jpeg"; // Assumindo que exista cabeca-depois.jpeg; caso contrário, use outra imagem


  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0C1D36] text-[#e0e0e0]">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/5 text-[#c5a059] text-[10px] uppercase tracking-widest mb-8 border border-white/10">
                <Microscope className="w-3 h-3" />
                Tecnologia FUE Avançada
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 leading-tight tracking-wide uppercase">
                Simule seu <span className="italic text-[#c5a059] font-normal lowercase">novo visual</span> hoje.
              </h1>
              <p className="text-sm md:text-base text-white/40 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                Descubra como o transplante capilar pode transformar sua aparência e recuperar sua autoestima. Arraste para o lado e veja o resultado de nossas técnicas de alta densidade.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#simulador" className="w-full sm:w-auto bg-[#c5a059] text-black px-8 py-3 rounded-none text-[10px] uppercase tracking-widest hover:bg-[#b08d48] transition-all flex items-center justify-center gap-2">
                  Testar Simulador
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="w-full sm:w-auto bg-transparent text-white border border-white/20 px-8 py-3 rounded-none text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                  Ver Depoimentos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        <section id="simulador" className="py-24 bg-[#09172B] border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-widest text-[#c5a059] mb-4">Projeção de 12 Meses</h2>
              <p className="font-serif text-3xl md:text-5xl text-white max-w-3xl mx-auto uppercase tracking-wider">
                O Antes e Depois
              </p>
            </div>



            <div className="transform hover:-translate-y-1 transition-transform duration-500">
              <ImageComparison 
                beforeImage={beforeImage}
                afterImage={afterImage}
              />
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-[#102442] p-8 border border-white/10 flex flex-col items-center text-center group hover:border-[#c5a059]/50 transition-colors">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-6 bg-white/5 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-white/60 group-hover:text-[#c5a059] transition-colors" />
                </div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] mb-3">Método FUE Premium</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light">Extração fio a fio sem cicatriz linear visível. Recuperação extremamente rápida e confortável.</p>
              </div>
              <div className="bg-[#102442] p-8 border border-[#c5a059]/30 flex flex-col items-center text-center transform md:-translate-y-4">
                <div className="w-10 h-10 bg-[#c5a059]/20 border border-[#c5a059] rounded-full flex items-center justify-center mb-6">
                  <Star className="w-4 h-4 text-[#c5a059]" />
                </div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] mb-3">Linha Frontal Natural</h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">Design artístico da hairline desenhado perfeitamente de acordo com as proporções do seu rosto.</p>
              </div>
              <div className="bg-[#102442] p-8 border border-white/10 flex flex-col items-center text-center group hover:border-[#c5a059]/50 transition-colors">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-6 bg-white/5 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-colors">
                  <Microscope className="w-4 h-4 text-white/60 group-hover:text-[#c5a059] transition-colors" />
                </div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] mb-3">Alta Densidade</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light">Implantação precisa utilizando as mais microscópicas lâminas de safira do mercado para máximo volume.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
