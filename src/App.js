import './App.css';
import { motion, useScroll } from "framer-motion"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';
import { Header } from './components/Header';

function AppRouter() {
    const { scrollYProgress } = useScroll()
    return (
        <Router>
            {/* <motion.div
                className="progress-bar my-10"
                style={{ scaleX: scrollYProgress }}
            /> */}
            <div className='bg-gradient-to-r from-[#0e0c27] from-60% via-purple-950 via-100% to-white to-100%'>
                {/* bg-[#0e0c27] */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<GetInTouch />} />
                    {/* <Route exact path="/services" element={<Services />} /> */}
                    {/* <Route exact path="/about" element={<About />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
