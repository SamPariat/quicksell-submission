import { type User } from '../types';

export const createActivityRecord = (
  users: User[]
): Record<string, boolean> =>
  users.reduce((accumulate, user) => {
    const { available, id } = user;

    accumulate[id] = available;
    return accumulate;
  }, {} as Record<string, boolean>);
