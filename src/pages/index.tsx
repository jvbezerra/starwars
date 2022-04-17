import axios from 'axios'
import useSWR from 'swr/immutable'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { useURLState } from '../hooks/useURLState'

import Header from '../components/Header'
import CharacterList from '../components/CharacterList'
import CharacterModal from '../components/CharacterModal'
import Pagination from '../components/Pagination'

const Home: React.FC<{ fallbackData: SwapiResponse<Character[]> }> = ({ fallbackData }) => {
  const [page, setPage] = useURLState<number>('page', 1)
  const [selectedCharacter, setSelectedCharacter] = useURLState<string>('character', '')
  const [character, setCharacter] = useState<Character | undefined>()

  const { data } = useSWR<SwapiResponse<Character[]>>(
    `https://swapi.dev/api/people?page=${page}`,
    { fallbackData: page === 1 ? fallbackData : undefined }
  )

  useEffect(() => {
    if (selectedCharacter && data?.results) {
      const character = data?.results.find(character => character.name == selectedCharacter)
      setCharacter(character)
    }
  }, [selectedCharacter, data?.results])

  return (
    <>
      <Header/>
      
      <main>
        <CharacterList
          characters={data?.results}
          onSelect={setSelectedCharacter}
        />

        {character &&
          <CharacterModal
            character={character}
            onClose={() => {
              setCharacter(undefined)
              setSelectedCharacter('')
            }}
          />
        }
      </main>

      <Pagination
        page={page}
        count={Math.ceil(data?.count! / 10)}
        onChange={(_, page) => setPage(page)}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: fallbackData } = await axios.get('https://swapi.dev/api/people')
  return { props: { fallbackData } }
}

export default Home