import { StyledButton, StyledTable } from "./styles";

export function Table(props){
  const { characters, deleteCharacter } = props;

  return (
    
    <StyledTable>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
      {characters.length > 0 ? (
          characters.map((character) => (
            <tr key={character.id}>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td><StyledButton onClick={() => deleteCharacter(character.id)}>delete</StyledButton></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No data available</td>
          </tr>
        )}
      </tbody>
    </StyledTable>
  )
}