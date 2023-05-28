import _ from 'lodash';

/**
 * The declare keyword lets typescript know that this will be available
 */
declare var SOMEGLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(SOMEGLOBAL);
