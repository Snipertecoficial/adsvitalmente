'use strict';

const iconPaths = {
  brand: '<path d="M12 21V11m0 5C4 17 2 10 3 4c7 0 11 4 9 12Zm1-3C11 6 16 2 22 3c0 6-3 10-9 10Z"/>',
  overview: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  campaign: '<path d="m4 10 14-5v14L4 14v-4Zm4 6 1 5h4l-2-4M21 9v6M4 10H2v4h2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  scan: '<path d="M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m8 0h4a1 1 0 0 0 1-1v-4"/><circle cx="12" cy="10" r="3"/><path d="M6 17c1-4 11-4 12 0"/>',
  checklist: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m7 8 1 1 2-2m3 1h4m-10 6 1 1 2-2m3 1h4"/>',
  document: '<path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10l-7-7Zm0 0v7h7M8 14h8m-8 3h5"/>',
  'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  'arrow-up-right': '<path d="M6 18 18 6M6 6h12v12"/>',
  moon: '<path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
  shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/>',
  'shield-check': '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h2m4 0h2"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<path d="m10.3 4-8 14a2 2 0 0 0 1.7 3h16a2 2 0 0 0 1.7-3l-8-14a2 2 0 0 0-3.4 0ZM12 9v4m0 4h.01"/>',
  pie: '<path d="M12 3a9 9 0 1 0 9 9h-9V3Zm4 0v5h5a7 7 0 0 0-5-5Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  wallet: '<path d="M20 8V5a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15v12H5a2 2 0 0 1-2-2V6m17 6h-5v4h5m-2-2h.01"/>',
  click: '<path d="m7 3 1 4m-6 3 4 1m-1 6 3-2m3-6 9 6-5 1-2 5-5-12Z"/>',
  trend: '<path d="m3 17 6-6 4 4 8-10m-7 0h7v7"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  check: '<path d="m5 12 4 4L19 6"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.info}</svg>`;
}

function hydrateIcons(host = document) {
  host.querySelectorAll('[data-icon]').forEach(element => { element.innerHTML = icon(element.dataset.icon); });
}

const campaigns = [
  { name: 'Avaliação online leads mundo', short: 'Avaliação · mundo', type: 'Pesquisa', day: { cost: 1330.19, conversions: 80, cpa: 16.63 }, month: { cost: 12129.13, conversions: 1070.40, cpa: 11.33 }, status: 'Saudável', tone: 'ok' },
  { name: 'Avaliação online leads capitais', short: 'Avaliação · capitais', type: 'Pesquisa', day: { cost: 559.84, conversions: 6, cpa: 93.31 }, month: { cost: 7350.71, conversions: 564.44, cpa: 13.02 }, status: 'Custo elevado', tone: 'warn' },
  { name: 'Avaliação performance max', short: 'Performance Max', type: 'Performance Max', day: { cost: 500.22, conversions: 0, cpa: null }, month: { cost: 6038.73, conversions: 1186.96, cpa: 5.09 }, status: 'Limitada por política', tone: 'crit' },
  { name: 'Avaliação_Leads_v1', short: 'Avaliação · leads v1', type: 'Pesquisa', day: { cost: 160.58, conversions: 10, cpa: 16.06 }, month: { cost: 3054.13, conversions: 200.35, cpa: 15.24 }, status: 'Saudável', tone: 'ok' },
  { name: 'Psicoterapia online leads', short: 'Psicoterapia online', type: 'Pesquisa', day: { cost: 101.36, conversions: 0, cpa: null }, month: { cost: 155.91, conversions: 0, cpa: null }, status: 'Revisar medição', tone: 'crit' }
];

const brl = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const number = (value, decimals = 0) => value.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
const byId = id => document.getElementById(id);
let selectedPeriod = 'day';

function metric({ label, value, prefix = '', description, symbol, featured = false, warning = false, footIcon = 'info' }) {
  return `<article class="metric-card${featured ? ' featured' : ''}"><div class="metric-header"><span>${label}</span><span data-icon="${symbol}"></span></div><strong class="metric-value">${prefix ? `<span class="metric-prefix">${prefix}</span>` : ''}${value}</strong><div class="metric-footer${warning ? ' warning' : ''}"><span data-icon="${footIcon}"></span><span>${description}</span></div></article>`;
}

function renderDashboard() {
  const day = selectedPeriod === 'day';
  const metrics = [
    { label: 'Investimento total', value: day ? '2.745' : '28.728,63', prefix: 'R$', description: day ? '5 campanhas ativas no relatório' : '26 set. a 25 out. de 2026', symbol: 'wallet', featured: true, footIcon: 'campaign' },
    { label: 'Conversões registradas', value: day ? '99' : '3.022', description: 'Eventos, não pessoas únicas', symbol: 'target', footIcon: 'info' },
    { label: 'Custo por conversão', value: day ? '27,73' : '9,51', prefix: 'R$', description: day ? '+191,6% vs. média dos 30 dias' : 'Média registrada no período', symbol: 'click', warning: day, footIcon: day ? 'trend' : 'calendar' },
    { label: 'Parcela de impressões', value: day ? '11,82%' : '13,91%', description: 'Das impressões disponíveis', symbol: 'eye', footIcon: 'search' }
  ];
  byId('overview-kpis').innerHTML = metrics.map(metric).join('');
  byId('chart-period').textContent = day ? '26 de outubro' : 'Últimos 30 dias';
  byId('snapshot-note').textContent = day ? 'Leitura às 23h20 · Os dados do Google Ads podem ser atualizados com atraso.' : 'Período de 26/09 a 25/10/2026 · Dados históricos do relatório de 26/10.';
  byId('chart-footnote').textContent = day ? 'Detalhamento às 23h10: R$ 2.652,18 e 96 conversões.' : 'Valores por campanha conforme a extração do relatório original.';
  const max = Math.max(...campaigns.map(c => c[selectedPeriod].cost));
  byId('investment-chart').innerHTML = campaigns.map(c => {
    const data = c[selectedPeriod];
    return `<div class="investment-row" title="${c.name}: ${brl(data.cost)} · ${number(data.conversions, day ? 0 : 2)} conversões"><span class="investment-label">${c.short}</span><div class="investment-track"><div class="investment-fill${data.conversions === 0 ? ' no-conversion' : ''}" style="width:${data.cost / max * 100}%"></div></div><span class="investment-amount">${brl(data.cost)}</span></div>`;
  }).join('');
  const totalDetailed = campaigns.reduce((total, c) => total + c[selectedPeriod].cost, 0);
  const withoutConversions = campaigns.filter(c => c[selectedPeriod].conversions === 0);
  const costWithoutConversions = withoutConversions.reduce((total, c) => total + c[selectedPeriod].cost, 0);
  const percentage = costWithoutConversions / totalDetailed * 100;
  byId('waste-percentage').innerHTML = `${number(percentage, 1)}<span>%</span>`;
  byId('donut-value').setAttribute('stroke-dasharray', `${percentage} 100`);
  byId('donut-title').textContent = `${number(percentage, 1)}% do investimento sem conversões registradas`;
  byId('waste-amount').textContent = brl(costWithoutConversions);
  byId('waste-context').textContent = `em ${withoutConversions.length} campanha${withoutConversions.length === 1 ? '' : 's'} ${day ? 'no dia' : 'nos 30 dias'}`;
  byId('overview-table').innerHTML = `<table><caption class="sr-only">Campanhas no período ${day ? 'de 26/10/2026, às 23h10' : 'de 26/09 a 25/10/2026'}. O status corresponde ao diagnóstico de 26/10.</caption><thead><tr><th scope="col">Campanha</th><th scope="col">Investimento</th><th scope="col">Conversões</th><th scope="col">Custo / conv.</th><th scope="col">Diagnóstico · 26/10</th></tr></thead><tbody>${campaigns.map(c => {
    const data = c[selectedPeriod];
    return `<tr><td><span class="campaign-name"><i class="campaign-dot${c.tone === 'ok' ? '' : ' caution'}"></i>${c.short}</span><span class="campaign-type">${c.type}</span></td><td class="table-number">${brl(data.cost)}</td><td class="table-number">${number(data.conversions, day ? 0 : 2)}</td><td class="table-number">${data.cpa === null ? '<span class="table-sub">Sem registro</span>' : brl(data.cpa)}</td><td class="status-cell"><span class="chip ${c.tone}"><i class="status-dot"></i>${c.status}</span></td></tr>`;
  }).join('')}</tbody></table>`;
  hydrateIcons(byId('overview-kpis'));
}

function renderReportChart(id, period) {
  const host = byId(id);
  if (!host) return;
  const max = Math.max(...campaigns.map(c => c[period].cost));
  host.innerHTML = campaigns.map(c => `<div class="bar-row" title="${c.name}"><span class="bar-lab">${c.name}</span><div class="track"><div class="fill${c[period].conversions === 0 ? ' zero' : ''}" style="width:${c[period].cost / max * 100}%"></div></div><span class="bar-val">${brl(c[period].cost)}</span></div>`).join('');
}

const views = {
  overview: { title: 'Seu investimento, em perspectiva', breadcrumb: 'Visão geral', description: 'Uma visão clara do desempenho e do que merece sua atenção.' },
  campaigns: { title: 'As campanhas, lado a lado', breadcrumb: 'Campanhas', description: 'Investimento, resultados e contexto para cada campanha da conta.' },
  conversions: { title: 'O que os números estão contando', breadcrumb: 'Conversões', description: 'Entenda as ações de conversão e os limites da medição atual.' },
  keywords: { title: 'As palavras que movem o resultado', breadcrumb: 'Palavras-chave', description: 'Os termos que concentram investimento e as oportunidades de ajuste.' },
  investigation: { title: 'Mais contexto. Leads melhores', breadcrumb: 'Qualidade dos leads', description: 'A apuração das buscas por SUS, gratuidade e convênios.' },
  actions: { title: 'Do diagnóstico ao próximo passo', breadcrumb: 'Plano de ação', description: 'O que já foi aplicado e o que priorizar, conforme o relatório de 26/10.' }
};

function closeMenu() {
  byId('sidebar').classList.remove('open');
  byId('sidebar').inert = window.matchMedia('(max-width: 860px)').matches;
  byId('mobile-overlay').hidden = true;
  byId('menu-toggle').setAttribute('aria-expanded', 'false');
  document.querySelector('.app-shell').inert = false;
}

function navigate() {
  const requested = location.hash.slice(1);
  if (requested === 'main') return;
  const name = Object.hasOwn(views, requested) ? requested : 'overview';
  const view = views[name];
  document.querySelectorAll('.view-panel').forEach(panel => { panel.hidden = panel.id !== `view-${name}`; });
  document.querySelectorAll('.nav-item').forEach(link => {
    const current = link.dataset.view === name;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  byId('breadcrumb-title').textContent = view.breadcrumb;
  byId('page-title').textContent = view.title;
  const period = document.createElement('span');
  period.textContent = '.';
  byId('page-title').append(period);
  byId('page-description').textContent = view.description;
  document.title = `${view.breadcrumb} · Vitallmente Ads`;
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function selectTab(summary, focus = false) {
  byId('dashboard-content').hidden = summary;
  byId('summary-content').hidden = !summary;
  byId('period').disabled = summary;
  byId('period').closest('.period-control').hidden = summary;
  ['tab-dashboard', 'tab-summary'].forEach((id, index) => {
    const selected = Boolean(index) === summary;
    byId(id).setAttribute('aria-selected', String(selected));
    byId(id).tabIndex = selected ? 0 : -1;
    if (selected && focus) byId(id).focus();
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === 'dark';
  byId('theme-label').textContent = dark ? 'Ativar tema claro' : 'Ativar tema escuro';
  byId('theme').setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
  byId('theme').querySelector('[data-icon]').innerHTML = icon(dark ? 'sun' : 'moon');
}

hydrateIcons();
let storedTheme;
try { storedTheme = localStorage.getItem('vit-theme'); } catch { /* Storage can be disabled. */ }
setTheme(storedTheme === 'dark' ? 'dark' : 'light');
byId('theme').addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('vit-theme', theme); } catch { /* Theme still works without storage. */ }
});
byId('period').addEventListener('change', event => {
  selectedPeriod = event.target.value;
  renderDashboard();
});
byId('tab-dashboard').addEventListener('click', () => selectTab(false));
byId('tab-summary').addEventListener('click', () => selectTab(true));
document.querySelector('.view-tabs').addEventListener('keydown', event => {
  if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const summary = event.key === 'Home' ? false : event.key === 'End' ? true : byId('tab-dashboard').getAttribute('aria-selected') === 'true';
    selectTab(summary, true);
  }
});
byId('open-summary').addEventListener('click', () => {
  if (location.hash !== '#overview') location.hash = 'overview';
  selectTab(true);
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'instant' });
  byId('tab-summary').focus();
});
byId('menu-toggle').addEventListener('click', () => {
  const open = byId('sidebar').classList.toggle('open');
  byId('sidebar').inert = !open;
  byId('mobile-overlay').hidden = !open;
  byId('menu-toggle').setAttribute('aria-expanded', String(open));
  document.querySelector('.app-shell').inert = open;
  if (open) byId('sidebar').querySelector('.nav-item.active').focus();
});
byId('mobile-overlay').addEventListener('click', closeMenu);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && byId('sidebar').classList.contains('open')) {
    closeMenu();
    byId('menu-toggle').focus();
  }
  if (event.key === 'Tab' && byId('sidebar').classList.contains('open')) {
    const focusable = [...byId('sidebar').querySelectorAll('a, button')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
window.matchMedia('(min-width: 861px)').addEventListener('change', closeMenu);
byId('export').addEventListener('click', () => window.print());
window.addEventListener('hashchange', navigate);
renderDashboard();
renderReportChart('c-hoje', 'day');
renderReportChart('c-30', 'month');
navigate();
