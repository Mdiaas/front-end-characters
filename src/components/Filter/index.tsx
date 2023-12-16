import { StyledFilter } from "./styles";

export function Filter (props) {
  const {setSearchId, loadCharacter} = props
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loadCharacter()
  };
  return (
    <StyledFilter onSubmit={handleSubmit}>
      <label>Filtrar por id:</label>
      <input onChange={(event) => {setSearchId(event.target.value)}}/>
      <button>Filtrar</button>
    </StyledFilter>
  )
}