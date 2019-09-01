import { toast } from 'react-toastify';

export function showErrorToast(message: string) {
    toast(message, {
        type: 'error',
    });
}

export function showSuccessToast(message: string) {
    toast(message, {
        type: 'success',
    });
}
