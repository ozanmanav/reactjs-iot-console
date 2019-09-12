import { useState } from 'react';
import { useRemoveBodyScroll } from '../../../hooks';

export function useModal(isOpenDefault: boolean = false) {
    const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault);

    useRemoveBodyScroll(isOpen);

    function open() {
        setIsOpen(true);
    }

    function hide() {
        setIsOpen(false);
    }

    return {
        isOpen,
        open,
        hide,
    };
}
