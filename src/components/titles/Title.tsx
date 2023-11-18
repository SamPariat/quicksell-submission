import {
  CheckCircle2,
  MoreHorizontal,
  Plus,
} from 'lucide-react';

import classes from './Title.module.css';

type TitleProps = {
  title: string;
  itemCount: number;
};

export default function Title({
  title,
  itemCount,
}: TitleProps) {
  return (
    <div className={classes.box}>
      <div>
        <CheckCircle2 size={12} />
        <p className={classes.header}>{title}</p>
        <p className={classes.itemcount}>
          {itemCount}
        </p>
      </div>
      <div className={classes.icons}>
        <Plus
          size={12}
          className={classes.icon}
        />
        <MoreHorizontal
          size={12}
          className={classes.icon}
        />
      </div>
    </div>
  );
}
