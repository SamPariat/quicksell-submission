import { type User } from '../types';

export const createActivityRecord = (
  users: User[]
): Record<
  string,
  { available: boolean; name: string }
> =>
  users.reduce((accumulate, user) => {
    const { available, id, name } = user;

    accumulate[id] = { available, name };
    return accumulate;
  }, {} as Record<string, { available: boolean; name: string }>);
