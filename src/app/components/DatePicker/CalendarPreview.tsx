"use client";

import { useMemo } from 'react';
import { useDatePickerStore } from './datePickerStore';

const CalendarPreview = () => {
    const { startDate, endDate, recurrencePattern } = useDatePickerStore((state) => ({
        startDate: state.startDate,
        endDate: state.endDate,
        recurrencePattern: state.recurrencePattern,
    }));

    const generateRecurringDates = () => {
        if (!startDate) return [];
        const dates: Date[] = [];
        let currentDate = new Date(startDate);

        type RecurrencePattern = 'daily' | 'weekly' | 'monthly' | 'yearly';

        const interval: Record<RecurrencePattern, number | ((date: Date) => Date)> = {
            daily: 1,
            weekly: 7,
            monthly: (date) => {
                const newDate = new Date(date);
                newDate.setMonth(newDate.getMonth() + 1);
                return newDate;
            },
            yearly: (date) => {
                const newDate = new Date(date);
                newDate.setFullYear(newDate.getFullYear() + 1);
                return newDate;
            },
        };

        while (!endDate || currentDate <= endDate) {
            dates.push(new Date(currentDate));

            const pattern = recurrencePattern as RecurrencePattern;

            if (pattern in interval) {
                if (typeof interval[pattern] === 'number') {
                    currentDate.setDate(currentDate.getDate() + (interval[pattern] as number));
                } else {
                    currentDate = interval[pattern](currentDate) as Date;
                }
            }
        }

        return dates;
    };

    const recurringDates = useMemo(generateRecurringDates, [startDate, endDate, recurrencePattern]);

    return (
        <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold">Calendar Preview</h2>
            <div className="grid grid-cols-7 gap-2 mt-2">
                {recurringDates.length > 0 ? (
                    recurringDates.map((date) => (
                        <div key={date.toString()} className="border border-blue-500 p-2 rounded-md shadow-md">
                            {date.toLocaleDateString()}
                        </div>
                    ))
                ) : (
                    <div className="col-span-7 text-center">No dates selected</div>
                )}
            </div>
        </div>
    );
};

export default CalendarPreview;
