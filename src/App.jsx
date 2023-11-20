import { Outlet } from 'react-router-dom';
import './App.css'
import NavTabs from './components/navbar';
import Footer from './components/footer';


function App() {

  return (
    <>
    <NavTabs/>
    <main className="backgroundImage">
      <Outlet />
    </main>
      <Footer/>

  
  </>
  )
}

export default App
