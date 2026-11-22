// PERSONALIZE A CLÍNICA AQUI antes de publicar para um cliente real.
export const clinic = {
  name: 'Essenza Odonto',
  shortName: 'Essenza',
  slogan: 'Cuidar também é saber ouvir.',
  // Exemplo de formato: 5581999999999. Deixe vazio até configurar o número real.
  whatsapp: '',
  displayPhone: '(81) 00000-0000',
  instagramUrl: '',
  address: 'Endereço a definir · Sua cidade',
  hours: 'Atendimento mediante agendamento',
  technicalLead: 'Responsável técnico e CRO a informar',
  photo: {
    hero: 'https://images.pexels.com/photos/6812570/pexels-photo-6812570.jpeg?auto=compress&cs=tinysrgb&w=1800',
    treatments: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1000',
    care: 'https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
};
export type Treatment = { id: string; title: string; description: string; detail: string };
export const treatments: Treatment[] = [
  {id:'01',title:'Clínica geral',description:'Acompanhamento e saúde bucal para cada fase.',detail:'Avaliação individualizada e orientações para manter a saúde do sorriso.'},
  {id:'02',title:'Clareamento dental',description:'Mais luminosidade para o seu sorriso.',detail:'Planejamento estético com avaliação prévia das condições bucais.'},
  {id:'03',title:'Lentes de contato dental',description:'Detalhes que valorizam a sua expressão.',detail:'Uma abordagem personalizada para o planejamento do sorriso.'},
  {id:'04',title:'Ortodontia',description:'Mais harmonia, conforto e funcionalidade.',detail:'Avaliação de alinhamento dental e possibilidades de tratamento.'},
  {id:'05',title:'Implantes dentários',description:'Recuperação da função e da confiança.',detail:'Investigação clínica e planejamento conforme indicação profissional.'},
  {id:'06',title:'Limpeza e prevenção',description:'Cuidado contínuo começa no essencial.',detail:'Rotina preventiva e acompanhamento da saúde bucal.'},
];
export const testimonials = [
  {text:'O atendimento foi muito atencioso desde o primeiro contato. Tudo explicado com calma.',name:'Depoimento demonstrativo',label:'Exemplo de conteúdo — substituir por avaliação autorizada'},
  {text:'Um espaço acolhedor e uma experiência organizada, sem pressa.',name:'Depoimento demonstrativo',label:'Exemplo de conteúdo — substituir por avaliação autorizada'}
];
export function whatsappUrl(message: string): string | null {
  const number = clinic.whatsapp.replace(/\D/g,'');
  if (!/^\d{12,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
