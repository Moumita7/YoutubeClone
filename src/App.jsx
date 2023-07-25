
// import './App.css'
// import Body from './components/Body'
// import Head from './components/Head'

// function App() {


//   return (
//     <>
//     <Head/>
//     <Body/>

    
//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react';
import './App.css'; // Import the Tailwind CSS styles
import Head from './components/Head';
// import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './redux/store';
import Sidebar from "../src/components/Sidebar"
import AllRoutes from './utils/AllRoutes';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
    <Provider store={store}>

  
      <Head darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* <Body/> */}
      <div className='flex'>

    <Sidebar/>
      
      <AllRoutes/>
      </div>
    </Provider>
    
    </div>
  );
}

export default App;


