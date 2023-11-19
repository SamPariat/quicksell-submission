import { create } from 'zustand';

import {
  type QuicksellApi,
  type Grouping,
  type Ordering,
  type Ticket,
} from '../src/types';
import { groupThenOrder } from '../src/utils';

interface ApiState {
  userActivity: Record<
    string,
    { available: boolean; name: string }
  >;
  tickets: Record<string, Ticket[]>;
  apiResults: QuicksellApi;
  groupSetting: Grouping;
  orderSetting: Ordering;
  setTickets: (
    grouping: Grouping,
    ordering: Ordering
  ) => void;
}

const setLocalStorage = (
  grouping: Grouping,
  ordering: Ordering
) => {
  localStorage.setItem('groupsetting', grouping);

  localStorage.setItem('ordersetting', ordering);
};

export const useApiStore = create<ApiState>()(
  (set) => ({
    userActivity: {},

    tickets: {},

    apiResults: {
      tickets: [],
      users: [],
    },

    groupSetting:
      (localStorage.getItem(
        'groupsetting'
      ) as Grouping) ?? 'Status',

    orderSetting:
      (localStorage.getItem(
        'ordersetting'
      ) as Ordering) ?? 'Priority',

    setTickets: (
      grouping: Grouping,
      ordering: Ordering
    ) =>
      set((state) => {
        state.groupSetting = grouping;
        state.orderSetting = ordering;

        setLocalStorage(grouping, ordering);

        return {
          tickets: groupThenOrder(
            grouping,
            ordering,
            state.apiResults?.tickets!
          ),
        };
      }),
  })
);
