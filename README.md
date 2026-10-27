# Vitallmente · Dashboard Google Ads

Dashboard responsiva em português, criada a partir do HTML fornecido. HTML, CSS e JavaScript, sem instalação de dependências ou etapa de build.

## Abrir

Abra `index.html` no navegador. Para uma prévia por servidor local, execute na pasta do projeto:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Depois, acesse `http://127.0.0.1:4173`.

## Publicar na Vercel

1. Suba esta pasta para um repositório Git de sua preferência.
2. Importe o repositório em **Add New → Project** na Vercel.
3. Use **Framework Preset: Other**, **Build Command: vazio** e **Output Directory: .**.
4. Publique com **Deploy**.

O arquivo `vercel.json` já define essas configurações. Não são necessárias variáveis de ambiente.

Referência: [configuração de build para sites estáticos na Vercel](https://vercel.com/docs/builds/configure-a-build).

## O que está incluído

- Visão geral com quatro indicadores, gráfico de investimento, indicador de gasto sem conversões registradas e tabela de campanhas.
- Alternância entre o dia 26/10/2026 e os 30 dias de 26/09 a 25/10/2026, que atualiza indicadores, gráficos e tabela.
- Seções de campanhas, conversões, palavras-chave, qualidade dos leads e plano de ação.
- Resumo executivo com a ressalva de que eventos de conversão não equivalem a pessoas únicas.
- Tema claro e escuro, com preferência salva apenas neste navegador.
- Navegação móvel e por teclado, incluindo menu recolhível e abas acessíveis.
- **Exportar relatório** abre a impressão do navegador: selecione **Salvar como PDF**. A impressão inclui todas as seções e o resumo, independentemente da página aberta.
- `relatorio.html` oferece o conteúdo completo sem depender de JavaScript.

## Sobre os dados

Este é um relatório estático, sem conexão com o Google Ads. A data de extração é **26/10/2026, às 23h20, horário de Brasília**. Os diagnósticos e correções descritos são os do documento fornecido, não uma verificação atual da conta.

Os indicadores do dia foram extraídos às **23h20** (R$ 2.745 e 99 conversões), enquanto o detalhamento por campanha corresponde às **23h10** (total informado de R$ 2.652,18 e 96 conversões). A diferença entre esses recortes permanece explícita na interface. Os percentuais do gráfico circular usam a soma dos valores detalhados por campanha.

As casas decimais e totais do relatório foram preservados. Há pequenas diferenças de centavos entre a soma das campanhas e os totais informados na origem; as conversões fracionárias do mês também foram mantidas. Não foram criados dados diários ou séries de evolução que não existiam no arquivo.

As frases que garantiam manutenção do volume de leads foram ajustadas para indicar que o impacto precisa ser acompanhado. No resumo, “contatos” foi substituído por “eventos de conversão” onde necessário para respeitar a ressalva metodológica do próprio documento.

## Arquivos

- `index.html`: estrutura da dashboard e conteúdo completo das seções.
- `styles.css`: identidade visual, responsividade, tema escuro e impressão.
- `app.js`: dados dos gráficos, navegação e interações.
- `favicon.svg`: símbolo da dashboard.
- `relatorio.html`: alternativa de leitura sem JavaScript.
- `vercel.json`: configuração de hospedagem estática.

Para atualizar os números, revise os dados de `app.js` e os textos e tabelas de `index.html` e `relatorio.html`. A fonte DM Sans é carregada pelo Google Fonts; sem conexão, a página usa fontes do sistema.
