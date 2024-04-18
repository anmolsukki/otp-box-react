import React, { Fragment, useRef } from 'react';
import { checkInputHandler, numRegex, validateNumber, backOtpHandler } from './utility';

export const OtpInput = ({ className, placeholder, name, otpvalue, onChangeOtpHandler }) => {
  const inputFocus = useRef(null);

  const otpChangeHandler = (event, index) => {
    if (checkInputHandler(event)) {
      if (event.target?.value?.length === otpvalue.length && numRegex?.test(event.target?.value)) {
        onChangeOtpHandler(event, index);
        inputFocus?.current?.focus();
      } else {
        if (event.target?.value && event.target?.value?.length !== 1) return false;
        if (event.target?.value && event.target.id < otpvalue.length - 1) event.target.nextSibling.focus();
        onChangeOtpHandler(event, index);
      }
    }
  };

  const backPressHandler = (el, index) => {
    validateNumber(el);
    backOtpHandler(el, otpvalue - 1, index);
  };

  return (
    <Fragment>
      {otpvalue.map((item, index) => {
        return (
          <input
            key={index}
            id={index}
            ref={inputFocus}
            inputMode="numeric"
            autoComplete="off"
            type="text"
            className={className || ''}
            placeholder={placeholder || ''}
            name={name}
            maxLength={1}
            value={item}
            onChange={(e) => otpChangeHandler(e, index)}
            onKeyDown={(e) => backPressHandler(e, index)}
            onWheel={(e) => e.target.blur()}
          />
        );
      })}
    </Fragment>
  );
};
