import ToolBar from '../../components/ToolBar/ToolBar.tsx';
import DishForm from '../../components/DishForm/DishForm.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import Dishes from '../../components/Dishes/Dishes.tsx';

const UberEats = () => {
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
            <Dishes />
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