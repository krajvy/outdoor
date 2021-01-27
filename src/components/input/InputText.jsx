import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const InputText = props => {
  const input =
        <Input
          name={props.name}
          onChange={props.onChange}
          type="text"
          value={props.value}
        />;

  return (
    <div>
      {props.label ? <label>{props.label}:{input}</label> : { input }}
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
};

export default InputText;