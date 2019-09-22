import { ISelectOption } from '../components/ui/inputs';

export interface IBrandOption extends ISelectOption {
  image?: object;
}

export interface IModelOption extends ISelectOption {
  image?: object;
}

export function getDeviceBrandOptions(brands: [] = []): IBrandOption[] {
  return brands
    ? brands.map(({ id, brand, image }) => ({
        value: id,
        label: brand,
        image
      }))
    : [];
}

export function getDeviceModelOptions(models: [] = []): ISelectOption[] {
  return models
    ? models.map(({ id, model, image }) => ({
        value: id,
        label: model,
        image
      }))
    : [];
}
