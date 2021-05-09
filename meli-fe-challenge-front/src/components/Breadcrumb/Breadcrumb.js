import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({ data }) => {
  return (
    <>
      <ol className='breadcrumb'>
        {data.map((item) => (
          <li className='breadcrumb-item'>
            <a href={item.permalink} key={item.id}>
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Breadcrumb;
