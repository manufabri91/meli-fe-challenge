import React, { useState } from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/img/Logo_ML.png';
import logo2x from '../../assets/img/Logo_ML@2x.png';
import searchIcon from '../../assets/img/ic_Search.png';
import searchIcon2x from '../../assets/img/ic_Search@2x.png';
import './SearchBar.scss';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();
  const handleSearch = () => {
    history.push(`/items?${queryString.stringify({ search })}`);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <nav className='search-bar container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-md-10 search-bar__elements'>
          <div className='logo-container'>
            <img className='logo-container__logo' src={logo} alt='' srcSet={`${logo}, ${logo2x} 2x`} />
          </div>
          <div className='input-container'>
            <div className='input-group input-group-sm'>
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                className='form-control'
                placeholder='Nunca dejes de buscar'
                aria-label='Buscador'
                aria-describedby='inputGroup'
              />
              <button onClick={handleSearch} className='btn btn-outline-secondary' type='button' id='button-addon2'>
                <span>
                  <img className='input-container__search-icon' src={logo} alt='Meli Logo' srcSet={`${searchIcon}, ${searchIcon2x} 2x`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
