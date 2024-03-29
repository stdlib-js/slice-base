/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import args2multislice = require( '@stdlib/slice-base-args2multislice' );
import int2slice = require( '@stdlib/slice-base-int2slice' );
import sliceLength = require( '@stdlib/slice-base-length' );
import nonreducedDimensions = require( '@stdlib/slice-base-nonreduced-dimensions' );
import normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
import normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
import reducedDimensions = require( '@stdlib/slice-base-reduced-dimensions' );
import sargs2multislice = require( '@stdlib/slice-base-sargs2multislice' );
import seq2multislice = require( '@stdlib/slice-base-seq2multislice' );
import seq2slice = require( '@stdlib/slice-base-seq2slice' );
import sliceShape = require( '@stdlib/slice-base-shape' );
import slice2seq = require( '@stdlib/slice-base-slice2seq' );
import str2multislice = require( '@stdlib/slice-base-str2multislice' );
import str2slice = require( '@stdlib/slice-base-str2slice' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Creates a MultiSlice object from a list of MultiSlice constructor arguments.
	*
	* @param args - list of constructor arguments
	* @returns MultiSlice object
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.args2multislice( [ void 0, new Slice( 0, 10, 1 ) ] );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ null, <Slice> ]
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.args2multislice( [ new Slice( 0, 10, 1 ), void 0 ] );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice>, null ]
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.args2multislice( [ new Slice( 0, 10, 1 ), void 0, void 0, new Slice( 0, 10, 1 ) ] );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice>, null, null, <Slice> ]
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.args2multislice( [ void 0, new Slice( 0, 10, 1 ), null,  void 0, new Slice( 2, 9, 2 ), null, void 0 ] );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
	*/
	args2multislice: typeof args2multislice;

	/**
	* Converts an integer to a Slice object.
	*
	* ## Notes
	*
	* -   If `strict` is `true`, the function returns an error object when an input value exceeds index bounds.
	*
	* @param value - input value
	* @param max - index upper bound (exclusive)
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns Slice object (or an error object)
	*
	* @example
	* var s = ns.int2slice( -4, 10, false );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 6
	*
	* var stop = s.stop;
	* // returns 7
	*
	* var step = s.step;
	* // returns 1
	*/
	int2slice: typeof int2slice;

	/**
	* Returns the number of elements in a normalized slice.
	*
	* @param slice - input slice
	* @returns number of elements
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
	*
	* var s = new Slice( 2, null, 1 );
	* // returns <Slice>
	*
	* var v = ns.sliceLength( normalizeSlice( s, 10, false ) );
	* // returns 8
	*
	* v = ns.sliceLength( normalizeSlice( s, 11, false ) );
	* // returns 9
	*
	* v = ns.sliceLength( normalizeSlice( s, 5, false ) );
	* // returns 3
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
	*
	* var s = new Slice( 2, null, 2 );
	* // returns <Slice>
	*
	* var v = ns.sliceLength( normalizeSlice( s, 10, false ) );
	* // returns 4
	*
	* v = ns.sliceLength( normalizeSlice( s, 11, false ) );
	* // returns 5
	*
	* v = ns.sliceLength( normalizeSlice( s, 5, false ) );
	* // returns 2
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
	*
	* var s = new Slice( -1, null, -2 );
	*
	* var v = ns.sliceLength( normalizeSlice( s, 10, false ) );
	* // returns 5
	*
	* v = ns.sliceLength( normalizeSlice( s, 11, false ) );
	* // returns 6
	*
	* v = ns.sliceLength( normalizeSlice( s, 5, false ) );
	* // returns 3
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
	*
	* var s = new Slice( 3, 5, -1 );
	*
	* var v = ns.sliceLength( normalizeSlice( s, 10, false ) );
	* // returns 0
	*
	* v = ns.sliceLength( normalizeSlice( s, 11, false ) );
	* // returns 0
	*
	* v = ns.sliceLength( normalizeSlice( s, 5, false ) );
	* // returns 0
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
	*
	* var s = new Slice( 5, 3, 1 );
	*
	* var v = ns.sliceLength( normalizeSlice( s, 10, false ) );
	* // returns 0
	*
	* v = ns.sliceLength( normalizeSlice( s, 11, false ) );
	* // returns 0
	*
	* v = ns.sliceLength( normalizeSlice( s, 5, false ) );
	* // returns 0
	*/
	sliceLength: typeof sliceLength;

	/**
	* Returns a list of non-reduced dimensions in an un-normalized multi-slice.
	*
	* @param slice - input slice
	* @returns list of indices
	*
	* @example
	* var MultiSlice = require( '@stdlib/slice-multi' );
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = new MultiSlice( 1, null, 2, void 0, new Slice( 0, 10, 1 ) );
	* // returns <MultiSlice>
	*
	* var indices = ns.nonreducedDimensions( s );
	* // returns [ 1, 3, 4 ]
	*/
	nonreducedDimensions: typeof nonreducedDimensions;

	/**
	* Returns a normalized MultiSlice object.
	*
	* ## Notes
	*
	* -   If `strict` is `true`, the function returns an error object when an input slice exceeds index bounds.
	*
	* @param slice - input slice
	* @param shape - maximum allowed slice shape
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns MultiSlice object (or an error object)
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var MultiSlice = require( '@stdlib/slice-multi' );
	*
	* var shape = [ 10, 10, 10 ];
	*
	* var s1 = new MultiSlice( new Slice( 2, null, 2 ), null, -4 );
	* var s2 = ns.normalizeMultiSlice( s1, shape, false );
	* // returns <MultiSlice>
	*
	* var d = s2.data;
	* // returns [ <Slice>, <Slice>, <Slice> ]
	*
	* var v = d[ 0 ];
	* // returns <Slice>
	*
	* var start = v.start;
	* // returns 2
	*
	* var stop = v.stop;
	* // returns 10
	*
	* var step = v.step;
	* // returns 2
	*
	* v = d[ 1 ];
	* // returns <Slice>
	*
	* start = v.start;
	* // returns 0
	*
	* stop = v.stop;
	* // returns 10
	*
	* step = v.step;
	* // returns 1
	*
	* v = d[ 2 ];
	* // returns <Slice>
	*
	* start = v.start;
	* // returns 6
	*
	* stop = v.stop;
	* // returns 7
	*
	* step = v.step;
	* // returns 1
	*/
	normalizeMultiSlice: typeof normalizeMultiSlice;

	/**
	* Returns a normalized Slice object.
	*
	* ## Notes
	*
	* -   If `strict` is `true`, the function returns an error object when an input slice exceeds index bounds.
	*
	* @param slice - input slice
	* @param len - maximum number of elements allowed in a slice
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns Slice object (or an error object)
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.normalizeSlice( new Slice(), 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 0
	*
	* v = s.stop;
	* // returns 10
	*
	* v = s.step;
	* // returns 1
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.normalizeSlice( new Slice( null, 20, 2 ), 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 0
	*
	* v = s.stop;
	* // returns 10
	*
	* v = s.step;
	* // returns 2
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.normalizeSlice( new Slice( -5, -1, 1 ), 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 5
	*
	* v = s.stop;
	* // returns 9
	*
	* v = s.step;
	* // returns 1
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = ns.normalizeSlice( new Slice( -5, null, -1 ), 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 5
	*
	* v = s.stop;
	* // returns null
	*
	* v = s.step;
	* // returns -1
	*/
	normalizeSlice: typeof normalizeSlice;

	/**
	* Returns a list of reduced dimensions in an un-normalized multi-slice.
	*
	* @param slice - input slice
	* @returns list of indices
	*
	* @example
	* var MultiSlice = require( '@stdlib/slice-multi' );
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var s = new MultiSlice( 1, null, 2, void 0, new Slice( 0, 10, 1 ) );
	* // returns <MultiSlice>
	*
	* var indices = ns.reducedDimensions( s );
	* // returns [ 0, 2 ]
	*/
	reducedDimensions: typeof reducedDimensions;

	/**
	* Creates a MultiSlice object from a comma-separated list of string-serialized MultiSlice constructor arguments.
	*
	* ## Notes
	*
	* -   The function returns `null` if provided an invalid string.
	*
	* @param str - input string containing constructor arguments
	* @returns MultiSlice object (or null)
	*
	* @example
	* var s = ns.sargs2multislice( ',Slice(0,10,1)' );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ null, <Slice> ]
	*
	* @example
	* var s = ns.sargs2multislice( 'Slice(0,10,1),' );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice>, null ]
	*
	* @example
	* var s = ns.sargs2multislice( 'Slice(0,10,1),,,Slice(0,10,1)' );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice>, null, null, <Slice> ]
	*
	* @example
	* var s = ns.sargs2multislice( ',Slice(0,10,1),null,,Slice(2,9,2),null,' );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
	*/
	sargs2multislice: typeof sargs2multislice;

	/**
	* Converts a multidimensional subsequence string to a MultiSlice object.
	*
	* ## Notes
	*
	* -   A multidimensional subsequence string is a comma-separated list of single-dimension indexing expressions (i.e., integers and/or subsequence strings). For example, the following
	*
	*     ```text
	*     2
	*     :
	*     2:
	*     :10
	*     2:10
	*     ::-1
	*     10:2:-1
	*     :2:
	*     2:10:
	*     2::2
	*     :10:2
	*     :, :, :
	*     1, 2, 3
	*     0:10, 1:20:2, ::-1
	*     ...
	*     :, ..., 2
	*     ```
	*
	*     are all valid multidimensional subsequence strings.
	*
	* -   Providing a single nonnegative integer `i` as a single-dimension index indexes the same elements as the subsequence `i:i+1`.
	*
	* -   Providing a single negative integer `i` as a single-dimension index indexes the same elements as the subsequence `n+i:n+i+i`, where `n` is the dimension size.
	*
	* -   While integers index the same elements as equivalent subsequences, providing an integer as a single-dimension index indicates to reduce the number of dimensions by one (e.g., if the provided shape corresponds to an array having rank `2`, then `rank(A)-1 == rank(A['0,:'])`). In contrast, providing a subsequence indicates to retain a respective dimension (e.g., if the provided shape corresponds to an array having rank `2`, then `rank(A) == rank(A[':,:'])`).
	*
	* -   A multidimensional subsequence string can only contain **one** ellipsis ('...') operator. An ellipsis indicates to apply `:` to each dimension necessary to index all dimensions (e.g., if `A` has rank `4`, `A['1:, ..., 2:5'] == A['1:, :, :, 2:5']`).
	*
	* -   Except in the case of providing a single ellipsis, the number of single-dimension indexing expressions must equal the number of dimensions in the input shape.
	*
	* -   The function returns an error object if provided an invalid subsequence string.
	*
	* -   If `strict` is `true`, the function returns an error object if a single-dimension index expression which exceeds index bounds.
	*
	* @param str - input string
	* @param shape - maximum allowed slice shape
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns MultiSlice object or an error object
	*
	* @example
	* var s = ns.seq2multislice( '0:10:2', [ 10 ], false );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice> ]
	*
	* var s0 = data[ 0 ];
	* // returns <Slice>
	*
	* var v = s0.start;
	* // returns 0
	*
	* v = s0.stop;
	* // returns 10
	*
	* v = s0.step;
	* // returns 2
	*
	* @example
	* var s = ns.seq2multislice( 'end-3::-1', [ 10 ], false );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice> ]
	*
	* var s0 = data[ 0 ];
	* // returns <Slice>
	*
	* var v = s0.start;
	* // returns 7
	*
	* v = s0.stop;
	* // returns null
	*
	* v = s0.step;
	* // returns -1
	*
	* @example
	* var s = ns.seq2multislice( '2,0:10:2,-4', [ 10, 10, 10 ], false );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ 2, <Slice>, -4 ]
	*
	* @example
	* var s = ns.seq2multislice( '::-2,...,:', [ 10, 10, 10, 10, 10 ], false );
	* // returns <MultiSlice>
	*
	* var data = s.data;
	* // returns [ <Slice>, <Slice>, <Slice>, <Slice>, <Slice> ]
	*
	* var s1 = data[ 1 ];
	* // returns <Slice>
	*
	* var v = s1.start;
	* // returns 0
	*
	* v = s1.stop;
	* // returns 10
	*
	* v = s1.step;
	* // returns 1
	*/
	seq2multislice: typeof seq2multislice;

	/**
	* Converts a subsequence string to a Slice object.
	*
	* ## Notes
	*
	* -   A subsequence string has the following format:
	*
	*     ```text
	*     <start>:<stop>:<increment>
	*     ```
	*
	*     where
	*
	*     -   If an `increment` is not specified, the default increment is `1`. An increment of zero is **not** allowed.
	*     -   The `start` index is **inclusive**.
	*     -   The `stop` index is **exclusive**.
	*     -   Both `start` and `stop` indices are _optional_. If not provided, `start` and `stop` default to index extremes. Which extremes correspond to which index depends on whether the `increment` is positive or negative.
	*     -   Both `start` and `stop` can be negative; in which case, the corresponding index is resolved by subtracting the respective value from the provided length `len`.
	*     -   Both `start` and `stop` can use the `end` keyword (e.g., `end-2::2`, `end-3:`, etc), which supports basic subtraction and division.
	*     -   The `end` keyword resolves to the provided length `len`. Thus, `:-1` is equivalent to `:end-1`, `:-2` is equivalent to `:end-2`, and so on and so forth. The exception is when performing a division operation when the `increment` is less than zero; in which case, `end` is equal to `len-1` in order to preserve user expectations when `end/d` equals a whole number and slicing from right-to-left. The result from a division operation is **rounded down** to the nearest integer value.
	*
	* -   When `strict` is `false`, the resolved slice start is clamped to the slice index bounds (i.e., `[0, len)`).
	*
	* -   When `strict` is `false`, the resolved slice end is upper bound clamped to `len` (i.e., one greater than the last possible index).
	*
	* -   When the increment is negative, the resolved slice end value may be `null`, thus indicating that a non-empty slice should include the first index.
	*
	* -   The function ensures that results satisfy the convention that `:n` combined with `n:` is equivalent to `:` (i.e., selecting all elements).
	*
	* -   When `len` is zero, the function always returns a Slice object equivalent to `0:0:<increment>`.
	*
	* -   The function returns an error object if provided an invalid subsequence string.
	*
	* -   If `strict` is `true`, the function returns an error object if provided a subsequence string which exceeds index bounds.
	*
	* @param str - input string
	* @param len - maximum number of elements allowed in the slice
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns Slice object or an error object
	*
	* @example
	* var s = ns.seq2slice( '0:10:1', 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 0
	*
	* v = s.stop;
	* // returns 10
	*
	* v = s.step;
	* // returns 1
	*
	* @example
	* var s = ns.seq2slice( '::-1', 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 9
	*
	* v = s.stop;
	* // returns null
	*
	* v = s.step;
	* // returns -1
	*
	* @example
	* var s = ns.seq2slice( 'end::-1', 10, false );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 9
	*
	* v = s.stop;
	* // returns null
	*
	* v = s.step;
	* // returns -1
	*/
	seq2slice: typeof seq2slice;

	/**
	* Returns the shape of a normalized multi-slice.
	*
	* @param slice - input multi-slice
	* @returns slice shape
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var MultiSlice = require( '@stdlib/slice-multi' );
	* var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
	*
	* var s = new MultiSlice( new Slice( 2, null, 1 ), null, 10 );
	*
	* var v = ns.sliceShape( normalizeMultiSlice( s, [ 10, 5, 20 ], false ) );
	* // returns [ 8, 5, 1 ]
	*
	* v = ns.sliceShape( normalizeMultiSlice( s, [ 11, 3, 12 ], false ) );
	* // returns [ 9, 3, 1 ]
	*
	* v = ns.sliceShape( normalizeMultiSlice( s, [ 5, 10, 15 ], false ) );
	* // returns [ 3, 10, 1 ]
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var MultiSlice = require( '@stdlib/slice-multi' );
	* var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
	*
	* var s = new MultiSlice( null, new Slice( -1, 3, -2 ) );
	*
	* var v = ns.sliceShape( normalizeMultiSlice( s, [ 10, 5 ], false ) );
	* // returns [ 10, 1 ]
	*
	* v = ns.sliceShape( normalizeMultiSlice( s, [ 11, 10 ], false ) );
	* // returns [ 11, 3 ]
	*
	* v = ns.sliceShape( normalizeMultiSlice( s, [ 5, 15 ], false ) );
	* // returns [ 5, 6 ]
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	* var MultiSlice = require( '@stdlib/slice-multi' );
	* var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
	*
	* var s = new MultiSlice( 1, new Slice( 0, 0, 1 ) );
	*
	* var v = ns.sliceShape( normalizeMultiSlice( s, [ 10, 5 ], false ) );
	* // returns [ 1, 0 ]
	*
	* v = ns.sliceShape( normalizeMultiSlice( s, [ 11, 10 ], false ) );
	* // returns [ 1, 0 ]
	*
	* v = ns.sliceShape( normalizeMultiSlice( s, [ 5, 15 ], false ) );
	* // returns [ 1, 0 ]
	*/
	sliceShape: typeof sliceShape;

	/**
	* Converts a Slice object to a subsequence string.
	*
	* @param slice - input slice
	* @returns subsequence string
	*
	* @example
	* var Slice = require( '@stdlib/slice-ctor' );
	*
	* var str = ns.slice2seq( new Slice( null, null, null ) );
	* // returns ':'
	*
	* str = ns.slice2seq( new Slice( null ) );
	* // returns ':'
	*
	* str = ns.slice2seq( new Slice( 10 ) );
	* // returns ':10'
	*
	* str = ns.slice2seq( new Slice( -1 ) );
	* // returns ':-1'
	*
	* str = ns.slice2seq( new Slice( 2, 10 ) );
	* // returns '2:10'
	*
	* str = ns.slice2seq( new Slice( -2, 10 ) );
	* // returns '-2:10'
	*
	* str = ns.slice2seq( new Slice( -2, -10 ) );
	* // returns '-2:-10'
	*
	* str = ns.slice2seq( new Slice( 2, null ) );
	* // returns '2:'
	*
	* str = ns.slice2seq( new Slice( null, 10 ) );
	* // returns ':10'
	*
	* str = ns.slice2seq( new Slice( 2, 10, 2 ) );
	* // returns '2:10:2'
	*
	* str = ns.slice2seq( new Slice( -1, null, -1 ) );
	* // returns '-1::-1'
	*
	* str = ns.slice2seq( new Slice( -1, -5, -1 ) );
	* // returns '-1:-5:-1'
	*
	* str = ns.slice2seq( new Slice( -1, 10, -1 ) );
	* // returns '-1:10:-1'
	*
	* str = ns.slice2seq( new Slice( 1, -1, 2 ) );
	* // returns '1:-1:2'
	*
	* str = ns.slice2seq( new Slice( null, null, -1 ) );
	* // returns '::-1'
	*/
	slice2seq: typeof slice2seq;

	/**
	* Parses a string-serialized MultiSlice object.
	*
	* ## Notes
	*
	* -   The function returns `null` if provided an invalid string.
	*
	* @param str - input string
	* @returns MultiSlice object (or null)
	*
	* @example
	* var s = ns.str2multislice( 'MultiSlice(null,null,null)' );
	* // returns <MultiSlice>
	*
	* var v = s.data;
	* // returns [ null, null, null ]
	*
	* @example
	* var s = ns.str2multislice( 'MultiSlice(10,Slice(0,10,1),null)' );
	* // returns <MultiSlice>
	*
	* var v = s.data;
	* // returns [ 10, <Slice>, null ]
	*
	* @example
	* var s = ns.str2multislice( 'MultiSlice(foo,bar)' );
	* // returns null
	*/
	str2multislice: typeof str2multislice;

	/**
	* Parses a string-serialized Slice object.
	*
	* ## Notes
	*
	* -   The function returns `null` if provided an invalid string.
	*
	* @param str - input string
	* @returns Slice object (or null)
	*
	* @example
	* var s = ns.str2slice( 'Slice(null,null,null)' );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns null
	*
	* v = s.stop;
	* // returns null
	*
	* v = s.step;
	* // returns null
	*
	* @example
	* var s = ns.str2slice( 'Slice(0,10,1)' );
	* // returns <Slice>
	*
	* var v = s.start;
	* // returns 0
	*
	* v = s.stop;
	* // returns 10
	*
	* v = s.step;
	* // returns 1
	*
	* @example
	* var s = ns.str2slice( 'Slice(foo,bar)' );
	* // returns null
	*/
	str2slice: typeof str2slice;
}

/**
* Base slice namespace.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
