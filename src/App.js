import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./NotFound/NotFound";
import Purchase from "./Pages/About/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Portfolio from "./Pages/About/Portfolio";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyOrders from "./Pages/DashBoard/MyOrders";
import AddReview from "./Pages/DashBoard/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./Pages/DashBoard/MyProfile";
import AllCustomers from "./Pages/DashBoard/AllCustomers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Blogs from "./Pages/Blogs";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageProducts from "./Pages/DashBoard/ManageProducts";
import Payment from "./Pages/DashBoard/Payment";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="addProducts"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allCustomers"
            element={
              <RequireAdmin>
                <AllCustomers></AllCustomers>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
