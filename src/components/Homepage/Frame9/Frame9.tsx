import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../../_resets.module.css';
import classes from './Frame9.module.css';

interface Props {
  className?: string;
}
/* @figmaId 212:339 */
export const Frame9: FC<Props> = memo(function Frame9(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.startTradingNow}>Start Trading Now</div>
    </div>
  );
});
