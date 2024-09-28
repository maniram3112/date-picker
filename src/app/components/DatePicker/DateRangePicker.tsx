"use client";

import React from 'react';
import { useDatePickerStore } from './datePickerStore';

const DateRangePicker = () => {
    const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore((state) => ({
        startDate: state.startDate,
        endDate: state.endDate,
        setStartDate: state.setStartDate,
        setEndDate: state.setEndDate,
    }));

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        if (!endDate || selectedDate <= endDate) {
            setStartDate(selectedDate);
        } else {
            alert("Start date cannot be after end date");
        }
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        if (!startDate || selectedDate >= startDate) {
            setEndDate(selectedDate);
        } else {
            alert("End date cannot be before start date");
        }
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold">Date Range Picker</h2>
            <div className="mt-4">
                <label className="block mb-2">
                    Start Date:
                    <input
                        type="date"
                        value={startDate ? startDate.toISOString().split('T')[0] : ''}
                        onChange={handleStartDateChange}
                        className="ml-2 p-1 border border-gray-400 rounded"
                    />
                </label>
                <label className="block mb-2">
                    End Date:
                    <input
                        type="date"
                        value={endDate ? endDate.toISOString().split('T')[0] : ''}
                        onChange={handleEndDateChange}
                        className="ml-2 p-1 border border-gray-400 rounded"
                    />
                </label>
            </div>
            <div className="mt-4">
                {startDate && endDate && (
                    <p>
                        Selected Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
};

export default DateRangePicker;
