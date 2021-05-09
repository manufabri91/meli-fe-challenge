import React from 'react';
import logo from '../../assets/img/Logo_ML.png';
import logo2x from '../../assets/img/Logo_ML@2x.png';
import searchIcon from '../../assets/img/ic_Search.png';
import searchIcon2x from '../../assets/img/ic_Search@2x.png';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <nav className='search-bar container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-md-10 search-bar__elements'>
          <div className='logo-container'>
            <img
              className='logo-container__logo'
              src={logo}
              alt=''
              srcSet={`${logo}, ${logo2x} 2x`}
            />
          </div>
          <div className='input-container'>
            <div className='input-group input-group-sm'>
              <input
                type='text'
                className='form-control'
                placeholder='Nunca dejes de buscar'
                aria-label='Search input'
                aria-describedby='inputGroup'
              />
              <button
                className='btn btn-outline-secondary'
                type='button'
                id='button-addon2'
              >
                <span>
                  <img
                    className='logo-container__logo'
                    src={logo}
                    alt='Meli Logo'
                    srcSet={`${searchIcon}, ${searchIcon2x} 2x`}
                  />
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
