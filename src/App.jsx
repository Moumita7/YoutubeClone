
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
import Body from './components/Body';



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
  
      <Head darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Body/>
    
    </div>
  );
}

export default App;


