import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Header from "./UI/header"
import Footer from "./UI/footer"
import Product from "./pages/product"
import Detail from "./UI/details"
import About from "./pages/about"
import Cart from "./pages/cart"
import Contact from "./pages/contact"

function App() {
    return (

        <BrowserRouter>
            {/* <Detail  /> */}
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Product' element={<Product />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/About' element={< About />} />
                <Route path='/Cart' element={< Cart />} />
                <Route path='/Contact' element={< Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App;