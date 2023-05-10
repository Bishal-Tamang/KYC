'use client'
import './App.css';
import './index.css'
import './page.scss'
import { Navbar, Header, Kyc, Solution, Usecase, Footer} from '../../components/index'
const  App=()=> {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Kyc />
        <Solution />
        <Usecase />
        <Footer /> 
    </div>
  )
}

export default App;