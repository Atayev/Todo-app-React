
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import './index.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
