# Essenza Odonto — React + Vite + TypeScript

Projeto novo inspirado na identidade editorial e no fluxo de agendamento da clínica odontológica original (`jardelzinho075/odonto`), sem substituir o site publicado.

## Executar

```bash
npm install
npm run dev
```

Para testar o build de produção:

```bash
npm run build
npm run preview
```

## Tecnologias

- React 19 com componentes tipados em TypeScript
- Vite
- Lucide React
- CSS modularizado por seções e responsivo, sem framework visual obrigatório
- Formulário React com validação e mensagem pré-preenchida para WhatsApp
- Acessibilidade, SEO inicial, mobile first, animações reduzidas para quem preferir

## Antes de mostrar a um cliente real

1. Abra `src/data/config.ts` e substitua **nome, WhatsApp, endereço, horário, profissional responsável/CRO** e fotos.
2. O número WhatsApp precisa conter DDI + DDD + número (por exemplo, 55 + 81 + nove dígitos), somente dígitos. Sem número válido, o formulário informa claramente que a clínica não está configurada.
3. Os depoimentos são **demonstrativos**. Substitua por avaliações reais com autorização; não apresente depoimentos fictícios como verdadeiros.
4. As imagens são de demonstração e vêm de URLs externas do Pexels. Substitua por imagens do cliente e confirme os direitos de uso.
5. Teste todos os fluxos no celular e confirme o texto enviado para o WhatsApp antes de publicar.
6. Informe dados obrigatórios de publicidade odontológica e CRO conforme as regras profissionais aplicáveis.

## Agendamento

O botão não grava uma consulta nem garante horário. Ele valida os dados e abre o WhatsApp com uma **solicitação**. Para agendamento confirmado e agenda integrada, será necessário um backend (por exemplo Supabase), login e disponibilidade real.

## Publicação

Suba essa pasta para um **novo repositório** GitHub e importe na Vercel. Framework: Vite. Build: `npm run build`. Output: `dist`.
