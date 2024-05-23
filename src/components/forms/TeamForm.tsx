import { useState, useEffect } from 'react';
import { Team } from '../../types/Team';

interface TeamFormState {
    label: string;
    player1: string;
    player2: string;
}

const TeamForm = () => {
  const [inputs, setInputs] = useState<TeamFormState>({
    label: '',
    player1: '',
    player2: ''
  });

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleSubmit = () => {
    const team = new Team(inputs.label, inputs.player1, inputs.player2);
    this.props
  }

  return <>
    <form onSubmit={handleSubmit}>
    <label>Team Name:
      <input
        type="text"
        name="label"
        value={inputs.label || ""}
        onChange={handleChange}
      />
    </label>
    <label>Player1:
      <input
        type="text"
        name="player1"
        value={inputs.player1 || ""}
        onChange={handleChange}
      />
    </label>
    <label>Player2:
      <input
        type="text"
        name="player2"
        value={inputs.player2 || ""}
        onChange={handleChange}
      />
    </label>
        <input type="submit" />
    </form>
  </>
}

export default TeamForm
