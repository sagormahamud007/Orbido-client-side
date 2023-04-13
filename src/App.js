import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

function App() {
  return (
    <div style={{background:"black"}}>
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
