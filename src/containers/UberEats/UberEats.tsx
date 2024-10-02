import ToolBar from '../../components/ToolBar/ToolBar.tsx';
import DishForm from '../../components/DishForm/DishForm.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import Dishes from '../../components/Dishes/Dishes.tsx';
import { useState } from 'react';

const UberEats = () => {
  const [dishes, setDishes] = useState<IDish[]>([
    {id: '1', name: 'Pasta', description: 'Italian', price: 30, urlImage: 'https://images.stockcake.com/public/a/a/f/aafc7cba-e1d8-42c7-8e9b-c302a0ecdd29_medium/italian-pasta-dinner-stockcake.jpg'},
    {id: '2', name: 'Pizza', description: 'French', price: 22, urlImage: 'https://i.pinimg.com/736x/e7/4e/6c/e74e6ca1c558f9b539d1094480623a5a.jpg'},
    {id: '3', name: 'Burger', description: 'American', price: 18, urlImage: 'https://images.stockcake.com/public/0/7/b/07bf10f9-4c26-417a-8eea-65598e4cf063_medium/juicy-cheeseburger-delight-stockcake.jpg'},
  ]);

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className='container mt-4'>
        <div className='row'>
          <div className='col-4 mb-2'>
            <DishForm />
          </div>
          <div className='col-4 mb-2'>
            <Dishes dishes={dishes}/>
          </div>
          <div className='col-4 mb-2'>
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
};

export default UberEats;