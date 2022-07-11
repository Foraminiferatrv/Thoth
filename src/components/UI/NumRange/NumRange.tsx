import classes from './NumRange.module.scss';
import NumInput from '../../NumInput/NumInput';

interface Props {
  changeInterpretValueLimits: (targetInterpretId: number, scaleIndex: number, fromLimit: number, toLimit: number) => object,
  interpretId: number,
  valueLimits: {
    from: number,
    to: number,
  },
  scaleIndex: number,
}

function NumRange({ changeInterpretValueLimits, interpretId, valueLimits, scaleIndex }: Props): JSX.Element {
  return (
    <div className={classes.NumRange}>
      <div className={classes.NumBlock}>
        <span>Від:</span>
        <NumInput
          getInputValue={(value: number) => changeInterpretValueLimits(interpretId, scaleIndex, value, valueLimits.to)}
          numInputValue={valueLimits.from}
        />
      </div>
      <div className={classes.NumBlock}>
        <span>До:</span>
        <NumInput
          getInputValue={(value: number) => changeInterpretValueLimits(interpretId, scaleIndex, valueLimits.from, value)}
          numInputValue={valueLimits.to}
        />
      </div>
    </div>
  );
}

export default NumRange;