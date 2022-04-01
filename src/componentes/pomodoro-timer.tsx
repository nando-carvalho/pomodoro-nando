import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from '../componentes/button';
import { Timer } from '../componentes/timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  LongRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Working" onClick={() => console.log(1)}></Button>
        <Button text="Stop" onClick={() => console.log(1)}></Button>
        <Button text="Go" onClick={() => console.log(1)}></Button>
      </div>
      <div className="details">
        <p>Teste</p>
        <p>Teste</p>
        <p>Teste</p>
        <p>Teste</p>
      </div>
    </div>
  );
}
