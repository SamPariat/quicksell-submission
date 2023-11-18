import { create } from 'zustand';

import {
  QuicksellApi,
  type Grouping,
  type Ordering,
  type Ticket,
} from '../src/types';
import { groupThenOrder } from '../src/utils';

interface ApiState {
  userActivity: Record<string, boolean>;
  tickets: Record<string, Ticket[]>;
  apiResults: QuicksellApi;
  setTickets: (
    grouping: Grouping,
    ordering: Ordering
  ) => void;
}

export const useApiStore = create<ApiState>()(
  (set) => ({
    userActivity: {},

    tickets: {},

    apiResults: {
      tickets: [],
      users: [],
    },

    setTickets: (
      grouping: Grouping,
      ordering: Ordering
    ) =>
      set((state) => ({
        tickets: groupThenOrder(
          grouping,
          ordering,
          state.apiResults?.tickets!
        ),
      })),
  })
);
