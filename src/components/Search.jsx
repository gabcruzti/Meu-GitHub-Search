import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Search () {
  const [repos, setRepos] = useState([])
  const [termSearched, setTermSearched] = useState('')
  const [reposFiltered, setreposFiltered] = useState([])


  const baseURL = 'https://api.github.com/users/gabcruzti/repos'

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
      setRepos(response.data)
    }
    getData()
  }, [])
  
  function handleSearch (event) {
    setTermSearched(event.target.value)
  }

  useEffect(() => {
    const filtered = repos.filter (repo => {
        return repo.name.includes(termSearched)
    })
    setreposFiltered(filtered)
  }, [repos, termSearched])

  
  return(
    <>
    <input placeholder="Digite o nome do repositorio" onChange={handleSearch}/>
    {reposFiltered.map(repo => {
        return(
            <div className='container'>
                <div className='repos'>
                <a key={repo.id} href={repo.html_url} target="_blank" >{repo.name}</a>
                </div>
            </div>
        )
    })

    }
    
    
    </>
  )
}