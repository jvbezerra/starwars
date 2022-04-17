type Character = {
  name: string,
  gender: string,
  eye_color: string,
  hair_color: string,
  height: string,
  mass: string,
  skin_color: string,
  birth_year: string,
  homeworld: string,
  films: string,
  species: string[],
}

type SwapiResponse<T> = {
  count: number,
  results: T
}