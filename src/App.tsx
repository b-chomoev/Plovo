import Home from './containers/Home/Home';
import NewDish from './containers/NewDish/NewDish';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './containers/CheckOut/CheckOut';
import Order from './containers/Order/Order';
import EditDish from './containers/EditDish/EditDish';
import Orders from './containers/Orders/Orders';
import Layout from './components/Layout/Layout';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/newDish" element={<NewDish />}/>
          <Route path="/editDish/:id" element={<EditDish />}/>
          <Route path="/checkout" element={<CheckOut />}>
            <Route path="continue" element={<Order />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
