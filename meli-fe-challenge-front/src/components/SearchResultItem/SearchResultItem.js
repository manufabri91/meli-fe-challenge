import React from 'react';
import { useHistory } from 'react-router-dom';
import priceFormatter from '../../helpers/priceFormatter';
import freeShippingIcon from '../../assets/img/ic_shipping.png';
import freeShippingIcon2x from '../../assets/img/ic_shipping@2x.png';

import './SearchResultItem.scss';

const SearchResultItem = ({ item }) => {
  const history = useHistory();
  const productClickHandler = () => {
    history.push(`/items/${item.id}`);
  };
  return (
    <div className='search-result-item'>
      <img className='product-image clickeable' src={item.picture} alt={`Foto de ${item.title}`} onClick={productClickHandler} />
      <div className='product-data'>
        <div className='price-and-shipping mr-1'>
          <span className='price mr-1'>
            {priceFormatter(item.price)}
            {item.free_shipping && <img className='shipping-icon' src={freeShippingIcon} alt='' srcSet={`${freeShippingIcon2x} 2x`} />}
          </span>

          <div className='seller-info'>
            <span>{item.city}</span>
          </div>
        </div>
        <span className='title clickeable' onClick={productClickHandler}>
          {item.title}
        </span>
      </div>
    </div>
  );
};

export default SearchResultItem;
