import MenuInternals from './MenuInternals';
import classes from './SettingsMenu.module.css';

const groupingOptions = [
  'Status',
  'Priority',
  'User',
];
const orderingOptions = ['Priority', 'Title'];

export default function SettingsMenu() {
  return (
    <div className={classes.settings_menu}>
      <MenuInternals
        text='Grouping'
        options={groupingOptions}
      />
      <MenuInternals
        text='Ordering'
        options={orderingOptions}
      />
    </div>
  );
}
