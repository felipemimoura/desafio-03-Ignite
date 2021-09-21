import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
  SVGAttributes,
} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface Icon extends SVGAttributes<SVGElement> {
  size: number;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  icon?: Icon;
  placeholder:string;
  value: string | number;
}

const Input = ({name, icon: Icon, ...rest} : InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
 
    

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);



  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {/* {Icon && <Icon  />} */}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
