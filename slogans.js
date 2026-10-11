// LPF.one daily slogans. Edit only assets/slogans.json to add or change text.
// Every visitor gets the same headline + description on the same Swiss calendar day.
// Within each complete cycle, each slogan is shown exactly once in shuffled order.
(() => {
  'use strict';
  const title = document.getElementById('slogan-title');
  const description = document.getElementById('slogan-description');
  if (!title || !description) return;

  function swissDayNumber() {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zurich', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const value = name => Number(parts.find(p => p.type === name).value);
    return Math.floor(Date.UTC(value('year'), value('month') - 1, value('day')) / 86400000);
  }

  // Small, deterministic PRNG; no external library or server is required.
  function randomGenerator(seed) {
    let state = seed >>> 0;
    return () => {
      state = (state + 0x6D2B79F5) >>> 0;
      let x = state;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  function sloganForDay(slogans, day) {
    const cycle = Math.floor(day / slogans.length);
    const position = day % slogans.length;
    const order = slogans.map((_, index) => index);
    const random = randomGenerator(cycle ^ 0x4C504631);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return slogans[order[position]];
  }

  function display(slogans) {
    const selected = sloganForDay(slogans, swissDayNumber());
    title.textContent = selected.title;
    description.textContent = selected.description;
  }

  fetch('assets/slogans.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      const slogans = Array.isArray(data) ? data.filter(item =>
        item && typeof item.title === 'string' && item.title.trim() &&
        typeof item.description === 'string' && item.description.trim()
      ) : [];
      if (!slogans.length) throw new Error('No valid slogan pairs');
      display(slogans);
      setInterval(() => display(slogans), 60000);
    })
    .catch(error => {
      // Keep the readable default slogan already in index.html.
      console.warn('LPF.one: could not load slogans.json', error);
    });
})();
