import { PreHeader, Header, CardPane, Carousel, About, Contact, Footer } from "./Website/Website";
import Login from './Website/Login';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function MainPage() {
    return (


        <>

            <PreHeader />
            <Header />
            <Carousel />
            <CardPane />
            <About />
            <Contact />

            <Footer />

        </>


    );
}

export default MainPage;