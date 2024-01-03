const targetElement = document.querySelector('.animated-text');

const handleObserver = entries => {
  console.log('entries', entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
};

const wotcher = new IntersectionObserver(handleObserver, { threshold: 1 });

wotcher.observe(targetElement);
