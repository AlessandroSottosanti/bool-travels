import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './components/AppLayout';
import TravelersPage from './pages/TravelersPage'
import FormPage from './pages/FormPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/travelers/:slug' element={<TravelersPage />} />
            <Route path='/formpage' element={<FormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
