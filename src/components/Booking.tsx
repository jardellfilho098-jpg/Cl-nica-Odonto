import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CalendarDays, Info, CheckCircle2 } from 'lucide-react';
import { clinic, treatments, whatsappUrl } from '../data/config';
type BookingFields = { name:string; treatment:string; date:string; period:string; notes:string };
const initial:BookingFields={name:'',treatment:'',date:'',period:'',notes:''};
function localDate(){ const d=new Date(); const offset=d.getTimezoneOffset(); return new Date(d.getTime()-offset*60000).toISOString().slice(0,10); }
export default function Booking(){
 const [fields,setFields]=useState<BookingFields>(()=>({...initial,treatment:sessionStorage.getItem('essenza-treatment')||''}));const [error,setError]=useState('');const [ready,setReady]=useState(false);
 const edit=(key:keyof BookingFields,value:string)=>{setFields(f=>({...f,[key]:value}));setError('');setReady(false)};
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const name=fields.name.trim().replace(/\s+/g,' ');
  if(name.length<3){setError('Informe um nome com pelo menos 3 caracteres.');return}
  if(!fields.treatment||!fields.date||!fields.period){setError('Preencha o tratamento, a data e o período desejado.');return}
  if(fields.date<localDate()){setError('Escolha uma data de hoje em diante.');return}
  const [year,month,day]=fields.date.split('-');
  const message=[`Olá! Gostaria de solicitar um agendamento na ${clinic.name}.`,'',`Nome: ${name}`,`Tratamento: ${fields.treatment}`,`Data preferencial: ${day}/${month}/${year}`,`Período: ${fields.period}`,`Observações: ${fields.notes.trim()||'Nenhuma'}`,'','Aguardo a confirmação da disponibilidade.'].join('\n');
  const url=whatsappUrl(message);
  if(!url){setError('O WhatsApp da clínica ainda não foi configurado. Adicione o número em src/data/config.ts.');return}
  setReady(true);window.open(url,'_blank','noopener,noreferrer');
 }
 return <section className="booking-section section" id="agendamento"><div className="container booking-grid"><div className="booking-intro"><span className="eyebrow light">SEU PRÓXIMO PASSO</span><h2>O começo de um novo sorriso é uma <em>conversa.</em></h2><p>Conte um pouco do que você procura. Nossa equipe poderá confirmar a disponibilidade e orientar sobre o próximo passo.</p><div className="booking-detail"><CalendarDays size={21}/><span>Solicitação simples, sem compromisso.<br/><small>A data escolhida depende da confirmação da clínica.</small></span></div><div className="booking-mini">ATENDIMENTO COM ATENÇÃO AOS DETALHES <span>✳</span></div></div>
 <form className="booking-form" onSubmit={submit} noValidate><div className="form-title"><span>01 / AGENDAMENTO</span><h3>Solicite sua avaliação</h3><p>Preencha os dados abaixo para iniciar o contato pelo WhatsApp.</p></div><div className="field-grid"><label className="field">Nome completo <span>*</span><input value={fields.name} onChange={e=>edit('name',e.target.value)} placeholder="Seu nome completo" autoComplete="name" maxLength={100}/></label><label className="field">Tratamento <span>*</span><select value={fields.treatment} onChange={e=>edit('treatment',e.target.value)}><option value="">Selecione o tratamento</option><option>Primeira avaliação</option>{treatments.map(t=><option key={t.id}>{t.title}</option>)}<option>Outro / Tenho uma dúvida</option></select></label><label className="field">Data preferencial <span>*</span><input type="date" min={localDate()} value={fields.date} onChange={e=>edit('date',e.target.value)}/></label><label className="field">Horário / turno <span>*</span><select value={fields.period} onChange={e=>edit('period',e.target.value)}><option value="">Selecione o período</option><option>Manhã</option><option>Tarde</option><option>Primeiro disponível</option></select></label><label className="field full">Observações <small>(opcional)</small><textarea value={fields.notes} onChange={e=>edit('notes',e.target.value)} rows={3} maxLength={600} placeholder="Conte brevemente como podemos ajudar..."/></label></div>
 {error&&<p className="form-alert error" role="alert"><Info size={16}/>{error}</p>}{ready&&<p className="form-alert success" role="status"><CheckCircle2 size={17}/>WhatsApp aberto. Envie a mensagem para solicitar o agendamento.</p>}
 <button className="submit" type="submit">Solicitar pelo WhatsApp <ArrowUpRight size={20}/></button><p className="privacy-note">Seus dados não são gravados neste site. O agendamento só será solicitado quando você enviar a mensagem no WhatsApp.</p>
 </form></div></section>
}
