import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: 'text-sm md:text-xl',
          duration: 4000,
          style: {
            background: '#0284c7',
            padding: '20px',
            color: '#ffffff',
          },

          // Default options for specific types


        }}>

      </Toaster>
    </div>
  );
}

export default App;
