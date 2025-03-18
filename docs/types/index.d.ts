/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import log = require( './../../log' );
import logEach = require( './../../log-each' );
import logEachMap = require( './../../log-each-map' );

/**
* Interface describing the `console` namespace.
*/
interface Namespace {
	/**
	* Outputs a message to the debugger console.
	*
	* @param data - data to log
	* @param args - additional arguments (including substitution values)
	*
	* @example
	* ns.log( 'Hello, World!' );
	*
	* @example
	* ns.log( 'Hello, %s!', 'World' );
	*/
	log: typeof log;

	/**
	* Inserts array element values into a format string and prints the result.
	*
	* ## Notes
	*
	* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
	*
	* @param str - format string
	* @param args - collections or values
	* @throws provided collections must have the same length
	*
	* @example
	* var x = [ 1, 2, 3 ];
	* var y = [ 4, 5, 6 ];
	*
	* ns.logEach( '%d < %d ', x, y );
	* // e.g., => '1 < 4\n2 < 5\n3 < 6\n'
	*/
	logEach: typeof logEach;

	/**
	* Inserts array element values and the result of a callback function into a format string and prints the result.
	*
	* ## Notes
	*
	* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
	*
	* @param str - format string
	* @param arg0 - first input value
	* @param arg1 - second input value
	* @param arg2 - third input value
	* @param args - additional input values
	*
	* @example
	* function clbk( x, y, z ) {
	*     return x + y + z;
	* }
	*
	* var x = [ 1, 2, 3 ];
	* var y = [ 4, 5, 6 ];
	* var z = [ 7, 8, 9 ];
	*
	* ns.logEachMap( '%d', x, y, z, clbk );
	* // e.g., => '12\n15\n18\n'
	*/
	logEachMap: typeof logEachMap;
}

/**
* Debugger console.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
