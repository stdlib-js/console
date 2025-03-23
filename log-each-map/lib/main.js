/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isCollection = require( '@stdlib/assert/is-collection' );
var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
var nulls = require( '@stdlib/array/base/nulls' );
var zeros = require( '@stdlib/array/base/zeros' );
var format = require( '@stdlib/string/format' );
var logger = require( './../../log' );


// MAIN //

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* @param {string} str - format string
* @param {...(Collection|*)} [args] - collections or values
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be a string
* @throws {TypeError} callback argument must be a function
* @throws {RangeError} provided collections must have the same length
* @returns {void}
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEachMap( '%d + %d = %d', x, y, add );
* // e.g., => '1 + 4 = 5\n2 + 5 = 7\n3 + 6 = 9\n'
*
* @example
* function multiply( x, y ) {
*     return x * y;
* }
*
* var x = [ 0.5, 1.0, 1.5 ];
* var y = [ 0.5, 0.75, 1.0 ];
*
* logEachMap( '%0.2f * %0.2f = %0.2f', x, y, multiply );
* // e.g., => '0.50 * 0.50 = 0.25\n1.00 * 0.75 = 0.75\n1.50 * 1.00 = 1.50\n'
*
* @example
* function append( x, y ) {
*     return x + y;
* }
*
* var x = [ 'foo', 'bar' ];
* var y = [ 'baz', 'beep' ];
*
* logEachMap( '%s+%s = %s', x, y, append );
* // e.g., => 'foo+baz = foobaz\nbar+beep = barbeep\n'
*/
function logEachMap( str ) {
	var strides;
	var offsets;
	var getters;
	var thisArg;
	var cbArgs;
	var values;
	var nargs;
	var args;
	var clbk;
	var len;
	var v;
	var s;
	var i;
	var j;

	nargs = arguments.length;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	nargs -= 1;
	if ( isFunction( arguments[ nargs ] ) ) {
		clbk = arguments[ nargs ];
		nargs -= 1;
	} else {
		clbk = arguments[ nargs-1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
		thisArg = arguments[ nargs ];
		nargs -= 2;
	}
	getters = [];
	strides = [];
	args = [];

	// Find the first argument which is a collection...
	for ( i = 1; i < nargs+1; i++ ) {
		v = arguments[ i ];
		if ( isCollection( v ) ) {
			getters.push( resolveGetter( v ) );
			args.push( v );
			strides.push( 1 );
			len = v.length;
			i += 1;
			break;
		} else {
			v = [ v ];
			getters.push( resolveGetter( v ) );
			args.push( v );
			strides.push( 0 );
		}
	}
	// If weren't provided a collection argument, all arguments are "broadcasted"...
	if ( len === void 0 ) {
		len = 1;
	}
	// For the remaining arguments, resolve each argument to a collection...
	for ( ; i < nargs+1; i++ ) {
		v = arguments[ i ];
		if ( isCollection( v ) ) {
			if ( v.length !== len ) {
				throw new RangeError( 'invalid argument. Provided collections must have the same length.' );
			}
			s = 1;
		} else {
			v = [ v ];
			s = 0;
		}
		getters.push( resolveGetter( v ) );
		args.push( v );
		strides.push( s );
	}
	// Initialize an array containing values for generating an interpolated format string:
	values = nulls( nargs+2 ); // [ str, v0, v1, ..., vN, result ]
	values[ 0 ] = str;

	// Initialize an array containing index offsets, which are "pointers" to the current set of array elements when calling the provided callback function:
	offsets = zeros( nargs ); // [ o0, o1, ..., oN ]

	// Initialize an array containing arguments to be provided to the callback function:
	cbArgs = nulls( nargs+2 ); // [ v0, v1, ..., vN, index, arrays ]

	// The last argument provided to the callback function should be the list of input arrays/broadcasted values:
	cbArgs[ nargs+1 ] = args;

	// Print an interpolated format string for each set of broadcasted array values...
	for ( i = 0; i < len; i++ ) {
		// Resolve the set of broadcasted array values...
		for ( j = 0; j < nargs; j++ ) {
			cbArgs[ j ] = getters[ j ]( args[ j ], offsets[ j ] );
			values[ j+1 ] = cbArgs[ j ];
			offsets[ j ] += strides[ j ];
		}
		// The second-to-last callback argument should be the current array element index:
		cbArgs[ nargs ] = i;

		// Compute the result of passing the current set of array elements to the provided callback function:
		values[ nargs+1 ] = clbk.apply( thisArg, cbArgs );

		// Print an interpolated string:
		logger( format.apply( null, values ) );
	}
}


// EXPORTS //

module.exports = logEachMap;
