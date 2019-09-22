import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import './LocalAutocomplete.scss';
import { IInputProps, MAX_AUTOCOMPLETE_RESULTS } from '../config';
import { useClickOutside } from '../../../../hooks';
import classNames from 'classnames';
import { SearchInput } from '../input';

export interface ILocalAutocompleteOption {
  id: string;
  label: string;
  value: string;
}

interface ILocalAutocompleteResultsProps {
  options: ILocalAutocompleteOption[];
  onItemClick: (option: ILocalAutocompleteOption) => void;
  position?: 'top';
  resultsContainerSize?: 'small';
}

const LocalAutocompleteResults: FunctionComponent<ILocalAutocompleteResultsProps> = ({
  options,
  onItemClick,
  position,
  resultsContainerSize
}) => {
  const resultsClassname = classNames([
    'b-autocomplete',
    { [`_${position}`]: position },
    { [`_${resultsContainerSize}`]: resultsContainerSize }
  ]);

  const renderedData = options.slice(0, MAX_AUTOCOMPLETE_RESULTS);

  return (
    <div className={resultsClassname}>
      {renderedData.map((option: ILocalAutocompleteOption) => (
        <LocalAutocompleteResultsItem key={option.id} option={option} onClick={onItemClick} />
      ))}
      {renderedData.length === 0 && <p className="b-autocomplete__item _nothing">Nothing found</p>}
    </div>
  );
};

interface ILocalAutocompleteResultsItemProps {
  option: ILocalAutocompleteOption;
  onClick: (option: ILocalAutocompleteOption) => void;
}

const LocalAutocompleteResultsItem: FunctionComponent<ILocalAutocompleteResultsItemProps> = ({ option, onClick }) => {
  function onSelfClick(): void {
    onClick(option);
  }

  return (
    <button className="b-autocomplete__item" onClick={onSelfClick}>
      {option.label}
    </button>
  );
};

interface ILocalAutocompleteProps extends IInputProps {
  onChange: (item: any) => void;
  options: ILocalAutocompleteOption[];
  position?: 'top';
  resultsContainerSize?: 'small';
}

export const LocalAutocomplete: FunctionComponent<ILocalAutocompleteProps> = ({
  className,
  options = [],
  position,
  resultsContainerSize,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<any>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  function onBlur(): void {
    setIsFocused(false);
  }
  const wrapperRef = useClickOutside<HTMLDivElement>(onBlur);
  const [autocompleteResults, setAutocompleteResults] = useState(options);

  useEffect(() => {
    if (options.length > 0) {
      const results = options.filter(option => {
        return (
          option.label
            .toString()
            .toLowerCase()
            .indexOf(inputValue ? inputValue.toLowerCase() : '') !== -1
        );
      });

      setAutocompleteResults(results);
    }
  }, [inputValue]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onFocus() {
    setIsFocused(true);
  }

  function handleItemClick(option: ILocalAutocompleteOption) {
    const selectedOption = options.find(({ value }) => value === option.value);
    console.log(selectedOption);
    props.onChange(selectedOption);
    onBlur();
    setInputValue(selectedOption && selectedOption.label);
  }

  return (
    <div
      className={classNames('b-autocomplete__wrapper', className, {
        _opened: isFocused
      })}
      ref={wrapperRef}
      onFocus={onFocus}
    >
      <SearchInput {...props} value={inputValue} onChange={onChange} marginBottom="none" />
      {isFocused && (
        <LocalAutocompleteResults
          options={autocompleteResults}
          onItemClick={handleItemClick}
          position={position}
          resultsContainerSize={resultsContainerSize}
        />
      )}
    </div>
  );
};
