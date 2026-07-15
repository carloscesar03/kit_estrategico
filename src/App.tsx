import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Scale, 
  AlertTriangle, 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  Gavel, 
  ChevronDown, 
  ChevronUp, 
  Star,
  ArrowRight,
  List,
  Calendar,
  HelpCircle,
  Target
} from 'lucide-react';

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/50 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-100">{question}</span>
        {isOpen ? <ChevronUp className="text-amber-500 flex-shrink-0 ml-4" /> : <ChevronDown className="text-amber-500 flex-shrink-0 ml-4" />}
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-300 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://i.postimg.cc/3Jystd0y/b01-pag-7.png",
    "https://i.postimg.cc/4NKDWmHm/b04-pag-6.png",
    "https://i.postimg.cc/c4VV20fx/kit-pag-105.png",
    "https://i.postimg.cc/3Jystd04/b05-pag-4.png",
    "https://i.postimg.cc/pXgg4RKX/resumo-passo-7.png",
    "https://i.postimg.cc/bNG7msSZ/b06-pag-7.png",
    "https://i.postimg.cc/4Nrrqsp4/resumo-passo-9.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[calc(100%+2rem)] -mx-4 md:w-full md:max-w-4xl md:mx-auto overflow-hidden md:rounded-2xl relative md:shadow-lg bg-white/50">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img 
              src={img} 
              alt={`Exemplo do Kit ${idx + 1}`} 
              className="w-full h-auto object-contain max-h-[70vh] md:max-h-[600px]" 
            />
          </div>
        ))}
      </div>
      
      {/* Pagination indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* Top Bar - Scarcity */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold tracking-wide shadow-md z-50 relative">
        <span className="inline-block animate-pulse mr-2">⚠️</span>
        ATENÇÃO: Material de circulação restrita. Disponibilidade limitadíssima para manter a exclusividade das estratégias.
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="flex flex-col">
              <div className="inline-flex items-center self-start gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-medium text-sm mb-6 border border-amber-500/20">
                <Gavel className="w-4 h-4" />
                Kit Estratégico de Preparação
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                A audiência de guarda pode ser um dos <span className="text-amber-500">momentos mais importantes</span> da sua vida como pai ou mãe.
              </h1>
              
              {/* Mockup - Mobile Only */}
              <div className="md:hidden relative w-full mt-8 mb-12">
                <div className="w-full h-80 sm:h-96 flex flex-col items-center justify-center relative overflow-visible">
                  <img src="https://i.postimg.cc/hGQbmJD6/Mockup-Plano-Completo-squoosh.webp" alt="Kit Estratégico para Audiência de Guarda" className="w-full h-full object-contain relative z-10 filter drop-shadow-2xl scale-[1.15]" />
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Siga o Kit Estratégico de Preparação, um método organizado em 10 passos simples, sem linguagem jurídica complicada, para preparar seu caso com mais segurança, organizar tudo o que realmente importa e chegar à audiência com a tranquilidade de quem fez o melhor que podia pelo seu filho.
              </p>

              <a href="#oferta" className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-6 rounded-full shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center border-b-4 border-green-700 active:border-b-0 active:translate-y-1 whitespace-nowrap">
                QUERO ADQUIRIR O MEU
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
              
              <div className="mt-8 flex flex-wrap items-center justify-start gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-400"/> Compra 100% Segura</div>
                <div className="flex items-center gap-1"><Lock className="w-4 h-4 text-green-400"/> Acesso Imediato</div>
              </div>
            </div>

            {/* Mockup - Desktop Only */}
            <div className="hidden md:block relative mt-12 md:mt-0 w-full">
              <div className="w-full h-[550px] flex flex-col items-center justify-center relative overflow-visible">
                <img src="https://i.postimg.cc/hGQbmJD6/Mockup-Plano-Completo-squoosh.webp" alt="Kit Estratégico para Audiência de Guarda" className="w-full h-full object-contain relative z-10 filter drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Enemy Section */}
      <section className="py-20 px-4 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-500 tracking-tight">O sistema NÃO está do seu lado. E a outra parte sabe disso.</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            A verdade que advogados não te contam abertamente é que a Justiça de Família é sobrecarregada, fria e, muitas vezes, tendenciosa. O juiz não tem tempo para analisar quem ama mais a criança. Ele analisa provas, postura e frieza emocional.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Enquanto você tenta jogar limpo, a outra parte pode estar usando táticas manipulativas, plantando provas distorcidas e criando uma narrativa onde você é o vilão. <strong className="text-amber-400 font-bold">Você está lutando com o coração, enquanto eles estão lutando com estratégia.</strong> É hora de nivelar o jogo.
          </p>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 tracking-tight">
            A audiência dura algumas horas. <span className="text-red-600">As consequências duram uma vida.</span>
          </h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-left shadow-lg relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-10 opacity-50"></div>
            <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Quando a audiência é marcada, muita gente acredita que o maior problema é enfrentar o juiz. Mas o maior medo aparece quando você pensa no que realmente está em jogo:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold text-sm">?</span>
                </div>
                <p className="text-slate-700 font-medium">E se, por falta de organização, eu deixar de apresentar uma informação vital?</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold text-sm">?</span>
                </div>
                <p className="text-slate-700 font-medium">E se eu esquecer um documento que poderia ajudar meu advogado?</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold text-sm">?</span>
                </div>
                <p className="text-slate-700 font-medium">E se eu chegar despreparado no momento em que mais preciso demonstrar responsabilidade?</p>
              </li>
            </ul>

            <div className="bg-slate-900 text-white p-6 rounded-2xl">
              <p className="font-medium leading-relaxed">
                Ninguém está preocupado apenas com uma audiência. O que pesa no coração é <strong className="text-amber-400">imaginar a possibilidade de ver o próprio filho crescer mais distante.</strong> Pensar que aniversários, datas especiais e o convívio diário nunca mais voltarão. O tempo com um filho não pode ser recuperado. É por isso que tanta gente se arrepende da preparação que deixou de fazer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Inaction Section */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 leading-tight text-center">Você não pode controlar o processo todo. <span className="text-amber-600">Mas pode controlar seu preparo.</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                    <ShieldCheck className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Transforme ansiedade em ação</h4>
                    <p className="text-slate-600 leading-relaxed">Em vez de enfrentar esse momento no improviso, você terá um método claro para organizar documentos e estruturar fatos.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                    <Scale className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Decisões Judiciais Irreversíveis</h4>
                    <p className="text-slate-600 leading-relaxed">Uma vez que a guarda é estabelecida desfavoravelmente, reverter a decisão leva anos de processos dolorosos. Prepare-se hoje.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-10 rounded-3xl border border-amber-200 shadow-xl relative text-center">
              <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <p className="text-xl font-bold text-slate-900 leading-relaxed relative z-10 mb-6">
                O Kit Estratégico foi criado justamente para você chegar à audiência sabendo que fez tudo o que podia da melhor maneira possível.
              </p>
              <a href="#oferta" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-6 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] border-b-4 border-green-700 active:border-b-0 active:translate-y-1 hover:scale-105 whitespace-nowrap">
                QUERO ADQUIRIR O MEU
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Breakdown */}
      <section className="py-20 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tudo o que você precisa em um único Kit Estratégico.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              Você não precisa passar horas pesquisando na internet ou tentando descobrir sozinho o que fazer. Reunimos, de forma prática e organizada, as ferramentas para facilitar sua preparação.
            </p>
            <AutoCarousel />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <BookOpen className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Guia Principal</h3>
              <p className="text-sm text-slate-600">Manual completo que explica como funciona a preparação, as etapas do processo e como evitar erros comuns.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <List className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Checklists Práticos</h3>
              <p className="text-sm text-slate-600">Listas exatas de preparação e organização de documentos para evitar qualquer esquecimento no dia D.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <Calendar className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Cronogramas</h3>
              <p className="text-sm text-slate-600">Planejamento simples para organizar cada etapa e montar a linha do tempo cronológica do seu caso.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <HelpCircle className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Guias e Perguntas</h3>
              <p className="text-sm text-slate-600">O que perguntar ao seu advogado e material de revisão rápida para consultar pouco antes da audiência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Muito mais que um material: Clareza e Confiança</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">A maior ansiedade vem da sensação de não saber se você está preparado. O Kit transforma essa insegurança em um plano claro de ação.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Organize seu caso com facilidade</h4>
                <p className="text-gray-400">Reúna documentos, registros e informações de forma estruturada, evitando deixar detalhes relevantes de fora.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Colabore eficientemente com seu advogado</h4>
                <p className="text-gray-400">Chegue às reuniões com a cronologia dos acontecimentos e dúvidas bem definidas, tornando a comunicação muito produtiva.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Evite erros comprometedores</h4>
                <p className="text-gray-400">Conheça comportamentos, descuidos e falhas de organização que costumam dificultar o caso e aprenda a evitá-los.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Reduza a ansiedade</h4>
                <p className="text-gray-400">Quando existe um plano, a insegurança diminui. Você sabe o que precisa fazer e consegue enfrentar o momento com tranquilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA Urgency */}
      <section className="py-16 px-4 bg-amber-500 text-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">Sua audiência vai acontecer, esteja você preparado(a) ou não.</h2>
          <p className="text-lg font-medium mb-8 max-w-2xl mx-auto">
            Cada dia que passa é um dia a menos para organizar documentos, revisar informações e conversar com seu advogado de forma estruturada. Não espere a ansiedade dominar. Comece hoje.
          </p>
          <a href="#oferta" className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-6 rounded-full shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 border-b-4 border-green-700 active:border-b-0 active:translate-y-1 whitespace-nowrap w-full sm:w-auto">
            QUERO ADQUIRIR O MEU
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">O Kit Estratégico é ideal para você que...</h2>
          
          <div className="space-y-4">
            {[
              "Quer chegar à audiência sabendo exatamente como se preparar, com um roteiro claro e sem insegurança.",
              "Deseja colaborar de forma mais organizada e produtiva com seu advogado.",
              "Tem medo de esquecer algum documento importante no dia da audiência e quer revisar cada detalhe.",
              "Nunca participou de uma audiência de guarda e quer entender, de forma simples, o que esperar do processo.",
              "Quer reduzir a ansiedade causada pela falta de organização e evitar improvisos arriscados.",
              "Deseja fazer tudo o que estiver ao seu alcance para proteger os interesses do seu filho de forma responsável."
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl flex items-center gap-4 border border-slate-200">
                <Target className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <p className="text-lg font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">O Produto Principal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você vai encontrar nos 10 Passos</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">O material central do treinamento é um kit estratégico em 10 passos em linguagem simples, super fácil de entender e executar, sem complicações jurídicas.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Entendendo a Guarda dos Filhos", d: "Conceitos fundamentais e modelos de guarda de forma simples e direta." },
              { t: "Preparação Emocional", d: "Estratégias vitais para controlar a ansiedade e manter uma postura equilibrada." },
              { t: "Como se Preparar para a Audiência", d: "Aprenda a organizar informações, documentos e registros cruciais." },
              { t: "Lidando com a Outra Parte", d: "Atitudes para evitar conflitos desnecessários e preservar uma postura adequada." },
              { t: "Como os Casos São Analisados", d: "Os critérios normalmente considerados pelo juiz durante a análise da disputa." },
              { t: "Organização Estratégica do Caso", d: "Uma forma prática de estruturar fatos para facilitar a comunicação com o advogado." },
              { t: "Erros que Devem Ser Evitados", d: "Os comportamentos e falhas de preparação que podem gerar dificuldades no processo." },
              { t: "Comunicação com seu Advogado", d: "Saiba como reunir informações relevantes e fazer as perguntas certas nas reuniões." },
              { t: "Bem-Estar dos Filhos Durante o Processo", d: "Boas práticas para proteger emocionalmente as crianças enquanto a disputa acontece." },
              { t: "Depois da Audiência", d: "Como manter sua organização após a decisão e os cuidados que continuam importantes." }
            ].map((module, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{module.t}</h4>
                  <p className="text-sm text-slate-600">{module.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Bonuses Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-2 block">O Arsenal Completo</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">9 Bônus Exclusivos Inclusos no Pacote VIP</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Ferramentas práticas desenvolvidas para economizar seu tempo, estruturar perfeitamente seu caso e te colocar anos-luz à frente na preparação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: 1, t: "Checklist Completo de Preparação", d: "Tenha uma lista prática com os principais pontos que devem ser revisados antes da audiência. Reduz drasticamente a chance de esquecer etapas importantes.", img: "https://i.postimg.cc/d1SN8hgq/Bonus-01-Mockup-Photoroom.webp" },
              { n: 2, t: "Direitos e Deveres dos Pais", d: "Guia objetivo com os principais direitos e responsabilidades relacionados à guarda dos filhos, facilitando a compreensão dos aspectos cruciais do processo.", img: "https://i.postimg.cc/qRZD8NWJ/Bonus-02-Mockup-Photoroom.webp" },
              { n: 3, t: "Perguntas que o Juiz Pode Fazer", d: "Conheça exemplos de perguntas frequentemente realizadas em audiências de guarda e utilize esse material para se preparar com mais confiança e naturalidade.", img: "https://i.postimg.cc/V6HZjJ2s/Bonus-03-Mockup-Photoroom.webp" },
              { n: 4, t: "Checklist de Documentos", d: "Organize seus documentos de maneira simples e lógica para análise junto ao seu advogado.", img: "https://i.postimg.cc/Y9yD1vTq/Bonus-04-Mockup-Photoroom.webp" },
              { n: 5, t: "Cronograma de Preparação", d: "Um plano organizado para distribuir sua preparação e evitar deixar tudo para a última hora.", img: "https://i.postimg.cc/V6HZjJ2N/Bonus-05-Mockup-Photoroom.webp" },
              { n: 6, t: "Workbook de Organização", d: "Material preenchível para estruturar seu caso e registrar acontecimentos importantes.", img: "https://i.postimg.cc/26X941g6/Bonus-06-Mockup-Photoroom.webp" },
              { n: 7, t: "Modelo de Cronologia", d: "Organize os fatos cronologicamente, facilitando as consultas e conversas legais.", img: "https://i.postimg.cc/vBS2W4CD/Bonus-07-Mockup-Photoroom.webp" },
              { n: 8, t: "Lista de Perguntas", d: "Relação estratégica de perguntas vitais para você fazer ao seu advogado nas reuniões.", img: "https://i.postimg.cc/RFbpcW2N/Bonus-08-Mockup-Photoroom.webp" },
              { n: 9, t: "Guia de Revisão Final", d: "Roteiro super rápido para revisar os principais pontos da sua preparação pouco antes da audiência.", img: "https://i.postimg.cc/qRZD8NWn/Bonus-09-Mockup-Photoroom.webp" }
            ].map((bonus, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                <div className="absolute -top-4 right-8 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">BÔNUS #{bonus.n}</div>
                <div className="w-full h-48 bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)] relative">
                  <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full"></div>
                  {bonus.img ? (
                    <img src={bonus.img} alt={bonus.t} className="w-full h-full object-contain relative z-10 scale-[1.25] drop-shadow-2xl" />
                  ) : (
                    <span className="text-slate-500 text-sm font-medium">Espaço para Mockup</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-amber-400">{bonus.t}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {bonus.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anonymous Author Section */}
      <section className="py-24 px-4 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Quem sou eu e por que escondo meu rosto?</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden relative border-4 border-amber-500">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
                <Lock className="w-20 h-20 text-slate-700" />
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Eu não sou um advogado querendo te cobrar honorários absurdos. <strong className="text-white font-bold">Sou um pai como você.</strong> Alguém que esteve no fundo do poço, prestes a perder o convívio com o próprio filho para um sistema que quase sempre parece jogar contra nós.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Eu me recusei a aceitar esse destino. Passei noites em claro dissecando centenas de casos na internet, padrões judiciais e brechas comportamentais. O resultado? <strong className="text-amber-400 font-bold">Consegui a guarda unilateral e emergencial do meu filho.</strong> A virada de jogo foi tão forte que o próprio juiz determinou que a mãe fosse obrigada a realizar sessões compulsórias com profissionais de psicologia.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              O que eu coloquei neste manual não é teoria jurídica inútil; é o mapa prático e implacável de quem venceu uma batalha considerada impossível. Prefiro manter minha identidade oculta para proteger meu filho e minha vitória, mas decidi entregar essa <strong className="text-white font-bold border-b border-amber-500 pb-1">vantagem definitiva</strong> nas suas mãos. Se você quer parar de ser vítima da situação e ter a certeza de que está fazendo tudo o que é possível para vencer, o caminho está aqui.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Offer / Pricing Section */}
      <section id="oferta" className="py-24 px-4 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha a opção que faz mais sentido para você:</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600">Ambas garantem acesso imediato, porém apenas o VIP entrega a preparação completa (10 Passos + 9 Bônus).</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Basic Offer */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-slate-100 text-slate-600 text-center py-4 font-bold tracking-wide uppercase text-sm border-b border-slate-200">
                PLANO BÁSICO
              </div>
              
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                {/* Mockup da Oferta Básica */}
                <div className="w-full h-64 md:h-56 bg-slate-100 rounded-xl mb-6 flex items-center justify-center border border-slate-200 overflow-visible relative">
                  <img src="https://i.postimg.cc/FKkgSfrn/Mockup-Plano-Basico-squoosh.webp" alt="Kit Estratégico Básico" className="w-full h-full object-contain relative z-10 scale-110 md:scale-100" />
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

                <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] border-b-4 border-green-700 active:border-b-0 active:translate-y-1 mb-2 whitespace-nowrap">
                  QUERO ADQUIRIR O MEU
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </button>
                <div className="text-center text-sm text-red-600 mt-3 leading-tight">
                  <span className="font-bold">ATENÇÃO:</span> Temos uma oferta <span className="underline font-semibold">ainda mais VANTAJOSA</span><br className="hidden md:block"/> para você! Veja logo abaixo
                </div>
              </div>
            </div>

            {/* Complete Offer */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-500 flex flex-col relative transform scale-105 z-10">
              <div className="absolute -right-12 top-6 bg-red-600 text-white font-bold py-1 px-12 transform rotate-45 text-xs tracking-wider shadow-md">
                RECOMENDADO
              </div>
              <div className="bg-amber-500 text-slate-900 text-center py-4 font-bold tracking-wide uppercase text-sm">
                PLANO VIP COMPLETO ⭐
              </div>
              
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                {/* Mockup da Oferta Completa (Produto + Bônus) */}
                <div className="w-full h-64 md:h-56 bg-amber-50/50 rounded-xl mb-6 flex items-center justify-center border border-amber-100 overflow-visible relative">
                  <img src="https://i.postimg.cc/hGQbmJD6/Mockup-Plano-Completo-squoosh.webp" alt="Pacote VIP Completo" className="w-full h-full object-contain relative z-10 filter drop-shadow-xl scale-110 md:scale-100" />
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

                <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-4 rounded-full shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 border-b-4 border-green-700 active:border-b-0 active:translate-y-1 mb-4 whitespace-nowrap">
                  QUERO ADQUIRIR O MEU
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </button>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ainda tem alguma dúvida?</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400">Reunimos abaixo as perguntas mais frequentes para que você possa comprar com total tranquilidade.</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-2">
            <FAQItem 
              question="1. Este material substitui um advogado?" 
              answer="Não. O Kit Estratégico para Audiência de Guarda é um material educativo voltado à preparação e organização. Ele foi desenvolvido para complementar o trabalho do seu advogado, ajudando você a compreender melhor o processo e a organizar as informações do seu caso." 
            />
            <FAQItem 
              question="2. O Kit serve para qualquer processo de guarda?" 
              answer="O conteúdo foi elaborado para auxiliar pais e mães que estão se preparando para audiências relacionadas à guarda dos filhos. Como cada processo possui características próprias, o material deve ser utilizado como apoio, sempre em conjunto com a orientação do seu advogado." 
            />
            <FAQItem 
              question="3. Nunca participei de uma audiência. Este material é indicado para mim?" 
              answer="Sim. O conteúdo foi escrito em linguagem simples, pensado especialmente para quem nunca passou por uma audiência de guarda e deseja entender melhor como se preparar." 
            />
            <FAQItem 
              question="4. Como receberei o acesso ao Kit?" 
              answer="Logo após a confirmação do pagamento, você receberá as instruções de acesso por e-mail e poderá começar seus estudos imediatamente." 
            />
            <FAQItem 
              question="5. O acesso tem prazo para expirar?" 
              answer="Não. O acesso é vitalício, permitindo que você consulte o material sempre que precisar durante sua preparação." 
            />
            <FAQItem 
              question="6. Em quanto tempo consigo estudar todo o conteúdo?" 
              answer="O material foi desenvolvido para uma leitura prática e objetiva. Você pode estudar no seu próprio ritmo e revisar apenas os passos que considerar mais importantes para o seu momento." 
            />
            <FAQItem 
              question="7. Posso acessar pelo celular?" 
              answer="Sim. O conteúdo pode ser acessado por celular, tablet, notebook ou computador, oferecendo praticidade para estudar onde e quando preferir." 
            />
            <FAQItem 
              question="8. Quais formas de pagamento são aceitas?" 
              answer="Você poderá realizar o pagamento utilizando os meios disponibilizados na plataforma, como cartão de crédito, PIX e outras opções seguras disponíveis no momento da compra." 
            />
            <FAQItem 
              question="9. Como funciona a garantia de 7 dias?" 
              answer="Você terá 7 dias a partir da compra para conhecer o material. Caso não atenda às suas expectativas, poderá solicitar o reembolso integral dentro desse período, de forma simples e sem burocracia." 
            />
            <FAQItem 
              question="10. O Kit garante um resultado favorável na audiência?" 
              answer="Não. Nenhum material sério pode garantir uma decisão judicial. O objetivo do Kit é ajudar você a se preparar de forma organizada, evitar erros de preparação e colaborar com seu advogado de maneira mais eficiente." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 text-center text-sm border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-left md:text-center space-y-4">
            <h5 className="font-bold text-white text-lg">Kit Estratégico para Audiência de Guarda</h5>
            <p className="leading-relaxed text-xs">
              O Kit Estratégico para Audiência de Guarda foi desenvolvido com o objetivo de oferecer informações educativas e orientação prática para auxiliar pais e mães na organização e preparação para audiências relacionadas à guarda dos filhos.
            </p>
            <p className="leading-relaxed text-xs">
              O conteúdo disponibilizado possui caráter exclusivamente informativo e educacional, não substituindo a atuação de advogado, consultoria jurídica individualizada ou qualquer orientação específica para casos concretos. Cada processo judicial possui características próprias e deve ser conduzido com o acompanhamento de um profissional habilitado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12 border-y border-slate-800 py-8">
            <div>
              <h6 className="font-bold text-white mb-3 flex items-center gap-2"><HelpCircle className="w-4 h-4"/> Atendimento</h6>
              <p className="text-xs">Caso tenha qualquer dúvida sobre seu acesso, pagamento ou utilização da plataforma, nossa equipe de suporte estará à disposição para ajudá-lo.</p>
            </div>
            <div>
              <h6 className="font-bold text-white mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Compra Segura</h6>
              <ul className="text-xs space-y-1 list-disc list-inside ml-4">
                <li>Acesso imediato após confirmação</li>
                <li>Ambiente protegido</li>
                <li>Garantia de 7 dias</li>
                <li>Acesso vitalício</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Aviso Legal</h6>
              <p className="text-xs">Informações educativas. Não constituem parecer legal ou promessa de resultado. O uso não estabelece relação advogado-cliente.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-medium">
            <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>

          <p className="text-xs mb-2">Todos os direitos sobre a obra "Kit Estratégico para Audiência de Guarda" são reservados nos termos da Lei nº 9.610/98.</p>
          <p className="text-xs opacity-50">Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira.</p>
        </div>
      </footer>
    </div>
  );
}
