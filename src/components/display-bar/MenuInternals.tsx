import { useApiStore } from '../../../store';
import {
  Ordering,
  type Grouping,
} from '../../types';
import classes from './MenuInternals.module.css';

type MenuInternalsProps = {
  text: string;
  options: string[];
};

export default function MenuInternals({
  text,
  options,
}: MenuInternalsProps) {
  const {
    setTickets,
    groupSetting,
    orderSetting,
  } = useApiStore();

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (text == 'Grouping') {
      setTickets(
        event.target.value as Grouping,
        orderSetting
      );
    } else {
      setTickets(
        groupSetting,
        event.target.value as Ordering
      );
    }
  };

  return (
    <div className={classes.menu_internals}>
      <p>{text}</p>
      <select
        name='selected-option'
        value={
          text === 'Grouping'
            ? groupSetting
            : orderSetting
        }
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option
            value={option}
            key={`${text}-${option}`}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
