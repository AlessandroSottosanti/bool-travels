import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './components/AppLayout';
import TravelersPage from './pages/TravelersPage'
import FormTravelPage from './pages/FormTravelPage';
import FormTravelersPage from './pages/FormTravelersPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/travelers/:slug' element={<TravelersPage />} />
            <Route path='/formtravelpage' element={<FormTravelPage />} />
            <Route path='/formtravelerspage' element={<FormTravelersPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
