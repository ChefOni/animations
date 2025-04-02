import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx"
import Micro from "./pages/Micro.tsx";
import Scroll from "./pages/Scroll.tsx";

import Layout from "./layout.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<Layout/>} >
                    <Route index element={<Home />} />
                    <Route path="/micro" element={<Micro />} />
                    <Route path="/scroll" element={<Scroll />} />
                </Route>

            </Routes>
        </Router>
    );
}

export default App;
