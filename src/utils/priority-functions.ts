export const priority = (
  value: string
): string => {
  switch (value) {
    case '0':
      return 'No priority';
    case '1':
      return 'Low';
    case '2':
      return 'Medium';
    case '3':
      return 'High';
    case '4':
      return 'Urgent';
    default:
      return 'Invalid priority';
  }
};
