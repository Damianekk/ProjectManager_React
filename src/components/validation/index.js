export const required = value =>
    value 
    ? undefined 
    : 'Value is required';

export const minLength = min => value =>
    value.length < min
    ? 'Value must be at least ' + min + ' characters'
    : undefined;

// export const maxLength = value =>{
//     value.length < value.max
//     ? 'Value is too long, max available characters is' + value.max
//     : undefined;
// }