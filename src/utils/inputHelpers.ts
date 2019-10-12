import { ISelectOption } from '../components/ui/inputs';

export interface IBrandOption extends ISelectOption {
  image?: object;
}

export interface IModelOption extends ISelectOption {
  image?: object;
}

export interface ITriggerTypeOption extends ISelectOption {}

export interface ITriggerIntegrationOption extends ISelectOption {}

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

export function getTriggerTypeOptions(triggerTypes: [] = []): ISelectOption[] {
  return triggerTypes
    ? triggerTypes.map(({ id, name, image }) => ({
        value: id,
        label: name
      }))
    : [];
}

export function getTriggerIntegrationOptions(triggerIntegrations: [] = []): ISelectOption[] {
  return triggerIntegrations
    ? triggerIntegrations.map(({ id, brand, image }) => ({
        value: id,
        label: brand
      }))
    : [];
}
