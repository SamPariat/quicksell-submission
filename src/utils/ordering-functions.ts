import {
  type Grouping,
  type Ordering,
  type Ticket,
} from '../types';
import { group } from './grouping-functions';

const orderByPriorityDescendingAfterGrouping = (
  groupedTickets: Record<string, Ticket[]>
) => {
  const sortedGroupedTickets: Record<
    string,
    Ticket[]
  > = {};

  for (const [
    priority,
    ticketsArr,
  ] of Object.entries(groupedTickets)) {
    sortedGroupedTickets[priority] = [
      ...ticketsArr,
    ].sort((a, b) => b.priority - a.priority);
  }

  return sortedGroupedTickets;
};

const orderByTitleAscendingAfterGrouping = (
  groupedTickets: Record<string, Ticket[]>
) => {
  const sortedGroupedTickets: Record<
    string,
    Ticket[]
  > = {};

  for (const [
    title,
    ticketsArr,
  ] of Object.entries(groupedTickets)) {
    sortedGroupedTickets[title] = [
      ...ticketsArr,
    ].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return sortedGroupedTickets;
};

export const groupThenOrder = (
  grouping: Grouping,
  ordering: Ordering,
  tickets: Ticket[]
) => {
  const groupedTickets = group(grouping, tickets);

  let orderedAfterGroupedTickets: Record<
    string,
    Ticket[]
  > = {};
  switch (ordering) {
    case 'Priority':
      orderedAfterGroupedTickets =
        orderByPriorityDescendingAfterGrouping(
          groupedTickets
        );
      break;
    case 'Title':
      orderedAfterGroupedTickets =
        orderByTitleAscendingAfterGrouping(
          groupedTickets
        );
      break;
    default:
      throw new Error(
        'Invalid ordering specified'
      );
  }

  return orderedAfterGroupedTickets;
};
