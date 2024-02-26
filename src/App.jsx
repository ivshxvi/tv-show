import './App.css'
import * as Pages from './pages'
import { Header } from './components'
import { SearchProvider } from './contexts/index.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Pages.HomePage />}></Route>
            <Route path='/shows'>
              <Route index element={<Pages.ShowsPage />}></Route>
              <Route path='/shows/:id' element={<Pages.ShowPage />}></Route>
            </Route>
            <Route path='/search' element={<Pages.SearchPage />}></Route>
            <Route path='*' element={<Pages.NotFoundPage />}></Route>
          </Route>
        </Routes>
      </SearchProvider>
    </>
  )
}

export default App
