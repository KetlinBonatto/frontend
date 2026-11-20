
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/index.css'
import './styles/testimonials.css'

import Home from './pages/Home'
import Login from './pages/auth/Login'
import Cadastro from './pages/auth/Cadastro'
import Solucao from './pages/Solucao'
import { ThemeProvider } from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/solucoes/:id" element={<Solucao />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
