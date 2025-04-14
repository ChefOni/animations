import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx"

import Gsap from "./app/learning_gsap/day1"

import Layout from "./layout.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<Layout/>} >
                    <Route index element={<Home />} />
                    <Route path ="gsap" element={<Gsap/>} />
                </Route>


            </Routes>
        </Router>
    );
}

export default App;
