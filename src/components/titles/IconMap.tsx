import {
  AlertCircle,
  CheckCircle2,
  Circle,
  CircleDashed,
  History,
  MoreHorizontal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  XCircle,
} from 'lucide-react';

export const IconMap = (text: string) => {
  switch (text) {
    case 'No priority':
      return <MoreHorizontal size={12} />;
    case 'Urgent':
      return (
        <AlertCircle size={12} color='#fc7941' />
      );
    case 'High':
      return <SignalHigh size={12} />;
    case 'Medium':
      return <SignalMedium size={12} />;
    case 'Low':
      return <SignalLow size={12} />;
    case 'Todo':
      return <Circle size={12} />;
    case 'In progress':
      return (
        <CircleDashed size={12} color='#f0ca4e' />
      );
    case 'Done':
      return (
        <CheckCircle2 size={12} color='#5c68d1' />
      );
    case 'Cancelled':
      return <XCircle size={12} />;
    case 'Backlog':
      return <History size={12} />;
    default:
      return <CheckCircle2 size={12} />;
  }
};
