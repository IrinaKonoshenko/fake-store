import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Home,
  Product,
  ProductList,
  Profile,
  SignIn,
  SignUp,
} from "./pages";
import { Footer, Header } from "./components";

function App() {
  /// isAuth

  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          {/** if !isAuth redirect to /sign-in */}
          <Route path="/cart" element={<Cart />} />
          {/** if isAuth redirect to / */}
          <Route path="/sign-in" element={<SignIn />} />
          {/** if isAuth redirect to / */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
