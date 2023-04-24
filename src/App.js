import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
    return(
        <div className="app">
            <Navbar />
            <div className="content">
                <Main />
            </div>
        </div>
    )
} 

export default App;
