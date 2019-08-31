import { FormikErrors, FormikTouched } from 'formik';
import { InputHTMLAttributes } from 'react';

export const AUTOCOMPLETE_DEBOUNCE_TIME_MS = 1000;
export const MAX_AUTOCOMPLETE_RESULTS = 10;

export interface IInputBaseProps {
    marginBottom?: 'normal' | 'sm' | 'none';
    squared?: boolean;
    error?: string | FormikErrors<any>;
    touched?: boolean | FormikTouched<any>;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>, IInputBaseProps {}

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement>, IInputBaseProps {
    value: string | number;
    selected?: boolean;
    label?: string;
}
