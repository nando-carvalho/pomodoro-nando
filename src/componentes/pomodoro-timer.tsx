import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from '../componentes/button';
import { Timer } from '../componentes/timer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/src_sounds_bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/src_sounds_bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false); //em repouso

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }
    audioStopWorking.play();
  };
  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureRest(false)}></Button>
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
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
