import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import NotFound from './pages/404';
import Internship from './pages/internship';
import Resume from './pages/resume';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            exact
          />

          <Route
            path="/internship-coincap"
            element={<Internship />}
            exact
          />
          <Route
            path="/resume"
            element={<Resume />}
            exact
          />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
