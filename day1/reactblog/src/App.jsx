import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Nav from './Navbar'
import FeaturedSection from './FeaturedSection'
import AddPost from './AddPost'

function App() {

    return (
        <>
            <Nav />
            <FeaturedSection />
            <AddPost />
        </>
    )
}

// Navbar
// Featured posts - card
// add Posts

export default App
