import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';

function App() {
    const api = process.env.REACT_APP_API_KEY;
    console.log(api);
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/results' element={<SearchResults />} />
        </Routes> 
    </Layout>

  );
}

export default App;
