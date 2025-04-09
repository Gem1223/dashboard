import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import VerifyOTP from './VerifyOTP';
import Navbar from './Navbar';

import About from './about';
import Contact from './contact';
import FoodOrderApp from './Food';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <main style={{ 
        paddingTop: '80px',
        minHeight: 'calc(100vh - 80px)'
      }}>
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route path="/Food" element={<Layout><FoodOrderApp /></Layout>} /> 
        <Route path="/About" element={<Layout><About /></Layout>} />
         <Route path="/contact" element={<Layout><Contact /></Layout>} />
         
        

        {/* Routes WITHOUT Navbar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
