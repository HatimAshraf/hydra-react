import { useEffect, useState } from 'react';
import Card from './components/Card';
import { Header } from './components/Header';
const cardValues = [
  '😅',
  '😡',
  '🥶',
  '👻',
  '🤡',
  '👀',
  '🙏🏻',
  '🧠',
  '😅',
  '😡',
  '🥶',
  '👻',
  '🤡',
  '👀',
  '🙏🏻',
  '🧠',
];
function App() {
  const [cards, setCards] = useState([]);
  const startGame = () => {
    setCards(
      cardValues.map((value, index) => ({
        value,
        id: index,
        isFlipped: false,
        isMatched: false,
      }))
    );
  };

  useEffect(() => {
    startGame();
  }, []);
  return (
    <div className='app'>
      <Header score={3} moves={10} />
      <div className='cards-grid'>
        {cardValues.map((value, index) => (
          <Card key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
