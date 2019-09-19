import { ISelectOption } from '../components/ui/inputs';
import { ILocalAutocompleteOption } from '../components/ui/inputs/autocomponents';

export interface IDropdownOption {
    key: string;
    value?: string;
    text?: string;
    image?: object;
}

export function getDeviceBrandOptions(brands: [] = []): IDropdownOption[] {
    return brands
        ? brands.map(({ id, brand, image }) => ({
              key: id,
              value: id,
              text: brand,
              image: { avatar: true, src: image },
          }))
        : [];
}

export function getDeviceModelOptions(models: [] = []): IDropdownOption[] {
    return models
        ? models.map(({ id, model, image }) => ({
              key: id,
              value: id,
              text: model,
              image: image,
          }))
        : [];
}
