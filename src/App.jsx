import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<About />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
