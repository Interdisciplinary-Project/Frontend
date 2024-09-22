import { OurHistory } from './components/our-history';
import { OurTeam } from './components/our-team';
import { OurContact } from './components/our-contact';
import { SectionTitle } from '../../../components/section-title';
import { Faq } from '../../../components/faq';
import { Sidebar } from '../../../components/sidebar';

const faqs = [
  {
    question: 'Como posso participar?',
    answer: `Basta apenas realizar o cadastro e ir pessoalmente conhecer/conversar com os chefes do grupo.
             R.José Bonifácio, 1760 - Vila S Cruz, Matão - SP. Ou clicar no ícone do WhatsApp ao lado esquerdo
             da tela e mandar mensagem pessoalmente para um dos chefes do grupo.`,
  },
  {
    question: 'A partir de qual idade posso ser escoteiro?',
    answer: 'Lobinho de 6 anos até 10 anos de idade. Escoteiro de 10 anos até 15 anos de idade.',
  },
  {
    question: 'Onde os escoteiros se reunem?',
    answer: `A sede do grupo fica localizada na Escola Estadual Padre Nelson Antônio Romão.
             R.José Bonifácio, 1760 - Vila S Cruz, Matão - SP.`,
  },
  {
    question: 'Terão responsáveis por perto?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'Quais atividades nós fazemos?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'Posso acompanhar meus fílhos no escoteiro?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
];

function Home() {
  return (
    <>
      <OurHistory />
      <OurTeam />
      <OurContact />
      <section className="pt-12 pb-16">
        <div className="max-w-[1160px] mx-auto">
          <SectionTitle
            content="Perguntas frequentes"
            className="mb-14"
          />
          <Faq faqs={faqs} />
        </div>
      </section>
      <Sidebar />
    </>
  );
}

export { Home };
