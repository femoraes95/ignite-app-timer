import { Play } from 'phosphor-react';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor=""> durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>8</span>
          <span>8</span>
          <Separator>:</Separator>
          <span>8</span>
          <span>8</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
