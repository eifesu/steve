import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import "./styles/App.css";
import { useEffect, useState } from "react";
import io from 'socket.io-client'

const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:4000`);
    console.log(newSocket);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="main">
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};
export default App;
