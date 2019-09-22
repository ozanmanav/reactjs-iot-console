import { SyntheticEvent, useState } from 'react';

export const useRadioButtonsGroup = (defaultSelected: string | number) => {
  const [selected, setSelected] = useState<string | number>(defaultSelected);

  function handleChange(e: SyntheticEvent) {
    if (e.target instanceof HTMLInputElement) {
      setSelected(e.target.value);
    }
  }

  return {
    selected,
    handleChange
  };
};
