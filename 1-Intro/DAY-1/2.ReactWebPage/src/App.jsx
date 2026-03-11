import Counter from "./Components/Counter";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/Main-content";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  )
}

export default App;