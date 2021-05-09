import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useFetch from '../../helpers/useFetch';
import SearchResultItem from '../SearchResultItem/SearchResultItem';

const SearchListing = () => {
  const queryStringParams = queryString.parse(useLocation().search);
  const { data, loading, error } = useFetch(`items?q=${queryStringParams.search}`, [queryStringParams.search]);
  if (loading)
    return (
      <div>
        <h1>Buscando {queryStringParams.search}...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Algo no salio como esperabamos 🤦‍♂️</h1>
      </div>
    );
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-sm-11 col-md-10 mt-3'>
            {data.items.map((result) => (
              <SearchResultItem key={result.id} item={result} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchListing;
