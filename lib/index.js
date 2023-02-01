/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

/*
* The following modules are intentionally not exported: tools
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name log
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/console/log}
*/
setReadOnly( ns, 'log', require( './../log' ) );

/**
* @name logEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/console/log-each}
*/
setReadOnly( ns, 'logEach', require( './../log-each' ) );


// EXPORTS //

module.exports = ns;