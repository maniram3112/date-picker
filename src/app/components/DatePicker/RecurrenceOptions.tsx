"use client";

import { useState } from 'react';
import { useDatePickerStore } from './datePickerStore';

const RecurrenceOptions = () => {
    const { recurrencePattern, setRecurrencePattern } = useDatePickerStore((state) => ({
        recurrencePattern: state.recurrencePattern,
        setRecurrencePattern: state.setRecurrencePattern,
    }));

    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const handleDayToggle = (day: number) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    return (
        <div className="recurrence-options p-4 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Recurrence Options</h2>
            
            <div className="mt-4">
                <h3 className="text-md font-semibold">Select Recurrence Pattern:</h3>
                <label className="block">
                    <input
                        type="radio"
                        value="daily"
                        checked={recurrencePattern === 'daily'}
                        onChange={() => setRecurrencePattern('daily')}
                        className="mr-2 accent-blue-600" // Use a custom accent color for radio
                    />
                    Daily
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value="weekly"
                        checked={recurrencePattern === 'weekly'}
                        onChange={() => setRecurrencePattern('weekly')}
                        className="mr-2 accent-blue-600" // Use a custom accent color for radio
                    />
                    Weekly
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value="monthly"
                        checked={recurrencePattern === 'monthly'}
                        onChange={() => setRecurrencePattern('monthly')}
                        className="mr-2 accent-blue-600" // Use a custom accent color for radio
                    />
                    Monthly
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value="yearly"
                        checked={recurrencePattern === 'yearly'}
                        onChange={() => setRecurrencePattern('yearly')}
                        className="mr-2 accent-blue-600" // Use a custom accent color for radio
                    />
                    Yearly
                </label>
            </div>

            {recurrencePattern === 'weekly' && (
                <div className="mt-4">
                    <h3 className="text-md font-semibold">Select Days:</h3>
                    <div className="flex space-x-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                            <button
                                key={index}
                                className={`day-button border rounded px-3 py-2 transition duration-300 
                                    ${selectedDays.includes(index) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                onClick={() => handleDayToggle(index)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {recurrencePattern === 'monthly' && (
                <div className="mt-4">
                    <h3 className="text-md font-semibold">Select Day of the Month:</h3>
                    <input
                        type="number"
                        min="1"
                        max="31"
                        placeholder="1-31"
                        className="border border-gray-400 rounded p-2 ml-2 w-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}
        </div>
    );
};

export default RecurrenceOptions;
