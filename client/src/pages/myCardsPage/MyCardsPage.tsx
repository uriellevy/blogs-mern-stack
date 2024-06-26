import { useContext, useEffect } from 'react'
import MyCardsList from './components/MyCardsList'
import { CardContext } from '../../context/CardContext';
import { CardContextType } from '../../interfaces/interfaces';

const MyCardsPage = () => {
  const { cards, getMyCards, deleteCard } = useContext(CardContext) as CardContextType;
  useEffect(() => {
    getMyCards();
  }, [])
  
  return (
    <div className='container mx-auto p-4'>
      <MyCardsList cards={cards} deleteCard={deleteCard}/>
    </div>
  )
}

export default MyCardsPage