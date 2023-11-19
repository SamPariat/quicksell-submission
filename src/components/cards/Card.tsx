import { useApiStore } from '../../../store';
import { IconMap } from '../titles/IconMap';
import Avatar from './Avatar';
import classes from './Card.module.css';

type CardProps = {
  id: string;
  title: string;
  tag: string;
  userId: string;
  status: string;
};

export default function Card({
  id,
  title,
  tag,
  userId,
  status,
}: CardProps) {
  const groupSetting = useApiStore(
    (state) => state.groupSetting
  );
  const userActivity = useApiStore(
    (state) => state.userActivity
  );
  const icon = IconMap(status);

  return (
    <section className={classes.card}>
      <div className={classes.first}>
        <span className={classes.id}>{id}</span>
        {groupSetting !== 'User' && (
          <Avatar
            username={userActivity[userId].name}
            isActive={
              userActivity[userId].available
            }
          />
        )}
      </div>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.last}>
        <span className={classes.last_icon}>
          {icon}
        </span>
        <span className={classes.tag}>{tag}</span>
      </div>
    </section>
  );
}
