import 'bootstrap/dist/css/bootstrap.min.css';
import AdministradorColor from './components/AdministradorColor';
import './App.css'
import FooterFedeLedesma from './components/FooterFedeLedesma';
function App() {
  return (
    <>
    <section className='container d-flex justify-content-center mainPage'>
     <AdministradorColor></AdministradorColor>
    </section>
     <FooterFedeLedesma></FooterFedeLedesma>
    </>
  )
}

export default App
