import {
  MoreHorizontal,
  Plus,
} from 'lucide-react';

import { useApiStore } from '../../../store';
import { priority } from '../../utils';
import Avatar from '../cards/Avatar';
import { IconMap } from './IconMap';
import classes from './Title.module.css';

type TitleProps = {
  title: string;
  itemCount: number;
};

export default function Title({
  title,
  itemCount,
}: TitleProps) {
  const groupSetting = useApiStore(
    (state) => state.groupSetting
  );
  const userActivity = useApiStore(
    (state) => state.userActivity
  );
  const icon = IconMap(
    groupSetting === 'Priority'
      ? priority(title)
      : title
  );

  return (
    <div className={classes.box}>
      <div>
        {groupSetting === 'Status' ? (
          icon
        ) : groupSetting === 'User' ? (
          <Avatar
            username={userActivity[title].name}
            isActive={
              userActivity[title].available
            }
          />
        ) : (
          icon
        )}
      </div>
      <div className={classes.title}>
        <p className={classes.header}>
          {groupSetting === 'Status'
            ? title
            : groupSetting === 'User'
            ? userActivity[title].name
            : priority(title)}
        </p>
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
