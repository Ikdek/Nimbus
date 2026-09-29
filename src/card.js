export function createCard({ color }) {
  const card = document.createElement('Card');
  card.className = `aspect-2/3 w-32 sm:w-40 lg:w-48 shrink-0 rounded-lg ring-1 ring-white/10 shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 hover:z-10 cursor-pointer ${color}`;

  return card;
}

export function renderCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let track = container.querySelector('[data-card-track]');
  if (!track) {
    track = document.createElement('div');
    track.dataset.cardTrack = '';
    track.className =
      'flex flex-row gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 px-1 sm:px-4 lg:px-15 justify-center align-center';
    container.appendChild(track);
  }

  track.innerHTML = '';
  items.forEach((item) => track.appendChild(createCard(item)));
}
