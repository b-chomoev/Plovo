import React from 'react';

interface Props {
  dish: IDish;
}

const DishItem: React.FC<Props> = ({dish}) => {
  const imageUrl = 'https://static.vecteezy.com/system/resources/previews/007/415/858/non_2x/holding-signboard-404-not-found-cute-pear-cartoon-vector.jpg'

  const imageStyle = {
    background: `url(${dish.urlImage || imageUrl}) center center / cover no-repeat`,
  }

  return (
    <div className='card mb-3 p-4'>
      <div className='row justify-content-between'>
        <div className='col-5' style={imageStyle}/>

          <div className='col-6'>
            <h5 className='cart-title'>{dish.name}</h5>
            <p className='card-text'>{dish.description}</p>
            <p className='card-text'>Price: {dish.price}$</p>
          </div>
      </div>
    </div>
  );
};

export default DishItem;