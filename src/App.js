import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='App max-w-[1440px] mx-auto'>
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
