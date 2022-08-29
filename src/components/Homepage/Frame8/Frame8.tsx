import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../../_resets.module.css';
import classes from './Frame8.module.css';

interface Props {
  className?: string;
}
/* @figmaId 212:342 */
export const Frame8: FC<Props> = memo(function Frame8(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.buyToken}>Buy Token</div>
    </div>
  );
});
