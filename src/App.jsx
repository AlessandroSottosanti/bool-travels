import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './components/AppLayout';
import TravelersPage from './pages/TravelersPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/travelers' element={<TravelersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
