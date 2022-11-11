import ShopSection from './Components/shopSection';
import Landing from './Components/landing';
import Service from './Components/service';
import Contact from './Components/contact';
import Footer from './Components/footer';
import AddedCartItem from './Components/addedCartItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
    return <div>
            <Landing />
            <ShopSection />
            <Service />
            <Contact />
            <Footer />
        </div>;
    
}

export default App;