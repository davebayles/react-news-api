/** @jsx jsx */
import { jsx } from '@emotion/react';

function Article({ article }) {
  const { urlToImage, publishedAt, title, description, url } = article;
  const formatDate = new Date(publishedAt);
  return (
    <div className="col-12 col-md-6" key={title}>
      <div className="article mb-4">
        <div
          className="article-image"
          css={{
            backgroundImage: `url(${urlToImage})`,
          }}
        ></div>
        <div className="article-content p-4 p-lg-5">
          <h3>{title}</h3>
          <h6 className="mb-3">{formatDate.toDateString()}</h6>
          <p className="d-none d-md-block">{description}</p>
          <p>
            <a
              className="btn btn-dark"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Article };
