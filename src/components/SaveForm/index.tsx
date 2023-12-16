import { StyledForm } from "./styles";

export function SaveForm(props){
  const {save, setCharacterId, setCharacterName} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    save()
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Id
      </label>
      <input onChange={event => setCharacterId(event.target.value)} />
      <label>
        Name
      </label>
      <input onChange={event => setCharacterName(event.target.value)}/>
      <button>
        Save / Update
      </button>
    </StyledForm>
  )
}