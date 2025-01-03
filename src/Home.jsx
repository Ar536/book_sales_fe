import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function Home() { {/*Home adalah parent*/}
    return(
        <> {/*bisa <div></div> atau <></>  */}
            <Header/>
            <Main tech="Laravel" btn="Belajar React"/> {/*bisa dianggap elemen ketig tiganya dan tiga tiganya adalah child*/}
            <Footer/>
        </>
    );
}

export default Home;
// export {Header, Main, Footer}