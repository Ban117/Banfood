// All elements we need from our DOM
// And things which are used everywhere

export const elements = {
  searchInput: document.querySelector('.search__field'),
  searchForm: document.querySelector('.search'),
  searchRes: document.querySelector('.results'),
  searchResList: document.querySelector('.results__list'),
};

export const elementStrings = {
  loader: 'loader'
};

// Not in search view because used in multiple places
export const renderLoader = parent => {
  const loader = `
    <div class="${elementStrings.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
}