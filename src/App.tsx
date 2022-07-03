import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/results/:query' element={<SearchResults />} />
        </Routes> 
    </Layout>

  );
}

export default App;
