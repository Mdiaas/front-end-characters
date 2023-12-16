import { useEffect, useState } from 'react';
import { StyledContainer } from './components/Styles'
import { Table } from './components/Table'
import axios from 'axios';
import { Loading } from './components/Loading';
import { SaveForm } from './components/SaveForm';
import { Filter } from './components/Filter';

export interface CharacterType {
  id: number;
  name: string;
}

function App() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(true);
  const [characterId, setCharacterId] = useState()
  const [characterName, setCharacterName] = useState()
  const [searchId, setSearchId] = useState()
  const loadCharacters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/characters');
      console.log(response)
      setCharacters(response.data);
    } catch (error) {
      console.error('failed to load server data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCharacter = async () => {
    if(searchId == "") {
      return loadCharacters()
    }
    try {
      const response = await axios.get('http://localhost:8080/characters/' + searchId);
      setCharacters([response.data]);
    } catch (error) {
      console.error('failed to load server data:', error);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  const save = async () => {
    try {
      const postData = {
        id: Number(characterId),
        name: characterName
      }
     if(postData.id == 0 || postData.name == "") {
      alert("error to save, verify your params")
      return;
     }
      await axios.post('http://localhost:8080/characters', postData);
    } catch (error) {
      console.error('failed to load server data:', error);
    } finally {
      loadCharacters()
    }
  };

  const deleteCharacter = async (id) => {
    try {
      await axios.delete('http://localhost:8080/characters/' + id);
    } catch (error) {
      console.error('failed to load server data:', error);
    } finally {
      loadCharacters()
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);
  
  if (loading) {
    return <Loading />;
  }

  return (
      <StyledContainer>
        <Filter setSearchId={setSearchId} loadCharacter={loadCharacter}/>
        <Table characters={characters} deleteCharacter={deleteCharacter}/>
        <SaveForm save={save} setCharacterId={setCharacterId} setCharacterName={setCharacterName} />
      </StyledContainer>
  )
}

export default App
