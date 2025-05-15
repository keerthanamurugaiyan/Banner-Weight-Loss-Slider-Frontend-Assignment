import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
// import Task from './Component/Task/Task';
import Layout from './Component/Layout/Layout';
import HeroSection from './Component/HeroSection/HeroSection';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/task" element={<HeroSection/>}/> */}
          </Route>
          
          {/* <Route path="/task" element={<Task/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;