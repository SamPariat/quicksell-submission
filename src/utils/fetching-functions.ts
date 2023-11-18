import { useApiStore } from '../../store';
import request from '../api';
import { Grouping, Ordering } from '../types';
import { groupThenOrder } from './ordering-functions';
import { createActivityRecord } from './user-activity-functions';

export const fetchData = async () => {
  try {
    const response = await request('get', null);

    const result = response.data;
    const { tickets, users } = result;

    const grouping: Grouping =
      (localStorage.getItem(
        'grouping'
      ) as Grouping) ?? 'Status';
    const ordering: Ordering =
      (localStorage.getItem(
        'ordering'
      ) as Ordering) ?? 'Priority';

    const sortedAndOrderedTickets =
      groupThenOrder(grouping, ordering, tickets);

    const userActivityRecord =
      createActivityRecord(users);

    useApiStore.setState({
      tickets: sortedAndOrderedTickets,
      userActivity: userActivityRecord,
      apiResults: result,
    });
  } catch (e) {
    throw e;
  }
};
