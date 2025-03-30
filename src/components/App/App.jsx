import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as hooks from '@hooks'

import ProtectedRoute from '@components/ProtectedRoute'
import Navbar from '@components/Navbar'
import Home from '@routes/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const protectRoute = (path, Component) => (
    <Route
        path={path}
        element={
            <ProtectedRoute>
                <Component />
            </ProtectedRoute>
        } />
)

const Content = () => (
    
    <article className="w-full h-[calc(100vh - 48px)] p-3 text-center">
        
        <Routes>
            
            <Route exact path="/" element={<Home />} />
            
            {/* {protectRoute('/profile', Profile)} */}
        
        </Routes>
    
    </article>
    
)

const App = () => {
    
    const theme = useWireValue(store.theme)
    
    hooks.useDebug()
    hooks.useTheme()
    
    return (
        
        <Router>
            
            <div
                className="relative flex flex-col w-full min-h-screen overflow-y-auto App scrollbar-minimal"
                data-theme={theme === 'dark' ? 'business' : theme}>
                
                <div className="absolute top-0 hidden w-px h-screen border border-red-500 DEBUG-PAGE-LINE-V left-1/2" />
                <div className="hidden w-screen h-px border border-red-500 DEBUG-PAGE-LINE-H absolute-centered" />
                
                <Navbar />
                
                <Content />
                
                {/* {Object.keys(dialogs).map(it => {
                    const Component = dialogs[it]
                    return <Component key={`dialog-${it}`} />
                })} */}
            
            </div>
        
        </Router>
        
    )
    
}

export default App
