import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from '../componentes/button';
import { Timer } from '../componentes/timer';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log(1)}></Button>
    </div>
  );
}
