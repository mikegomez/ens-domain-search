import React from 'react';
// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import ExpiringDomainsPage from './pages/ExpiringDomainsPage/ExpiringDomainsPage';
import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Routes>
            {/* ... other routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:domain" element={<SearchResultPage />} />
            <Route path="/expiring" element={<ExpiringDomainsPage />} />
            {/* Add catch-all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;




// src/App.js
// function App() {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/search/:domainName" element={<SearchResultPage />} />
//           <Route path="/expiring" element={<ExpiringDomainsPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

