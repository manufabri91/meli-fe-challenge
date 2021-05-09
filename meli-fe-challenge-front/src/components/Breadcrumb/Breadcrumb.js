import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({ data }) => {
  return (
    <>
      <ol className='breadcrumb'>
        {data.map((item) => (
          <li className='breadcrumb-item' key={item.id}>
            <a href={item.permalink}>{item.name}</a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Breadcrumb;
