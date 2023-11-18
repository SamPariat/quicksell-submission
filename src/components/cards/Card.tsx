import classes from './Card.module.css';

type CardProps = {
  id: string;
  title: string;
  tag: string;
};

export default function Card({
  id,
  title,
  tag,
}: CardProps) {
  return (
    <section className={classes.card}>
      <div>
        <span className={classes.id}>{id}</span>
      </div>
      <h3 className={classes.title}>{title}</h3>
      <div>
        <span className={classes.tag}>{tag}</span>
      </div>
    </section>
  );
}
