export const clinic = {
 name:'Essenza Odonto', shortName:'Essenza', slogan:'Cuidar também é saber ouvir.',
 whatsapp:'', displayPhone:'(81) 00000-0000',
 instagramUrl:'', address:'Endereço a definir · Sua cidade', hours:'Atendimento mediante agendamento',
 technicalLead:'Responsável técnico e CRO a informar',
 photo:{
  hero:'https://images.pexels.com/photos/6812570/pexels-photo-6812570.jpeg?auto=compress&cs=tinysrgb&w=1800',
  treatments:'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1000',
  care:'https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=1200'
 }
};
export type Treatment={id:string;title:string;description:string};
export const treatments:Treatment[]=[
 {id:'01',title:'Clínica geral',description:'Acompanhamento e saúde bucal para cada fase.'},
 {id:'02',title:'Clareamento dental',description:'Mais luminosidade para o seu sorriso.'},
 {id:'03',title:'Lentes de contato dental',description:'Detalhes que valorizam a sua expressão.'},
 {id:'04',title:'Ortodontia',description:'Mais harmonia, conforto e funcionalidade.'},
 {id:'05',title:'Implantes dentários',description:'Recuperação da função e da confiança.'},
 {id:'06',title:'Limpeza e prevenção',description:'Cuidado contínuo começa no essencial.'}
];
export const testimonials=[
 {text:'O atendimento foi muito atencioso desde o primeiro contato. Tudo explicado com calma.',name:'Depoimento demonstrativo',label:'Exemplo fictício — substituir por avaliação autorizada'},
 {text:'Um espaço acolhedor e uma experiência organizada, sem pressa.',name:'Depoimento demonstrativo',label:'Exemplo fictício — substituir por avaliação autorizada'}
];
export function whatsappUrl(message:string):string|null{
 const number=clinic.whatsapp.replace(/\D/g,'');
 if(!/^\d{12,15}$/.test(number))return null;
 return 'https://wa.me/'+number+'?text='+encodeURIComponent(message);
}
