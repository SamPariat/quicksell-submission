import { useQuery } from '@tanstack/react-query';

import ContentGrid from './ContentGrid';
import classes from './MainContent.module.css';
import { fetchData } from '../../utils';
import { useApiStore } from '../../../store';

export default function MainContent() {
  const { status } = useQuery({
    queryKey: ['api', 'quicksell'],
    queryFn: fetchData,
  });

  const { tickets } = useApiStore();
  const entries = Object.entries(tickets);

  if (status === 'pending') {
    return (
      <div className={classes.loading}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className={classes.main_content}>
      {entries.map(([key, value]) => (
        <ContentGrid
          key={key}
          title={key}
          tickets={value}
        />
      ))}
    </main>
  );
}
