import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage'
import Home from './pages/Home/Home';
import Profiles from './pages/Profiles/Profiles';

function App() {

  const [records,setRecords] = useLocalStorage('records',[]);

  return (
    <>
    <Router>
      <Routes>

        <Route path = '/' element={<Home setRecords={setRecords} records = {records}/>}/>
        <Route path = '/profiles' element={<Profiles records = {records}/>}/>
        
      </Routes>
    </Router>
      
    </>
  )
}

export default App
