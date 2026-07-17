import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

export default function FAQSection() {
  return (
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
  );
}
