import './App.css';
import { Styles } from './components/GlobalStyle/Styles';
import { Card } from './components/Card/Card';
import { ProvedorTema } from './components/ProvedorTema/ProvedorTema';

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
