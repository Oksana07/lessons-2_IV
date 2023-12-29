const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим розмітку елементів списка
 * 2. Слухаєм зміни фільтра
 * 3. Фільтруєм дані і рендерим нові єлементи
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

// refs.input.addEventListener('input', onFilterChange);
// refs.input.addEventListener('input', _.throttle(onFilterChange, 300));
refs.input.addEventListener('input', _.debounce(onFilterChange, 3000));

const listItemMarkup = createListItemMarkup(tech);
populateList(listItemMarkup);

function createListItemMarkup(item) {
  return item.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
  console.log('INPUP');
  const filter = evt.target.value.toLowerCase();

  const filterredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemMarkup = createListItemMarkup(filterredItems);
  populateList(listItemMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
