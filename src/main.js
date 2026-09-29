import { renderCards } from './card.js';

const trending = [
  { color: 'bg-rose-600' },
  { color: 'bg-sky-600' },
  { color: 'bg-amber-600' },
  { color: 'bg-emerald-600' },
  { color: 'bg-indigo-600' },
  { color: 'bg-fuchsia-600' },
];

const newReleases = [
  { color: 'bg-cyan-600' },
  { color: 'bg-slate-600' },
  { color: 'bg-orange-600' },
  { color: 'bg-violet-600' },
  { color: 'bg-teal-600' },
  { color: 'bg-rose-600' },
];

renderCards('trending', trending);
renderCards('last-release', newReleases);
