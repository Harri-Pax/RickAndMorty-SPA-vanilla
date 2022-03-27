import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Characters-item">
          <a href="#/${character.id}/">
            <picture>
              <img src="${character.image}" alt="${character.name}">
            </picture>
            <h2>${character.name}</h2>
          </a>
        </article>
        `).join('')}
    </div>
  `;
  return view;
};

export default Home;