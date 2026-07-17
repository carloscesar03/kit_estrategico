import { useState, useEffect, lazy, Suspense } from "react";
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

const OfferSection = lazy(() => import("./components/OfferSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const AutoCarousel = lazy(() => import("./components/AutoCarousel"));

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* Top Bar - Scarcity */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold tracking-wide shadow-md z-50 relative">
        <span className="inline-block animate-pulse mr-2">⚠️</span>
        ATENÇÃO: Material de circulação restrita. Disponibilidade limitada para manter a exclusividade das estratégias.
      </div>

      {/* Hero Section */}
      <header className="bg-slate-950 text-white pt-12 pb-24 px-4 relative overflow-hidden border-b-4 border-amber-500">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-slate-900 to-slate-950"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-amber-500/30 w-fit mx-auto md:mx-0">
                <ShieldCheck className="w-4 h-4" />
                10 Passos de Preparação
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-md">
                A audiência de guarda pode ser um dos <span className="text-amber-500 relative whitespace-nowrap">
                  momentos mais importantes
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-500 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span> da sua vida como pai ou mãe.
              </h1>
              
              {/* Mockup - Mobile Only */}
              <div className="md:hidden relative w-full mt-8 mb-12">
                <div className="w-full h-80 sm:h-96 flex flex-col items-center justify-center relative overflow-visible">
                  <img src="/mockup-plano-completo.webp" fetchPriority="high" alt="Kit Estratégico para Audiência de Guarda" className="w-full h-full object-contain relative z-10 filter drop-shadow-2xl scale-[1.15]" />
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-medium">
                Saber exatamente o que falar, quais perguntas o juiz pode fazer e como organizar suas provas pode ser a diferença entre um acordo favorável e um resultado desastroso.
              </p>
              
              <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0 mt-4 md:mt-0">
                <a href="#oferta" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white text-base md:text-lg font-bold py-3 md:py-4 px-6 rounded-full shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 border-b-4 border-green-700 active:border-b-0 active:translate-y-1">
                  QUERO ME PREPARAR
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* Mockup - Desktop Only */}
            <div className="hidden md:block relative mt-12 md:mt-0 w-full">
              <div className="w-full h-[550px] flex flex-col items-center justify-center relative overflow-visible">
                <img src="/mockup-plano-completo.webp" fetchPriority="high" alt="Kit Estratégico para Audiência de Guarda" className="w-full h-full object-contain relative z-10 filter drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Agitation Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 md:p-10 rounded-r-2xl shadow-sm mb-16 relative overflow-hidden">
            <AlertTriangle className="absolute -right-4 -top-4 w-32 h-32 text-red-100/50" />
            <h2 className="text-2xl md:text-3xl font-bold text-red-900 mb-6 relative z-10">O nervosismo e a falta de organização podem colocar tudo a perder.</h2>
            <div className="space-y-4 text-red-800 text-base md:text-lg relative z-10">
              <p>Muitos pais e mães chegam à audiência apenas com a orientação técnica do advogado, mas sem saberem como <strong className="font-bold">eles próprios</strong> devem se comportar, o que esperar e como estruturar os fatos da sua história.</p>
              <p>O resultado? Esquecem detalhes cruciais na frente do juiz, respondem de forma insegura a perguntas inesperadas e deixam a outra parte dominar a narrativa.</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">A preparação faz a diferença.</h3>
            <p className="text-xl text-slate-600 mb-10">É por isso que o <strong>Kit Estratégico para Audiência de Guarda</strong> foi criado.</p>
            <a href="#oferta" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-full transition-all">
              Garantir Meu Kit Agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-slate-900 text-white relative border-t-4 border-amber-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tudo o que você precisa em um único Kit Estratégico.</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
              Você não precisa passar horas pesquisando na internet ou tentando descobrir sozinho o que fazer. Reunimos, de forma prática e organizada, as ferramentas para facilitar sua preparação.
            </p>
            <Suspense fallback={<div className="h-[600px] w-full flex items-center justify-center bg-slate-800 rounded-2xl animate-pulse"><div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <AutoCarousel />
            </Suspense>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Método Direto ao Ponto</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Sem teorias complexas. Um passo a passo claro sobre o que fazer e como se organizar antes da audiência.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center mb-4">
                <List className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Organização Total</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Checklists, cronogramas e modelos práticos para garantir que você não esqueça nenhum documento ou detalhe importante.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Foco na Prática</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Listas de perguntas que os juízes costumam fazer e comportamentos que você deve evitar na frente deles.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Mais Confiança</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Reduza a ansiedade através de uma preparação estruturada e saiba exatamente o que esperar no dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 px-4 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">O Produto Principal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você vai encontrar nos 10 Passos</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {[
              { t: "Entendendo os Tipos de Guarda e o Papel do Juiz", d: "Conceitos iniciais fundamentais para alinhar suas expectativas antes mesmo de pisar na sala." },
              { t: "Os Principais Erros", d: "Comportamentos comuns que os pais cometem na hora do nervosismo e que podem destruir toda a estratégia." },
              { t: "A Estrutura da Audiência", d: "Como funciona, quem participa e a ordem exata dos acontecimentos no dia." },
              { t: "Coleta e Triagem de Provas Fortes", d: "Como organizar prints, áudios, vídeos e documentos de forma que realmente gerem impacto." },
              { t: "A Preparação Emocional e Comportamental", d: "Técnicas práticas para manter o controle, não cair em provocações e passar credibilidade." }
            ].map((module, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-5 items-start hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{module.t}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{module.d}</p>
                </div>
              </div>
            ))}
            <div className="text-center mt-6">
              <span className="text-slate-500 font-medium italic">E mais 5 passos complementares focados em pós-audiência e dinâmicas de acordo.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 px-4 bg-slate-900 relative border-t-4 border-amber-500 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-2 block">O Arsenal Completo</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">9 Bônus Exclusivos Inclusos no Pacote VIP</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Ferramentas práticas de aplicação imediata projetadas para economizar seu tempo e acelerar sua organização.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { n: 1, t: "Checklist Completo de Preparação", d: "Lista prática com os principais pontos que devem ser revisados. Reduz drasticamente a chance de esquecer etapas.", img: "https://i.postimg.cc/d1SN8hgq/Bonus-01-Mockup-Photoroom.webp" },
              { n: 2, t: "Direitos e Deveres dos Pais", d: "Guia objetivo com responsabilidades relacionadas à guarda, facilitando a compreensão do processo.", img: "https://i.postimg.cc/qRZD8NWJ/Bonus-02-Mockup-Photoroom.webp" },
              { n: 3, t: "Perguntas que o Juiz Pode Fazer", d: "Conheça exemplos de perguntas frequentes para você chegar com as ideias mais claras.", img: "https://i.postimg.cc/V6HZjJ2s/Bonus-03-Mockup-Photoroom.webp" },
              { n: 4, t: "Checklist de Documentos", d: "Organize todos os papéis de maneira simples e lógica para levar ao seu advogado.", img: "https://i.postimg.cc/Y9yD1vTq/Bonus-04-Mockup-Photoroom.webp" },
              { n: 5, t: "Cronograma de Preparação", d: "Plano organizado para distribuir suas tarefas e evitar deixar tudo para a última hora.", img: "https://i.postimg.cc/V6HZjJ2N/Bonus-05-Mockup-Photoroom.webp" },
              { n: 6, t: "Workbook de Organização", d: "Material preenchível para estruturar seu caso e anotar acontecimentos importantes.", img: "https://i.postimg.cc/26X941g6/Bonus-06-Mockup-Photoroom.webp" },
              { n: 7, t: "Modelo de Cronologia", d: "Organize os fatos cronologicamente, facilitando as consultas e conversas legais.", img: "https://i.postimg.cc/vBS2W4CD/Bonus-07-Mockup-Photoroom.webp" },
              { n: 8, t: "Lista de Perguntas", d: "Relação estratégica de perguntas vitais para você fazer ao seu advogado nas reuniões.", img: "https://i.postimg.cc/RFbpcW2N/Bonus-08-Mockup-Photoroom.webp" },
              { n: 9, t: "Guia de Revisão Final", d: "Roteiro super rápido para revisar os principais pontos da sua preparação pouco antes da audiência.", img: "https://i.postimg.cc/qRZD8NWn/Bonus-09-Mockup-Photoroom.webp" }
            ].map((bonus, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl px-6 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14 border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                <div className="absolute -top-4 right-6 sm:right-8 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-20">BÔNUS #{bonus.n}</div>
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-xl mb-10 flex items-center justify-center border border-slate-700/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)] relative">
                  <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full"></div>
                  {bonus.img ? (
                    <img src={bonus.img} loading="lazy" alt={bonus.t} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] max-w-none object-contain z-10 drop-shadow-2xl" />
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

      {/* Offer Section */}
      <Suspense fallback={<div className="py-24 px-4 bg-slate-50 min-h-[600px] flex items-center justify-center"><div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <OfferSection />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<div className="py-20 px-4 bg-slate-900 text-white min-h-[400px] flex items-center justify-center"><div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <FAQSection />
      </Suspense>

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
