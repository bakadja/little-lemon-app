import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { AppContainer } from './styles/components.styles';

function App() {
  return (
    <AppContainer>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
