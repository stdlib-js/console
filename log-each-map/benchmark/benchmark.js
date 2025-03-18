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

var proxyquire = require( 'proxyquire' );
var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;


// FUNCTIONS //

/**
* Identity function.
*
* @private
* @param {*} x - input value
* @returns {*} input value
*/
function clbk( x ) {
	return x;
}


// MAIN //

bench( pkg+'::no_collections', function benchmark( b ) {
	var logEachMap;
	var i;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		logEachMap( '%d -> %d', i, clbk );
	}
	b.toc();
	b.pass( 'benchmark finished' );
	b.end();

	function logger( str ) {
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
});

bench( pkg+'::collections:len=1', function benchmark( b ) {
	var logEachMap;
	var i;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		logEachMap( '%d -> %d', [ i ], clbk );
	}
	b.toc();
	b.pass( 'benchmark finished' );
	b.end();

	function logger( str ) {
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
});

bench( pkg+'::collections:len=2', function benchmark( b ) {
	var logEachMap;
	var i;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		logEachMap( '%d + %d = %d', [ i ], [ i + 1 ], sum );
	}
	b.toc();
	b.pass( 'benchmark finished' );
	b.end();

	function sum( x, y ) {
		return x + y;
	}

	function logger( str ) {
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
});
