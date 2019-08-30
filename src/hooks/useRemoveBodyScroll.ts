import { useEffect, useRef } from 'react';

function calcScrollWidth() {
    const outer = document.createElement('div');
    const inner = document.createElement('div');

    outer.style.overflow = 'scroll';

    document.body.appendChild(outer);
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    document.body.removeChild(outer);

    return scrollbarWidth;
}

const body = document.body;
const headerUserCollection = document.getElementsByClassName('b-header-user') as HTMLCollectionOf<HTMLElement>;
const modals = document.getElementsByClassName('b-modal__window') as HTMLCollectionOf<HTMLElement>;
const scollbarWidth = calcScrollWidth();
let timesRemoved = 0;

function removeScroll() {
    timesRemoved++;
    if (body.offsetHeight > window.innerHeight) {
        body.classList.add('_scroll-removed');
        body.style.paddingRight = `${scollbarWidth}px`;

        if (headerUserCollection[0]) {
            headerUserCollection[0].style.right = `${scollbarWidth}px`;
        }

        if (modals.length > 0) {
            modals[0].style.marginRight = `${scollbarWidth}px`;
        }
    }
}

export function restoreScroll(forceRestore?: boolean) {
    if (timesRemoved > 0) {
        timesRemoved--;
    }

    if (forceRestore) {
        timesRemoved = 0;
    }

    if (timesRemoved === 0) {
        body.classList.remove('_scroll-removed');
        body.style.paddingRight = '0';

        if (headerUserCollection[0]) {
            headerUserCollection[0].style.right = '0';
        }
    }
}

export function useRemoveBodyScroll(shouldRemoveScroll?: boolean) {
    const initialized = useRef<boolean>(false);

    useEffect(() => {
        if (initialized.current) {
            shouldRemoveScroll ? removeScroll() : restoreScroll();
        }

        initialized.current = true;
    }, [shouldRemoveScroll]);
}
