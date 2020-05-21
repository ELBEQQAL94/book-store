const required = (propertyType) => (v) => (v && v.length > 0) || `${propertyType} is required`;

const urlFormat = () => {
  const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;
  return (v) => (v && regex.test(v)) || 'Must be a valid url';
};

const minLength = (propertyType, minlength) => (v) => (v && v.length >= minlength) || `${propertyType} must be at least ${minlength} characters`;

const maxLength = (propertyType, maxlength) => (v) => (v && v.length <= maxlength) || `${propertyType} must be less than ${maxlength} characters`;

const emailFormat = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/;
  return (v) => (v && regex.test(v)) || 'Must be a valid email';
};

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
  urlFormat,
};
