// ========================================
// SVG Icon Library — Clean Line Icons
// ========================================

const ICON_DEFAULTS = {
  size: 24,
  stroke: 'currentColor',
  strokeWidth: 1.8,
  fill: 'none',
};

function svg(paths: string, size = ICON_DEFAULTS.size, viewBox = '0 0 24 24'): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="${ICON_DEFAULTS.fill}" stroke="${ICON_DEFAULTS.stroke}" stroke-width="${ICON_DEFAULTS.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

export const icons = {
  // Navigation & UI
  arrowRight: (s = 24) => svg('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', s),
  arrowUpRight: (s = 24) => svg('<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>', s),
  menu: (s = 24) => svg('<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>', s),
  x: (s = 24) => svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>', s),

  // Social
  instagram: (s = 24) => svg('<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>', s),
  whatsapp: (s = 24) => svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>', s),
  facebook: (s = 24) => svg('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>', s),
  mail: (s = 24) => svg('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>', s),
  mapPin: (s = 24) => svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', s),

  // Fashion & Clothing
  dress: (s = 24) => svg('<path d="M6 2l3 6v4l-4 8h14l-4-8V8l3-6"/><path d="M9 8h6"/>', s),
  sparkles: (s = 24) => svg('<path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" opacity=".6"/>', s),
  scissors: (s = 24) => svg('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>', s),
  needle: (s = 24) => svg('<path d="M14.5 2.5l7 7-9 9c-2 2-5.5 2.5-8 0s-2-6 0-8l9-9z"/><path d="M10 12a2 2 0 1 0 0 4"/><line x1="2" y1="22" x2="5.5" y2="18.5"/>', s),
  thread: (s = 24) => svg('<path d="M8 21c0-3 2-5 4-7s4-4 4-7a4 4 0 0 0-8 0"/><circle cx="12" cy="3" r="1"/><path d="M4 21h16"/>', s),
  palette: (s = 24) => svg('<circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>', s),
  ruler: (s = 24) => svg('<path d="M21.2 7.6l-4.8-4.8c-.4-.4-1-.4-1.4 0L3.6 14.2c-.4.4-.4 1 0 1.4l4.8 4.8c.4.4 1 .4 1.4 0L21.2 9c.4-.4.4-1 0-1.4z"/><line x1="9" y1="11" x2="11" y2="9"/><line x1="12" y1="14" x2="14" y2="12"/><line x1="6" y1="8" x2="8" y2="6"/><line x1="15" y1="17" x2="17" y2="15"/>', s),

  // General
  package: (s = 24) => svg('<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>', s),
  gem: (s = 24) => svg('<polygon points="6 3 18 3 22 9 12 22 2 9"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="12" y1="22" x2="6" y2="9"/><line x1="12" y1="22" x2="18" y2="9"/><line x1="12" y1="2" x2="9" y2="9"/><line x1="12" y1="2" x2="15" y2="9"/>', s),
  star: (s = 24) => svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/>', s),
  starOutline: (s = 24) => svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', s),
  user: (s = 24) => svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', s),
  heart: (s = 24) => svg('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>', s),
  shoppingBag: (s = 24) => svg('<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>', s),
  award: (s = 24) => svg('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>', s),
  camera: (s = 24) => svg('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>', s),
  messageCircle: (s = 24) => svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>', s),
  externalLink: (s = 24) => svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>', s),
  dancing: (s = 24) => svg('<circle cx="12" cy="4" r="2"/><path d="M12 6v4l3 5"/><path d="M12 10l-3 5"/><path d="M8 21l2-6"/><path d="M14 15l2 6"/>', s),
  coHanger: (s = 24) => svg('<path d="M12 2a2 2 0 0 1 2 2c0 1.7-2 3-2 3s-2-1.3-2-3a2 2 0 0 1 2-2z"/><path d="M12 7l8.5 6c.8.6 1 1.8.3 2.5-.3.4-.8.5-1.3.5H4.5c-.5 0-1-.1-1.3-.5-.7-.7-.5-1.9.3-2.5L12 7z"/><line x1="4.5" y1="16" x2="4.5" y2="20"/><line x1="19.5" y1="16" x2="19.5" y2="20"/><line x1="4.5" y1="20" x2="19.5" y2="20"/>', s),
};

export type IconName = keyof typeof icons;
