// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Routes>
//           <Route 
//             path='/' 
//             element={<SearchBooks />} 
//           />
//           <Route 
//             path='/saved' 
//             element={<SavedBooks />} 
//           />
//           <Route 
//             path='*'
//             element={<h1 className='display-2'>Wrong page!</h1>}
//           />
//         </Routes>
//       </>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<SearchBooks />} />
            <Route path='/saved' element={<SavedBooks />} />
            <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;

