import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuery, gql } from "@apollo/client";

const TEST_QUERY = gql`
query {
    allTags{
        id,
        description,
        recipes {
            name,
            description,
            id,
            imageId
        }
    }
} 
`;

function App() {
  const [count, setCount] = useState(0);
  const { data, loading, error } = useQuery(TEST_QUERY);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {loading && <p>{'Loading query...'}</p>}
      {error && <p>{'Error while loading query... ' + error.message}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default App
