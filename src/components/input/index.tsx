/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

interface IProps {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & IProps;

export function Input({ name, label, children, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [labelStyle, setLabelStyle] = useState({});
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  function handleBlur(value: string) {
    const sty = {
      background: 'var(--chakra-colors-gray-50)',
      fontSize: '0.875rem',
      top: '-0.6rem',
      left: '0.8rem',
      zIndex: 2,
      color: 'var(--chakra-colors-gray-500)',
    };
    if (value) {
      setLabelStyle(sty);
    } else {
      setLabelStyle({});
    }
  }

  return (
    <div className={styles.inputContent}>
      {label && (
        <label style={labelStyle} className={styles.label} htmlFor={fieldName}>
          {label}
        </label>
      )}
      <input
        autoComplete="off"
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        className={styles.input}
        onBlur={({ target }) => {
          handleBlur(target.value);
        }}
        {...rest}
      />
      {children ? <span className="inputIcon">{children}</span> : null}
      {error && <span className="input-error">* {error}</span>}
    </div>
  );
}
