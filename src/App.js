import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './Pages/AddItem/Additem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ItemDetail from './Pages/Home/ItemDetail/ItemDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/item/:itemId' element={

          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>

        }></Route>
        <Route path='/manage' element={

          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>

        }></Route>
        <Route path='/additem' element={

          <RequireAuth>
            <Additem></Additem>
          </RequireAuth>

        }></Route>
        <Route path='/myitems' element={

          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>

        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
