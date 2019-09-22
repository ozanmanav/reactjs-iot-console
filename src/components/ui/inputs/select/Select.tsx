import React, { FunctionComponent } from 'react';
import './Select.scss';
import classNames from 'classnames';
import ReactSelect, { components } from 'react-select';
import { SelectComponentsProps } from 'react-select/src/Select';
const { Option } = components;

export interface ISelectOption {
  value: string | number;
  label?: string;
  group?: string;
}

interface ISelectProps extends SelectComponentsProps {
  error?: string;
  touched?: boolean;
}

export const Select: FunctionComponent<ISelectProps> = ({ className, error, touched, ...props }) => {
  const selectWrapperClassName = classNames(['f-select', className]);

  const IconOption = (props: any) => (
    <Option {...props}>
      {props.data.image && <img src={props.data.image} className="f-select__icon" alt={props.data.label} />}
      {props.data.label}
    </Option>
  );

  return (
    <div className={selectWrapperClassName}>
      <ReactSelect
        {...props}
        components={{ Option: IconOption }}
        styles={{
          control: (base, state) => ({
            ...base,
            '&:hover': { borderColor: '#f68a4d' },
            height: '50px',
            boxShadow: 'none',
            borderColor: error && touched ? 'red' : state.isFocused ? '#f68a4d' : '#dfe1eb'
          })
        }}
      />
      {error && touched && <div className="f-select__error">{error}</div>}
    </div>
  );
};
