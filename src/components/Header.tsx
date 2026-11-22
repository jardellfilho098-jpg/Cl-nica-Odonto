import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { clinic } from '../data/config';
const links=[{href:'#inicio',label:'Início'},{href:'#tratamentos',label:'Tratamentos'},{href:'#experiencia',label:'Experiência'},{href:'#depoimentos',label:'Depoimentos'}];
export default function Header(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{const onEscape=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onEscape);return()=>window.removeEventListener('keydown',onEscape)},[]);
 return <header className="header"><div className="container header-inner">
  <a href="#inicio" className="brand" aria-label={`${clinic.name} — início`} onClick={()=>setOpen(false)}><span className="brand-symbol"><Sparkles size={22} strokeWidth={1.6}/></span><span>{clinic.shortName}<small>ODONTOLOGIA</small></span></a>
  <nav className="desktop-nav" aria-label="Navegação principal">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</nav>
  <a className="top-cta" href="#agendamento">Agendar consulta <ArrowUpRight size={16}/></a>
  <button className="menu-toggle" type="button" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(v=>!v)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
 </div><nav id="mobile-menu" className={`mobile-nav ${open?'show':''}`} aria-label="Menu mobile" inert={!open}>{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}</a>)}<a href="#agendamento" onClick={()=>setOpen(false)}>Agendar consulta <ArrowUpRight size={16}/></a></nav></header>
}
