import { ISelectOption } from '../components/ui/inputs';

export function getDeviceBrandOptions(brands: [] = []): ISelectOption[] {
    return brands
        ? brands.map(({ id, brand }: { id: string; brand: string }) => ({
              value: id,
              label: brand,
          }))
        : [];
}

export function getDeviceModelOptions(models: [] = []): ISelectOption[] {
    return models
        ? models.map(({ id, model }: { id: string; model: string }) => ({
              value: id,
              label: model,
          }))
        : [];
}
