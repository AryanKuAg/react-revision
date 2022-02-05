import Header from "./components/Header";
import Footer from "./components/Footer";
import ClassHeader from "./components/ClassHeader";

function App() {
  let my_name = null;
  return (
    <>
      <center>
        <h1>Hello handsome {my_name ?? "yes"}</h1>
        <Header />
        <Footer />
        <ClassHeader />
      </center>
    </>
  );
}

export default App;
