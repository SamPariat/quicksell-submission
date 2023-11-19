import classes from './Avatar.module.css';

type AvatarProps = {
  username: string;
  isActive: boolean;
};

export default function Avatar({
  username,
  isActive,
}: AvatarProps) {
  const getInitials = () => {
    const words = username.split(' ');
    const arrayOfFirstLetter = words.map((word) =>
      word[0].toUpperCase()
    );
    return arrayOfFirstLetter.join('');
  };

  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        {getInitials()}
      </div>
      <div
        className={classes.active_circle}
        style={{
          border: isActive
            ? 'transparent'
            : '1px solid var(--bg-grey)',
          backgroundColor: isActive
            ? 'var(--active)'
            : 'var(--white)',
        }}
      ></div>
    </div>
  );
}
