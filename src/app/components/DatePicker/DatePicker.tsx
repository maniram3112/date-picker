import CalendarPreview from './CalendarPreview';
import DateRangePicker from './DateRangePicker';
import RecurrenceCustomization from './RecurrenceCustomization';
import RecurrenceOptions from './RecurrenceOptions';

const DatePicker = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Select Recurring Dates</h2>
        <DateRangePicker />
        <RecurrenceOptions />
        <RecurrenceCustomization />
        <CalendarPreview />
        </div>
    );
};

export default DatePicker;
