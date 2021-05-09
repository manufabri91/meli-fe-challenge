import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../services/useFetch';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`items/${id}`);
  if (loading)
    return (
      <div>
        <h1>Cargando el detalle de {id}...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Algo no salio como esperabamos 🤦‍♂️</h1>
      </div>
    );
  const itemDetails = data.item;
  return (
    <>
      <div className='product-detail container-fluid'>
        <div className='row justify-content-end'>
          <div className='col-md-11 bredcrumb-container'>
            <Breadcrumb data={itemDetails.bredcrumb_path_data} />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-7 product-image-container'>
            <img
              className='product-image'
              src={itemDetails.picture}
              alt={`Foto del Producto ${itemDetails.title}`}
            />
          </div>
          <div className='col-sm-12 col-md-3 product-info'>
            <span className='product-state'>
              {itemDetails.condition === 'new' ? 'Nuevo' : 'Usado'}
              {` - ${itemDetails.sold_quantity} vendidos`}
            </span>
            <span className='product-title'>{itemDetails.title}</span>
            <span className='product-price'>
              {itemDetails.price.currency === 'ARS'
                ? '$'
                : itemDetails.price.currency}
              {`${itemDetails.price.amount.toLocaleString()}`}
            </span>
            <button className='btn btn-primary product-purchase-action'>
              Comprar
            </button>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-10 product-description-container'>
            <h3 className='description-title'>Descripción del producto</h3>
            <p className='description-content'>{itemDetails.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
