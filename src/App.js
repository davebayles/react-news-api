import React from 'react';
import './App.css';
import { client } from './utils/api-client';
import { Article } from './components/article';
import { Spinner } from './components/lib';

function App() {
  const [status, setStatus] = React.useState('idle');
  const [query, setQuery] = React.useState('');
  const [queried, setQueried] = React.useState(false);
  const [sort, setSort] = React.useState('');
  const [data, setData] = React.useState(null);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus('loading');
    client(
      `/everything?language=en&q=${encodeURIComponent(
        query
      )}&sortBy=${encodeURIComponent(
        sort
      )}&apiKey=a5f10eed4f94467ba5a6479ba32597a9`
    ).then((responseData) => {
      setData(responseData);
      setStatus('success');
    });
  }, [queried, query, sort]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setSort(event.target.elements.sortOptions.value);
    setQuery(event.target.elements.search.value);
    setQueried(true);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark d-flex mb-2 mb-md-5">
        <div className="container">
          <form className="nav-form" onSubmit={handleSearchSubmit}>
            <div className="row">
              <div className="col-4 col-md-6">
                <input
                  id="search"
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="col-5 col-md-4">
                <select id="sortOptions" className="form-control">
                  <option value="publishedAt">By Date</option>
                  <option value="relevancy">By Relevancy</option>
                  <option value="popularity">By Popularity</option>
                </select>
              </div>
              <div className="col-3 col-md-2">
                <button className="btn btn-search" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <div className="container">
        {isLoading ? <Spinner /> : null}
        {isSuccess ? (
          data?.articles?.length ? (
            <div className="row">
              {data.articles.map((article) => {
                return <Article key={article.url} article={article} />;
              })}
            </div>
          ) : (
            <p>No articles found. Try another search.</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default App;
