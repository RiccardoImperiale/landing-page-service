import AboutUs from "./components/AboutUs"
import Categories from "./components/Categories"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"

function App() {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Stats />
                <AboutUs />
                <Categories />
            </main>
        </>
    )
}

export default App
