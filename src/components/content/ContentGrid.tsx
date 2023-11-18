import { type Ticket } from '../../types';
import Card from '../cards/Card';
import Title from '../titles/Title';
import classes from './ContentGrid.module.css';

type ContentGridProps = {
  title: string;
  tickets: Ticket[];
};

export default function ContentGrid({
  title,
  tickets,
}: ContentGridProps) {
  return (
    <div className={classes.content}>
      <Title
        title={title}
        itemCount={tickets.length ?? 0}
      />
      {tickets.map((ticket) => (
        <Card
          key={ticket.id}
          id={ticket.id}
          tag={ticket.tag[0]}
          title={ticket.title}
        />
      ))}
    </div>
  );
}
