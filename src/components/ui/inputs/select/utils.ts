import { ISelectOption } from './Select';
import { REST_GROUP_NAME } from './config';

interface IOptionsGroups {
    [key: string]: ISelectOption[];
}

export function splitOptionsIntoGroups(options: ISelectOption[]): IOptionsGroups {
    return options.reduce((acc: IOptionsGroups, option) => {
        const group = option.group || REST_GROUP_NAME;

        if (group) {
            if (!acc[group]) {
                acc[group] = [];
            }

            acc[group].push(option);
        }

        return acc;
    }, {});
}
