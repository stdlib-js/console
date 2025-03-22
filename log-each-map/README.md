<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# logEachMap

> Insert array element values and the result of a callback function into a [format string][@stdlib/string/format] and print the result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var logEachMap = require( '@stdlib/console/log-each-map' );
```

#### logEachMap( str\[, ...args], clbk\[, thisArg] )

Inserts array element values and the result of a callback function into a [format string][@stdlib/string/format] and prints the result.

```javascript
function add( a, b ) {
    return a + b;
}

var x = [ 1, 2, 3 ];
var y = [ 4, 5, 6 ];

logEachMap( '%d + %d = %d', x, y, add );
// e.g., => '1 + 4 = 5\n2 + 5 = 7\n3 + 6 = 9\n'
```

The function accepts the following arguments:

-   **str**: format string.
-   **args**: input arrays _(optional)_.
-   **clbk**: callback function.
-   **thisArg**: callback execution context _(optional)_.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function count( x, y ) {
    this.count += 1;
    return x + y;
}

var x = [ 1, 2, 3 ];
var y = [ 4, 5, 6 ];

var ctx = {
    'count': 0
};

logEachMap( '%d + %d = %d', x, y, count, ctx );
// e.g., => '1 + 4 = 5\n2 + 5 = 7\n3 + 6 = 9\n'

var v = ctx.count;
// returns 3
```

If an interpolated argument is not an array-like object, the argument is broadcasted for each iteration.

```javascript
function multiply( x, y ) {
    return x * y;
}

var x = [ 1, 2, 3 ];
var y = 0.5;

logEachMap( '%0.1f * %0.1f = %0.1f', x, y, multiply );
// e.g., => '1.0 * 0.5 = 0.5\n2.0 * 0.5 = 1.0\n3.0 * 0.5 = 1.5\n'
```

The callback function is provided the following arguments:

-   **arg0**: current array element for the first broadcasted array.
-   **arg1**: current array element for the second broadcasted array.
-   **...argN**: current array element for the nth broadcasted array.
-   **index**: current element index.
-   **arrays**: broadcasted arrays. If an argument was broadcasted, the corresponding array is a single-element generic array containing the original element.

The number of `argX` arguments is determined according to the number of provided `args` arguments. If no `args` are provided, the callback is invoked without any arguments.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the function is provided array-like objects of unequal lengths, the function throws an error.
-   The function supports array-like objects supporting the accessor protocol (e.g., [`Complex128Array`][@stdlib/array/complex128], [`Complex64Array`][@stdlib/array/complex64], etc).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );

function add( x, y ) {
    return x + y;
}

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
var y = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});

logEachMap( '%d + %d = %d', x, y, add );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/string/format]: https://github.com/stdlib-js/string-format

</section>

<!-- /.links -->
