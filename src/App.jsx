import AboutUs from "./components/AboutUs"
import Categories from "./components/Categories"
import Courses from "./components/Courses"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reviews from "./components/Reviews"
import Stats from "./components/Stats"
import Teachers from "./components/Teachers"

function App() {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Stats />
                <AboutUs />
                <Categories />
                <Courses />
                <Reviews />
                <Teachers />
            </main>
        </>
    )
}

export default App
