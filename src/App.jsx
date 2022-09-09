import { PreHeader, Header, CardPane, Carousel, About, Contact, Footer } from "./Website/Website";
import Login from './Website/Login';
import MainPage from "./MainPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (


    <>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainPage />} />

        {/* <Route path='/' render={props =>
        // <MainPage/>
          // <>
          //   <PreHeader />
          //   <Header />
          //   <Carousel />
          //   <CardPane />
          //   <About />
          //   <Contact />
          // </>
        } /> */}



      </Routes>

    </>


  );
}

export default App;