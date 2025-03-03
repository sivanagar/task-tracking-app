
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
   
    <Router>
       <div className="min-h-screen bg-stone-50 flex flex-col"> 
       <header className="container mx-auto py-4">
    <NavBar />
    </header>
    <main className="container mx-auto px-4 py-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
   
    </main>
    <footer className='container mx-auto py-4'>
      <Footer />
    </footer>
    </div>
     </Router>
  );
}

export default App;
