import axios from 'axios'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import useSWR from 'swr/immutable'
import { useQuery } from '../hooks/useQuery'

import Header from '../components/Header'
import CharacterList from '../components/CharacterList'
import CharacterModal from '../components/CharacterModal'
import Pagination from '../components/Pagination'

const Home: React.FC<{ fallbackData: SwapiResponse<Character[]> }> = ({ fallbackData }) => {
  const [page, setPage] = useState(1)
  const [selectedCharacter, setCharacter] = useState<Character | undefined>()

  const { getParam, setParam } = useQuery()
  const { data } = useSWR<SwapiResponse<Character[]>>(
    `https://swapi.dev/api/people?page=${page}`,
    { fallbackData: page === 1 ? fallbackData : undefined }
  )

  useEffect(() => {
    const page = Number(getParam('page'))
    if (page) setPage(page)
  }, [])

  return (
    <>
      <Header/>
      
      <main>
        <CharacterList
          characters={data?.results}
          onSelect={name => {
            const character = data?.results.find(character => character.name === name)
            setCharacter(character)
          }}
        />

        {selectedCharacter &&
          <CharacterModal
            character={selectedCharacter}
            onClose={() => setCharacter(undefined)}
          />
        }
      </main>

      <Pagination
        page={page}
        count={Math.ceil(data?.count! / 10)}
        onChange={(_, page) => {
          setParam('page', page.toString())
          setPage(page)
        }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: fallbackData } = await axios.get('https://swapi.dev/api/people')
  return { props: { fallbackData } }
}

export default Home