import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import {Routes, Route} from "react-router-dom"
import Authentication from "./components/Authentication";
import "./styles/App.css"

const App = () => {
    return <div className="main">
        <Header />
        <Container>
          <Routes>
            <Route path="/auth" element={<Authentication/>} />
          </Routes>
        </Container>
        <Footer />
          
          
    </div>;

}
export default App
