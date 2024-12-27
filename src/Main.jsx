import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import Abut from './componets/page/abut'
import Connect from './componets/page/Connect'
import Page1 from './componets/page/page1'
import Page2 from './componets/page/Page2'
import Page3 from './componets/page/Page3'
import New from './componets/page/new'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../src/assets/css/index.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/abut" element={<Abut/>} />
                <Route path='/connect'element={<Connect/>}/>
                <Route path='/page1'element={<Page1/>}/>
                <Route path='/page2' element={<Page2/>}/>
                <Route path='/page3' element={<Page3/>}/>
                <Route path='/new' element={<New/>}/>
              </Routes>
        </Router>
  </StrictMode>
)
