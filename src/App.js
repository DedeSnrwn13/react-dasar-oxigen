import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

function App() {
  const administrators = [
    "Muhammad Ikhwan Fathulloh",
    "Fatiya Robbaniyah",
  ];

  const listAdministrator = administrators.map((admin) => {
    return (
      <ListGroup key={admin.toString()}>
          <ListGroup.Item>{admin}</ListGroup.Item>
      </ListGroup>
    );
  });

  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <h1>Daftar Pengurus Oxigen</h1>
        {listAdministrator}
      </header>

      <Footer />
    </div>
  );
}

export default App;
