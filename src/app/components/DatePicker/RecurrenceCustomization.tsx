"use client"; // Marking this file as a client component

import React, { useState } from 'react';
import { useDatePickerStore } from './datePickerStore';

const RecurrenceCustomization = () => {
    const { recurrencePattern, setRecurrencePattern } = useDatePickerStore((state) => ({
        recurrencePattern: state.recurrencePattern,
        setRecurrencePattern: state.setRecurrencePattern,
    }));

    const [customFrequency, setCustomFrequency] = useState(1);

    const handleRecurrenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecurrencePattern(event.target.value);
    };

    const handleCustomFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value) && value > 0) {
            setCustomFrequency(value);
        }
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold">Recurrence Customization</h2>
            <div className="mt-4">
                <h3 className="text-md font-semibold">Select Recurrence Pattern:</h3>
                <div>
                    <label className="block">
                        <input
                            type="radio"
                            value="daily"
                            checked={recurrencePattern === 'daily'}
                            onChange={handleRecurrenceChange}
                            className="mr-2"
                        />
                        Daily
                    </label>
                    <label className="block">
                        <input
                            type="radio"
                            value="weekly"
                            checked={recurrencePattern === 'weekly'}
                            onChange={handleRecurrenceChange}
                            className="mr-2"
                        />
                        Weekly
                    </label>
                    <label className="block">
                        <input
                            type="radio"
                            value="monthly"
                            checked={recurrencePattern === 'monthly'}
                            onChange={handleRecurrenceChange}
                            className="mr-2"
                        />
                        Monthly
                    </label>
                    <label className="block">
                        <input
                            type="radio"
                            value="yearly"
                            checked={recurrencePattern === 'yearly'}
                            onChange={handleRecurrenceChange}
                            className="mr-2"
                        />
                        Yearly
                    </label>
                </div>
            </div>

            {(recurrencePattern === 'weekly' || recurrencePattern === 'monthly') && (
                <div className="mt-4">
                    <h3 className="text-md font-semibold">Set Frequency:</h3>
                    <input
                        type="number"
                        value={customFrequency}
                        onChange={handleCustomFrequencyChange}
                        className="border border-gray-400 rounded p-1 ml-2 w-16"
                    />
                    <span className="ml-2">{recurrencePattern === 'weekly' ? 'weeks' : 'months'}</span>
                </div>
            )}
        </div>
    );
};

export default RecurrenceCustomization;
