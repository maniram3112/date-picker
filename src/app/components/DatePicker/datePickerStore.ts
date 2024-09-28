import { create } from 'zustand';

interface DatePickerState {
    startDate: Date | null;
    endDate: Date | null;
    recurrencePattern: string;
    setStartDate: (date: Date | null) => void;
    setEndDate: (date: Date | null) => void;
    setRecurrencePattern: (pattern: string) => void;
}

export const useDatePickerStore = create<DatePickerState>((set) => ({
    startDate: null,
    endDate: null,
    recurrencePattern: 'daily',
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
    setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
}));
