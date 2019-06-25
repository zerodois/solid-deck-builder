/**
 * Styled-component utility to get props value or default value
 * @param {string} property Property to get from props
 * @param {*} def Default value to property given
 */
export const prop = (property, def) => props => props[property] || def;

export const to = promise => promise.then(res => [null, res]).catch(err => [err, null]);
