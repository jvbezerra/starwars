import Header from '../components/Header'
import CharacterList from '../components/CharacterList'
import Pagination from '../components/Pagination'

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main>
        <CharacterList />
      </main>
      <Pagination count={10}/>
    </>
  )
}

export default Home