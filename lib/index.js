/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name args2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/args2multislice}
*/
setReadOnly( ns, 'args2multislice', require( '@stdlib/slice-base-args2multislice' ) );

/**
* @name int2slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/int2slice}
*/
setReadOnly( ns, 'int2slice', require( '@stdlib/slice-base-int2slice' ) );

/**
* @name sliceLength
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/length}
*/
setReadOnly( ns, 'sliceLength', require( '@stdlib/slice-base-length' ) );

/**
* @name nonreducedDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/nonreduced-dimensions}
*/
setReadOnly( ns, 'nonreducedDimensions', require( '@stdlib/slice-base-nonreduced-dimensions' ) );

/**
* @name normalizeMultiSlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/normalize-multi-slice}
*/
setReadOnly( ns, 'normalizeMultiSlice', require( '@stdlib/slice-base-normalize-multi-slice' ) );

/**
* @name normalizeSlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/normalize-slice}
*/
setReadOnly( ns, 'normalizeSlice', require( '@stdlib/slice-base-normalize-slice' ) );

/**
* @name reducedDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/reduced-dimensions}
*/
setReadOnly( ns, 'reducedDimensions', require( '@stdlib/slice-base-reduced-dimensions' ) );

/**
* @name sargs2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/sargs2multislice}
*/
setReadOnly( ns, 'sargs2multislice', require( '@stdlib/slice-base-sargs2multislice' ) );

/**
* @name seq2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/seq2multislice}
*/
setReadOnly( ns, 'seq2multislice', require( '@stdlib/slice-base-seq2multislice' ) );

/**
* @name seq2slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/seq2slice}
*/
setReadOnly( ns, 'seq2slice', require( '@stdlib/slice-base-seq2slice' ) );

/**
* @name sliceShape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/shape}
*/
setReadOnly( ns, 'sliceShape', require( '@stdlib/slice-base-shape' ) );

/**
* @name slice2seq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/slice2seq}
*/
setReadOnly( ns, 'slice2seq', require( '@stdlib/slice-base-slice2seq' ) );

/**
* @name str2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/str2multislice}
*/
setReadOnly( ns, 'str2multislice', require( '@stdlib/slice-base-str2multislice' ) );

/**
* @name str2slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/str2slice}
*/
setReadOnly( ns, 'str2slice', require( '@stdlib/slice-base-str2slice' ) );


// EXPORTS //

module.exports = ns;
