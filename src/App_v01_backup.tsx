import { useState } from 'react';
import { 
  ShieldCheck, 
  Scale, 
  AlertTriangle, 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  Gavel, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Star,
  ArrowRight
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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* Top Bar - Scarcity */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold tracking-wide shadow-md z-50 relative">
        <span className="inline-block animate-pulse mr-2">⚠️</span>
        ATENÇÃO: Material de circulação restrita. Disponibilidade limitadíssima para manter a exclusividade das estratégias.
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-20 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-medium text-sm mb-6 border border-amber-500/20">
                <Scale className="w-4 h-4" />
                Estratégias Jurídicas e Comportamentais
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                O Segredo Que Pode Definir o <span className="text-amber-500">Futuro do Seu Filho</span>: Como Sair Vitorioso na Disputa Pela Guarda.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Descubra as táticas exatas que os juízes avaliam (e que a outra parte não quer que você saiba). Transforme a incerteza e o medo em um plano de ação inabalável para proteger quem você mais ama.
              </p>

              <a href="#oferta" className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg md:text-xl font-bold py-5 px-10 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] w-full sm:w-auto text-center">
                QUERO ACESSAR O MATERIAL
                <ArrowRight className="w-6 h-6 flex-shrink-0" />
              </a>
              
              <div className="mt-8 flex flex-wrap items-center justify-start gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-400"/> Compra 100% Segura</div>
                <div className="flex items-center gap-1"><Lock className="w-4 h-4 text-green-400"/> Privacidade Garantida</div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              {/* Espaço para Mockup do Hero */}
              <div className="w-full aspect-[4/3] md:h-[500px] bg-slate-800/50 rounded-3xl border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl backdrop-blur-sm">
                <img src="https://i.postimg.cc/DZPTDv8x/Mock-Up-05-Multi-Photoroom-tiny01.png" alt="Mockup Produto Principal" className="w-full h-full object-contain relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent z-0 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Você sente que está jogando um jogo onde as regras não são claras?</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">A Dor da Incerteza</h3>
              <p className="text-slate-600 leading-relaxed">
                Você anda emocionalmente esgotado(a). O medo de perder o convívio diário com seu filho tira o seu sono. A cada nova mensagem do ex-parceiro(a), seu coração acelera.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              <Gavel className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">O Risco dos Erros Fatais</h3>
              <p className="text-slate-600 leading-relaxed">
                Muitos pais perdem a guarda não por falta de amor, mas por <strong className="text-slate-900">despreparo emocional e tático</strong>. Uma mensagem de WhatsApp respondida com raiva pode ser a prova que destrói o seu caso.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center shadow-xl">
            <p className="text-xl font-medium leading-relaxed">
              A verdade é dura: no tribunal, o amor pelo seu filho não é suficiente. <span className="text-amber-400">Você precisa de provas, postura e estratégia.</span> O juiz não conhece a sua história; ele conhece os fatos que são apresentados a ele.
            </p>
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

      {/* Cost of Inaction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Qual é o verdadeiro preço de <span className="text-red-600">não agir agora?</span></h2>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Ver seu filho crescer de longe</h4>
                    <p className="text-slate-600 leading-relaxed">Perder os momentos diários, as histórias antes de dormir e se tornar apenas o pai ou mãe de "finais de semana alternados".</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Alienação Parental Silenciosa</h4>
                    <p className="text-slate-600 leading-relaxed">A outra parte ter tempo de sobra para moldar a cabeça da criança contra você, sem que você possa intervir ou se defender no dia a dia.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Decisões Judiciais Irreversíveis</h4>
                    <p className="text-slate-600 leading-relaxed">Uma vez que a guarda é estabelecida desfavoravelmente, reverter a decisão leva anos de processos dolorosos, rios de dinheiro e um desgaste emocional devastador para a criança.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-10 rounded-3xl border border-red-100 shadow-xl relative">
              <div className="text-red-200 absolute top-4 left-4 text-6xl font-serif">"</div>
              <p className="text-2xl font-bold text-red-900 text-center leading-relaxed relative z-10 mt-4">
                O maior arrependimento de pais e mães que perdem a guarda é não terem se preparado estrategicamente antes que fosse tarde demais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Custódia Infantil não precisa ser um pesadelo.</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            Apresentamos o manual definitivo: <strong className="text-slate-900">"Custódia Infantil: Como Sair Vitorioso(a)"</strong>. Um guia passo a passo, escrito em linguagem simples e de fácil entendimento, criado exclusivamente para pais que se recusam a perder a batalha mais importante de suas vidas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conhecimento Raro</h3>
              <p className="text-slate-600">Estratégias comportamentais que advogados cobram milhares de reais para orientar em consultas fechadas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blindagem Emocional</h3>
              <p className="text-slate-600">Aprenda a não cair nas armadilhas manipulativas da outra parte e a manter a postura impecável que os juízes exigem.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ações Práticas</h3>
              <p className="text-slate-600">Saiba exatamente quais provas recolher, como organizar suas evidências e como se portar em audiências.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anonymous Author Section */}
      <section className="py-24 px-4 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden relative border-4 border-amber-500">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
              <Lock className="w-20 h-20 text-slate-700" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quem sou eu e por que escondo meu rosto?</h2>
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
      </section>

      {/* Sneak Peek / Modules */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Veja um pouco do que você vai dominar:</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg">Um arsenal completo distribuído em 10 capítulos estratégicos.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Entendendo a Custódia: Os critérios reais que definem a guarda.",
              "Preparação Emocional: Como blindar sua mente contra provocações.",
              "Preparação para o Tribunal: O passo a passo para reunir provas inquestionáveis.",
              "Lidando com a Outra Parte: Como desarmar acusações falsas e manipulações.",
              "A Visão do Juiz: Aprenda a pensar como quem vai decidir o seu futuro.",
              "Estratégias de Vitória: Construindo o plano de custódia perfeito.",
              "Evitando Armadilhas: Os erros fatais nas redes sociais e no WhatsApp.",
              "Advogados e Mediação: Como extrair o máximo da sua equipe legal.",
              "Protegendo as Crianças: O escudo emocional para os seus filhos.",
              "O Pós-Veredito: Como manter seu histórico impecável após a decisão."
            ].map((module, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="font-medium text-slate-800 self-center">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pais e mães que viraram o jogo e venceram</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">Casos reais (com nomes preservados) de quem aplicou as estratégias e salvou o convívio com os filhos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 text-6xl text-amber-200 font-serif">"</div>
              <div className="flex text-amber-500 mb-4">
                <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">"Meu ex estava usando a alienação parental de forma muito sutil, o juiz não via. O guia me ensinou exatamente como documentar e apresentar as provas sem parecer desesperada ou agressiva. Consegui a guarda compartilhada com residência fixa comigo. Salvou minha vida."</p>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="font-bold text-slate-900">— Mariana S.</p>
                <p className="text-sm text-slate-500">Mãe de 2 filhos</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 text-6xl text-amber-200 font-serif">"</div>
              <div className="flex text-amber-500 mb-4">
                <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">"Eu achava que a Justiça daria automaticamente a guarda para a mãe, que vinha dificultando minhas visitas. Apliquei as técnicas de postura em audiência e blindagem emocional do capítulo 7. O juiz compreendeu a situação e me deu muito mais tempo com minha filha."</p>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="font-bold text-slate-900">— Rodrigo M.</p>
                <p className="text-sm text-slate-500">Pai de 1 menina</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 text-6xl text-amber-200 font-serif">"</div>
              <div className="flex text-amber-500 mb-4">
                <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">"O custo desse material não é nada comparado ao que eu ia gastar com honorários sem saber o que estava fazendo. Os bônus de como se portar e o que o juiz pergunta valem ouro puro. Me deu a confiança que eu precisava. Recomendo para qualquer um na mesma situação."</p>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="font-bold text-slate-900">— Carlos E.</p>
                <p className="text-sm text-slate-500">Pai de 2 meninos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-2 block">Acesso Imediato</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Você ainda receberá 3 Bônus Exclusivos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Materiais complementares desenvolvidos para acelerar sua preparação e garantir que nenhum detalhe passe despercebido.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="absolute -top-4 right-8 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">BÔNUS 01</div>
              {/* Espaço para Mockup do Bônus 1 */}
              <div className="w-full h-48 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center border border-slate-600 overflow-hidden relative">
                <img src="https://i.postimg.cc/ZKMhXD54/Mkup-Checklist.png" alt="Mockup Bônus 1" className="w-full h-full object-contain relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Checklist Completo de Preparação</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                Documentação detalhada em formato de checklist de forma simples e de fácil entendimento. Saiba exatamente o que levar e como organizar suas provas sem esquecer nada.
              </p>
              <div className="mt-auto">
                <div className="text-gray-500 line-through text-sm">De R$ 47,00</div>
                <div className="text-green-400 font-bold">Hoje: GRÁTIS</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="absolute -top-4 right-8 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">BÔNUS 02</div>
              {/* Espaço para Mockup do Bônus 2 */}
              <div className="w-full h-48 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center border border-slate-600 overflow-hidden relative">
                <img src="https://i.postimg.cc/bvQcDy05/Mkup-Direitos-e-Deveres.png" alt="Mockup Bônus 2" className="w-full h-full object-contain relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Direitos e Deveres dos Pais</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                Informações úteis e práticas para entender melhor as leis que regem a relação entre pais e filhos. Saiba como cumprir suas obrigações e exercer plenamente seus direitos legais.
              </p>
              <div className="mt-auto">
                <div className="text-gray-500 line-through text-sm">De R$ 67,00</div>
                <div className="text-green-400 font-bold">Hoje: GRÁTIS</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="absolute -top-4 right-8 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">BÔNUS 03</div>
              {/* Espaço para Mockup do Bônus 3 */}
              <div className="w-full h-48 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center border border-slate-600 overflow-hidden relative">
                <img src="https://i.postimg.cc/rmM65BQg/Mkup-Perguntas.png" alt="Mockup Bônus 3" className="w-full h-full object-contain relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Perguntas que o Juiz PODE fazer</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                Guia prático criado para ajudar você a se preparar para as possíveis perguntas que podem surgir no tribunal. Chegue na audiência com respostas seguras e fundamentadas.
              </p>
              <div className="mt-auto">
                <div className="text-gray-500 line-through text-sm">De R$ 97,00</div>
                <div className="text-green-400 font-bold">Hoje: GRÁTIS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer / Pricing Section */}
      <section id="oferta" className="py-24 px-4 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha o seu plano de ação:</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Basic Offer */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-slate-100 text-slate-600 text-center py-4 font-bold tracking-wide uppercase text-sm border-b border-slate-200">
                Acesso Essencial
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Espaço para Mockup da Oferta Básica */}
                <div className="w-full h-56 bg-slate-100 rounded-xl mb-6 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                  <img src="https://i.postimg.cc/DZPTDv8x/Mock-Up-05-Multi-Photoroom-tiny01.png" alt="Mockup Produto Principal" className="w-full h-full object-contain relative z-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Oferta Básica</h3>
                <p className="text-center text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                  Ideal para quem precisa do guia principal de forma rápida.
                </p>
                
                <div className="flex flex-col items-center justify-center mb-8">
                  <span className="text-slate-400 line-through text-lg mb-1">De R$ 97,00</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Por apenas</span>
                  <div className="flex items-start text-slate-900 font-extrabold">
                    <span className="text-2xl mt-2 mr-1">R$</span>
                    <span className="text-6xl">19,00</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Guia: Custódia Infantil Estratégica (PDF)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Acesso Imediato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Acesso Vitalício ao Material</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500 line-through">Checklist Completo de Preparação</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500 line-through">Guia: Direitos e Deveres dos Pais</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500 line-through">Guia: Perguntas que o Juiz PODE fazer</span>
                  </li>
                </ul>

                <button className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 mb-4">
                  COMPRAR PACOTE BÁSICO
                </button>
              </div>
            </div>

            {/* Complete Offer */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-500 flex flex-col relative transform scale-105 z-10">
              <div className="absolute -right-12 top-6 bg-red-600 text-white font-bold py-1 px-12 transform rotate-45 text-xs tracking-wider shadow-md">
                RECOMENDADO
              </div>
              <div className="bg-amber-500 text-slate-900 text-center py-4 font-bold tracking-wide uppercase text-sm">
                A OPORTUNIDADE COMPLETA
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Espaço para Mockup da Oferta Completa (Produto + Bônus) */}
                <div className="w-full h-56 bg-amber-50/50 rounded-xl mb-6 flex items-center justify-center border border-amber-100 overflow-hidden relative">
                  <img src="https://i.postimg.cc/DZPTDv8x/Mock-Up-05-Multi-Photoroom-tiny01.png" alt="Mockup Pacote Completo" className="w-full h-full object-contain relative z-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Oferta Completa + VIP</h3>
                <p className="text-center text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                  O arsenal completo com todos os bônus aceleradores.
                </p>
                
                <div className="flex flex-col items-center justify-center mb-8">
                  <span className="text-slate-400 line-through text-lg mb-1">De R$ 308,00</span>
                  <span className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-1">Por apenas</span>
                  <div className="flex items-start text-green-600 font-extrabold">
                    <span className="text-3xl mt-2 mr-1">R$</span>
                    <span className="text-6xl">29,00</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Guia: Custódia Infantil Estratégica (PDF)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Acesso Imediato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Acesso Vitalício ao Material</span>
                  </li>
                  <div className="pt-2 pb-2">
                    <div className="bg-amber-50 rounded px-3 py-1 inline-block text-amber-800 text-xs font-bold mb-2">BÔNUS INCLUSOS:</div>
                  </div>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900 font-semibold">Checklist Completo de Preparação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900 font-semibold">Guia: Direitos e Deveres dos Pais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900 font-semibold">Guia: Perguntas que o Juiz PODE fazer</span>
                  </li>
                </ul>

                <button className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xl font-bold py-5 px-6 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all duration-300 hover:scale-105 mb-4">
                  COMPRAR PACOTE VIP
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
          </div>
          
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-blue-600" />
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Garantia Incondicional de 7 Dias</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Você não tem absolutamente nada a perder. Adquira qualquer um dos pacotes hoje. Se por qualquer motivo você não ficar satisfeito com o material nas primeiras 7 dias, basta enviar um único e-mail e devolveremos 100% do seu dinheiro. O risco é todo meu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="Eu não tenho experiência com termos legais. Vou conseguir entender?" 
              answer="Com certeza. O guia foi escrito com uma linguagem simples, direta e livre de jargões jurídicos complicados. O foco é prático: o que você precisa fazer e como se comportar." 
            />
            <FAQItem 
              question="Mas meu caso é muito diferente e complexo. O material vai me ajudar?" 
              answer="O material aborda os princípios universais que guiam as decisões dos juízes em varas de família. As estratégias comportamentais, de organização de provas e de blindagem emocional se aplicam a qualquer caso, seja simples ou altamente litigioso." 
            />
            <FAQItem 
              question="Como receberei a minha compra?" 
              answer="Logo após a confirmação do pagamento, você receberá um e-mail com o link exclusivo para baixar o E-book e todos os 3 bônus diretamente no seu celular, tablet ou computador." 
            />
            <FAQItem 
              question="Posso acessar o material em qualquer dispositivo?" 
              answer="Sim! Os arquivos estão em formato PDF universal, garantindo que você possa ler no seu smartphone, computador, tablet ou até mesmo imprimir, se preferir." 
            />
            <FAQItem 
              question="E se eu não receber o material no meu e-mail?" 
              answer="Caso haja qualquer instabilidade no envio automático, nossa equipe de suporte estará pronta para enviar o material manualmente. Basta responder ao e-mail de compra ou entrar em contato através dos nossos canais de atendimento." 
            />
          </div>
        </div>
      </section>

      {/* Bottom Floating CTA (Mobile only) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur border-t border-slate-200 md:hidden z-50">
        <a href="#oferta" className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg animate-bounce">
          GARANTIR ACESSO AGORA
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 text-center text-sm pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 leading-relaxed text-xs">
            Aviso Legal: As informações contidas neste e-book são apenas para fins educacionais e estratégicos. O autor não está envolvido na prestação de aconselhamento jurídico, médico ou profissional específico. Este e-book não substitui os serviços de um advogado credenciado. Sempre consulte um profissional de direito qualificado para o seu caso específico.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>
          <p>© {new Date().getFullYear()} Custódia Infantil Estratégica. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs opacity-50">Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira.</p>
        </div>
      </footer>
    </div>
  );
}
