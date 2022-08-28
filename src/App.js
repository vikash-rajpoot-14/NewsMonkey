
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
     <Navbar title='Wordcounter'/>
     <div className='container my-3'>
     <Textform heading='Welcome to wordcounter'/>
     </div>
    </>
  );
}

export default App;
