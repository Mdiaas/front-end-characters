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
      
      {characters.map((characters) => {
        return (
          <tr key={characters.id}>
            <td width="25%">{characters.id}</td>
            <td>{characters.name}</td>
            <td><StyledButton onClick={() => deleteCharacter(characters.id)}>delete</StyledButton></td>
          </tr>
        )
      })}
      </tbody>
    </StyledTable>
  )
}