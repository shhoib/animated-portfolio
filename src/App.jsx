import './app.scss'
import Navbar from './components/navbar/navbar';
// import Hero from './components/hero/hero';
// import Parallex from './components/parallex/parallex';
// import Services from './components/services/services';
// import Portfolio from './components/portfolio/portfolio';
// import Contact from './components/contact/contact';
import Cursor from './components/cursor/cursor';

const App = () => {
  return <div>
    <Cursor/>
    <section>
     <Navbar/>  
     {/* <Hero/> */}
    </section>
    {/* <section id='Services'><Parallex type='services'/></section> */}
    {/* <section><Services/></section> */}
    {/* <section id='Portfolio'><Parallex type='portfolio'/></section> */}
    {/* <Portfolio/> */}
    {/* <section id='Contact'><Contact/></section> */}
  </div>;
};

export default App;
