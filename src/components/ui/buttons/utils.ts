import { appendClassName } from '../../../utils';

interface IGetButtonClassNameProps {
    primary?: boolean;
    big?: boolean;
    remove?: boolean;
    className?: string;
}

export function getButtonClassName({ primary, big, className, remove }: IGetButtonClassNameProps): string {
    let buttonClassName = 'flex-inline justify-center align-center button _text-uppercase _font-bold';

    if (primary) {
        buttonClassName += ' _primary';
    }

    if (big) {
        buttonClassName += ' _big';
    }

    if (remove) {
        buttonClassName += ' _remove';
    }

    return appendClassName(buttonClassName, className);
}
