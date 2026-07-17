
import { ArrowRight, ShieldCheck, CheckCircle2, Star } from "lucide-react";

export default function OfferSection() {
  return (
    <>
      {/* Offer / Pricing Section */}
      <section id="oferta" className="py-24 px-4 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha a opção que faz mais sentido para você:</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600">Ambas garantem acesso imediato, porém apenas o VIP entrega a preparação completa (10 Passos + 9 Bônus).</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 lg:gap-10 items-stretch mt-8">
            
            {/* Basic Offer */}
            <div className="bg-slate-50 rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-slate-200 text-slate-700 text-center py-4 font-bold tracking-wide uppercase text-sm border-b border-slate-300">
                PLANO BÁSICO
              </div>
              
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                {/* Mockup da Oferta Básica */}
                <div className="w-full h-80 md:h-64 my-6 flex items-center justify-center relative">
                  <img src="https://i.postimg.cc/FKkgSfrn/Mockup-Plano-Basico-squoosh.webp" loading="lazy" alt="Kit Estratégico Básico" className="w-full h-full object-contain relative z-10 scale-[1.15] md:scale-110" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Apenas os 10 Passos</h3>
                <p className="text-center text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                  Ideal para quem precisa apenas dos passos fundamentais de forma rápida.
                </p>
                
                <div className="flex flex-col items-center justify-center mb-8">
                  <span className="text-slate-400 line-through text-lg mb-1">De R$ 47,90</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Por apenas</span>
                  <div className="flex items-start text-slate-900 font-extrabold">
                    <span className="text-2xl mt-2 mr-1">R$</span>
                    <span className="text-6xl">17,90</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Kit Estratégico Completo (10 Passos)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Acesso Imediato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Acesso Vitalício</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500 line-through">Sem os 9 Bônus Exclusivos de Preparação</span>
                  </li>
                </ul>

                <a href="https://pay.wiapy.com/MZOsRMejshN" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] border-b-4 border-green-700 active:border-b-0 active:translate-y-1 mb-2 whitespace-nowrap">
                  QUERO ADQUIRIR O MEU
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>
                <div className="text-center text-sm text-red-600 mt-3 leading-tight">
                  <span className="font-bold">ATENÇÃO:</span> Temos uma oferta <span className="underline font-semibold">ainda mais VANTAJOSA</span><br className="hidden md:block"/> para você! Veja logo abaixo
                </div>
              </div>
            </div>

            {/* Complete Offer */}
            <div className="bg-[rgb(253,251,247)] rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-500 flex flex-col relative transform lg:scale-105 z-10 mt-8 md:mt-0">
              <div className="absolute -right-12 top-6 bg-red-600 text-white font-bold py-1 px-12 transform rotate-45 text-xs tracking-wider shadow-md">
                RECOMENDADO
              </div>
              <div className="bg-amber-500 text-slate-900 text-center py-4 font-bold tracking-wide uppercase text-sm">
                PLANO VIP COMPLETO ⭐
              </div>
              
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                {/* Mockup da Oferta Completa (Produto + Bônus) */}
                <div className="w-full h-[400px] sm:h-96 md:h-80 my-8 md:my-6 flex items-center justify-center relative">
                  <img src="./mockup-desktop.webp" loading="lazy" alt="Pacote VIP Completo" className="w-full h-full object-contain relative z-10 filter drop-shadow-xl scale-[1.12] sm:scale-110 md:scale-110" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Kit Estratégico Completo</h3>
                <p className="text-center text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                  O arsenal completo de preparação (10 Passos + 9 Bônus) para chegar imbatível.
                </p>
                
                <div className="flex flex-col items-center justify-center mb-8">
                  <span className="text-slate-400 line-through text-lg mb-1">De R$ 147,90</span>
                  <span className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-1">Por apenas</span>
                  <div className="flex items-start text-green-600 font-extrabold">
                    <span className="text-3xl mt-2 mr-1">R$</span>
                    <span className="text-6xl">29,90</span>
                  </div>
                  <span className="text-slate-500 text-xs mt-2 font-medium">Pagamento Único. Sem Mensalidades.</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Kit Estratégico Completo (10 Passos)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Acesso Imediato & Vitalício</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Garantia Incondicional de 7 Dias</span>
                  </li>
                  <div className="pt-2 pb-1">
                    <div className="bg-amber-50 border border-amber-200 rounded px-3 py-1.5 inline-block text-amber-800 text-xs font-bold mb-1">TODOS OS 9 BÔNUS INCLUSOS:</div>
                  </div>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #1: Checklist Completo de Preparação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #2: Direitos e Deveres dos Pais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #3: Perguntas que o Juiz Pode Fazer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #4: Checklist de Documentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #5: Cronograma de Preparação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #6: Workbook de Organização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #7: Modelo de Cronologia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #8: Lista de Perguntas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">Bônus #9: Guia de Revisão Final</span>
                  </li>
                </ul>

                <a href="https://pay.wiapy.com/wd5piZIRY-ak" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-4 rounded-full shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 border-b-4 border-green-700 active:border-b-0 active:translate-y-1 mb-4 whitespace-nowrap">
                  QUERO ADQUIRIR O MEU
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Guarantee Block inside Offer Section */}
          <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col items-center gap-6 shadow-md text-center">
            <div className="flex-shrink-0 bg-blue-50 border border-blue-100 p-6 rounded-full relative">
              <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white">7</div>
              <ShieldCheck className="w-16 h-16 text-blue-600" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Sua compra é protegida pela Garantia de 7 Dias.</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Sabemos que adquirir um material pela internet pode gerar dúvidas. Por isso, o risco é todo nosso. Acesse o material, conheça o conteúdo e avalie se ele faz sentido para sua realidade.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Se por qualquer motivo entender que o Kit não atende às suas expectativas, basta solicitar o reembolso dentro de 7 dias, conforme o CDC. O valor será devolvido sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>
-e     </>
  );
}
