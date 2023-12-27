export const markup = ({ hits }) => {
  return hits.reduce(
    (html, image) =>
      html +
      `
    <li class='gallery-item'>
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" width='640' height='640'/>
        </a>
        <div class='info-wrap'>
          <div>
            <h3>Likes</h3>
            <p>${image.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${image.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${image.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${image.downloads}</p>
          </div>
        </div>
      </li>`,
    ''
  );
};
