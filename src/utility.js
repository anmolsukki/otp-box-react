// ****************************************** For Regex Validation ******************************************
export const numRegex = /^\d+$/;

// ****************************************** For Name, Number and Input Validation ******************************************
export const checkInputHandler = (event) => {
  const allowedNum = /^[0-9]*$/;
  if (!isNaN(event.target.value) && allowedNum.test(event.target.value)) return true;
  else return false;
};

// ****************************************** For Input Number Validation ******************************************
export const validateNumber = (event) => {
  const allowedChar = /^[0-9]*$/;
  const { value, maxLength } = event.target;
  if (event.keyCode === 187 || event.keyCode === 69) event.preventDefault();
  if (!(event.keyCode === 8) && String(value).length >= maxLength) event.preventDefault();
  if (!allowedChar.test(event.keyCode)) event.preventDefault();
};

// ****************************************** For Back Otp Handler ******************************************
export const backOtpHandler = (event, fieldlength, fieldindex) => {
  if (event.keyCode === 8) {
    if (event.target.value && event.target.id === (fieldlength || '5') && event.keyCode === 8) event.target.focus();
    else if (!event.target.value?.length && event.target.id > 0 && event.keyCode === 8) {
      if (fieldindex) document?.getElementById(fieldindex - 1)?.select();
      event.target.previousSibling.focus();
    }
  } else validateNumber(event);
};
