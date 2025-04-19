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
var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var logEachMap = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logEachMap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string for the first argument (binary)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a string for the first argument (n-ary)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( value, [ 1, 2, 3 ], noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (binary)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( '%d', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (binary, thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( '%d', value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n-ary)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( '%d', [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n-ary, thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( '%d', [ 1, 2, 3 ], value, {} );
		};
	}
});

tape( 'the function throws an error if provided collections of unequal length', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3, 4, 5 ],
		[ 1, 2, 3 ],
		[ 4, 5 ],
		[ 6 ],
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEachMap( '%d, %d', value, [ 1, 2, 3, 4 ], noop );
		};
	}
});

tape( 'the function prints a formatted message', function test( t ) {
	var logEachMap;
	var expected;
	var i;
	var j;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	j = 0;
	expected = [ 'foo', 'foo', 'foo' ];

	for ( i = 0; i < expected.length; i++ ) {
		logEachMap( '%s', fcn );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function fcn() {
		return 'foo';
	}

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message when provided only a non-array element', function test( t ) {
	var logEachMap;
	var expected;
	var i;
	var j;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	j = 0;
	expected = [ 'foo -> foobar', 'foo -> foobar', 'foo -> foobar' ];

	for ( i = 0; i < expected.length; i++ ) {
		logEachMap( '%s -> %s', 'foo', fcn );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function fcn( v ) {
		return v + 'bar';
	}

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message when provided only two non-array elements', function test( t ) {
	var logEachMap;
	var expected;
	var i;
	var j;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	j = 0;
	expected = [ 'foo + bar = foobar', 'foo + bar = foobar', 'foo + bar = foobar' ];

	for ( i = 0; i < expected.length; i++ ) {
		logEachMap( '%s + %s = %s', 'foo', 'bar', fcn );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function fcn( v1, v2 ) {
		return v1 + v2;
	}

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message for each element in an array', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	expected = [ '1 -> 2', '2 -> 4', '3 -> 6' ];
	actual = [];

	logEachMap( '%d -> %d', x, scale );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 2;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function prints a formatted message for each element in an array (accessors)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	expected = [ '1 -> 2', '2 -> 4', '3 -> 6' ];
	actual = [];

	logEachMap( '%d -> %d', toAccessorArray( x ), scale );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 2;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function repeatedly prints a formatted message (two arrays)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;
	var y;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	y = [ 4, 5, 6 ];
	expected = [ '1 + 4 = 5', '2 + 5 = 7', '3 + 6 = 9' ];
	actual = [];

	logEachMap( '%d + %d = %d', x, y, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2 ) {
		return v1 + v2;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function repeatedly prints a formatted message (two arrays, accessors)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;
	var y;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	y = [ 4, 5, 6 ];
	expected = [ '1 + 4 = 5', '2 + 5 = 7', '3 + 6 = 9' ];
	actual = [];

	logEachMap( '%d + %d = %d', toAccessorArray( x ), toAccessorArray( y ), sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2 ) {
		return v1 + v2;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function repeatedly prints a formatted message (three arrays)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;
	var y;
	var z;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	y = [ 4, 5, 6 ];
	z = [ 7, 8, 9 ];
	expected = [ '1 + 4 + 7 = 12', '2 + 5 + 8 = 15', '3 + 6 + 9 = 18' ];
	actual = [];

	logEachMap( '%d + %d + %d = %d', x, y, z, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2, v3 ) {
		return v1 + v2 + v3;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function repeatedly prints a formatted message (four arrays)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;
	var y;
	var z;
	var w;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	y = [ 4, 5, 6 ];
	z = [ 7, 8, 9 ];
	w = [ 10, 11, 12 ];
	expected = [ '1 + 4 + 7 + 10 = 22', '2 + 5 + 8 + 11 = 26', '3 + 6 + 9 + 12 = 30' ];
	actual = [];

	logEachMap( '%d + %d + %d + %d = %d', x, y, z, w, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2, v3, v4 ) {
		return v1 + v2 + v3 + v4;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function broadcasts non-array arguments (one array, one scalar)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	expected = [ '1 + 5 = 6', '2 + 5 = 7', '3 + 5 = 8' ];
	actual = [];

	logEachMap( '%d + %d = %d', x, 5, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2 ) {
		return v1 + v2;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function broadcasts non-array arguments (one scalar, one array)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var y;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	y = [ 1, 2, 3 ];
	expected = [ '5 + 1 = 6', '5 + 2 = 7', '5 + 3 = 8' ];
	actual = [];

	logEachMap( '%d + %d = %d', 5, y, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2 ) {
		return v1 + v2;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function broadcasts non-array arguments (two arrays, one scalar)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;
	var y;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 1, 2, 3 ];
	y = [ 4, 5, 6 ];
	expected = [ '1 + 4 + 5 = 10', '2 + 5 + 5 = 12', '3 + 6 + 5 = 14' ];
	actual = [];

	logEachMap( '%d + %d + %d = %d', x, y, 5, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2, v3 ) {
		return v1 + v2 + v3;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function broadcasts non-array arguments (two scalars, one array)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var z;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	z = [ 1, 2, 3 ];
	expected = [ '4 + 5 + 1 = 10', '4 + 5 + 2 = 11', '4 + 5 + 3 = 12' ];
	actual = [];

	logEachMap( '%d + %d + %d = %d', 4, 5, z, sum );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function sum( v1, v2, v3 ) {
		return v1 + v2 + v3;
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var ctx;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	ctx = {
		'factor': 2
	};
	expected = [ '1 -> 2', '2 -> 4', '3 -> 6' ];
	actual = [];

	logEachMap( '%d -> %d', [ 1, 2, 3 ], scale, ctx );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * this.factor; // eslint-disable-line no-invalid-this
	}

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function handles escaped percent signs (%%)', function test( t ) {
	var logEachMap;
	var expected;
	var actual;
	var x;
	var y;

	logEachMap = proxyquire( './../lib/main.js', {
		'./../../log': logger
	});

	x = [ 4, 5, 6 ];
	y = [ 1, 2, 3 ];
	expected = [ '4%1 = 0', '5%2 = 1', '6%3 = 0' ];
	actual = [];

	logEachMap( '%d%%%d = %d', x, y, mod );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function mod( v1, v2 ) {
		return v1 % v2;
	}

	function logger( str ) {
		actual.push( str );
	}
});
