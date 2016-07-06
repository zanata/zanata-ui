/* eslint-disable max-len */
/**
 * Safe chained function.
 *
 * See https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction (...funcs) {
  return funcs
    .filter(f => f != null)
    .reduce((acc, f) => {
      if (typeof f !== 'function') {
        throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.')
      }

      if (acc === null) {
        return f
      }

      return function chainedFunction (...args) {
        acc.apply(this, args)
        f.apply(this, args)
      }
    }, null)
}
/* eslint-enable max-len */
export default createChainedFunction
