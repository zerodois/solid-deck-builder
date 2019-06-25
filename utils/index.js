/**
 * Styled-component utility to get props value or default value
 * @param {string} property Property to get from props
 * @param {*} value Value if property exists or default value
 * @param {*} [def] Default value to property given
 */
export const prop = (property, value, def) => (props) => {
  if (props[property]) {
    return def ? value : props[property];
  }
  return def || value;
};

export const to = promise => promise.then(res => [null, res]).catch(err => [err, null]);
