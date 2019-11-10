import { ISelectOption } from '../../ui';

export interface ISelectGistOption extends ISelectOption {
  url?: string;
  image?: string;
}

export function normalizeGistOptions(gistOptions: any): ISelectGistOption[] {
  return gistOptions.map(({ gist_image, gist_lang, gist_url }: any) => ({
    label: gist_lang,
    value: gist_lang,
    url: gist_url,
    image: gist_image
  }));
}
