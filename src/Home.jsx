import Contact from './components/shared/Contact/index.jsx';
import Footer from './components/shared/Footer/index.jsx';
import Hero from './components/shared/Hero/index.jsx';
import Navbar from './components/shared/Navbar/index.jsx';
import Team from './components/shared/Team/index.jsx';
import Login from './pages/auth/login/index.jsx';
import Register from './pages/auth/register/index.jsx';
import Author from './pages/author/index.jsx';
import Genres from './pages/Genre/index.jsx';


function Home() { {/*Home adalah parent*/}
    return(
        <> {/*bisa <div></div> atau <></>  */}
            {/* <Header/>
            <Main tech="Laravel" btn="Belajar React"/>  bisa dianggap elemen ketig tiganya dan tiga tiganya adalah child */}
            <Navbar/>
            {/* <Login/>
            <Register/> */}
            <Author/>
            <Genres/>
            {/* <Hero/>
            <Team />
            <Contact btn="send"/> */}
            <Footer /> 
        </>
    );
}

export default Home;
// export {Header, Main, Footer}