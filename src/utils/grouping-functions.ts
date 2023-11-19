import {
  type Ticket,
  type Grouping,
} from '../types';

const statuses = [
  'Todo',
  'In progress',
  'Backlog',
  'Cancelled',
  'Done',
];

const groupByStatus = (
  tickets: Ticket[]
): Record<string, Ticket[]> => {
  const result = tickets.reduce(
    (accumulate, ticket) => {
      const { status } = ticket;

      if (accumulate[status] === undefined) {
        accumulate[status] = [];
      }
      accumulate[status].push(ticket);

      return accumulate;
    },
    {} as Record<string, Ticket[]>
  );

  for (const status of statuses) {
    if (result[status] === undefined) {
      result[status] = [];
    }
  }

  return result;
};

const groupByUser = (tickets: Ticket[]) =>
  tickets.reduce((accumulate, ticket) => {
    const { userId } = ticket;

    if (accumulate[userId] === undefined) {
      accumulate[userId] = [];
    }
    accumulate[userId].push(ticket);

    return accumulate;
  }, {} as Record<string, Ticket[]>);

const groupByPriority = (
  tickets: Ticket[]
): Record<string, Ticket[]> =>
  tickets.reduce((accumulate, ticket) => {
    const { priority } = ticket;
    const stringVal = priority.toString();

    if (accumulate[stringVal] === undefined) {
      accumulate[stringVal] = [];
    }
    accumulate[stringVal].push(ticket);

    return accumulate;
  }, {} as Record<string, Ticket[]>);

export const group = (
  grouping: Grouping,
  tickets: Ticket[]
) => {
  let groupedTickets: Record<string, Ticket[]> =
    {};

  switch (grouping) {
    case 'Status':
      groupedTickets = groupByStatus(tickets);
      break;
    case 'Priority':
      groupedTickets = groupByPriority(tickets);
      break;
    case 'User':
      groupedTickets = groupByUser(tickets);
      break;
    default:
      throw new Error(
        'Invalid grouping specified'
      );
  }

  return groupedTickets;
};
