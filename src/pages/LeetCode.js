/****** Here we implemente the solution for leetCode challange ******/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function(n) {
    var start = 1;
    var end = n;
    while (start <= end) {
      var middle = ((end - start) >> 1) + start;
      if (isBadVersion(middle)) end = middle - 1;
      else start = middle + 1;
    }
    return end + 1;
  };
};
