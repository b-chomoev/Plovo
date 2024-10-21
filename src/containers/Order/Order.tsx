import React from 'react';

const Order = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name='name'/>
        </div>
        <div>
          <input type="text" name='address'/>
        </div>
        <button>Order</button>
      </form>
    </div>
  );
};

export default Order;