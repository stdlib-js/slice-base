<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base slice namespace.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/slice-base/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/slice-base@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Base slice namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`sliceLength( slice )`][@stdlib/slice/base/length]</span><span class="delimiter">: </span><span class="description">compute the number of elements in a normalized slice.</span>
-   <span class="signature">[`normalizeMultiSlice( slice, shape, strict )`][@stdlib/slice/base/normalize-multi-slice]</span><span class="delimiter">: </span><span class="description">normalize a `MultiSlice` object.</span>
-   <span class="signature">[`normalizeSlice( slice, len, strict )`][@stdlib/slice/base/normalize-slice]</span><span class="delimiter">: </span><span class="description">normalize a `Slice` object.</span>
-   <span class="signature">[`seq2multislice( str, shape, strict )`][@stdlib/slice/base/seq2multislice]</span><span class="delimiter">: </span><span class="description">convert a multidimensional subsequence string to a `MultiSlice` object.</span>
-   <span class="signature">[`seq2slice( str, len, strict )`][@stdlib/slice/base/seq2slice]</span><span class="delimiter">: </span><span class="description">convert a subsequence string to a `Slice` object.</span>
-   <span class="signature">[`sliceShape( slice )`][@stdlib/slice/base/shape]</span><span class="delimiter">: </span><span class="description">compute the shape of a normalized multi-slice.</span>
-   <span class="signature">[`slice2seq( str )`][@stdlib/slice/base/slice2seq]</span><span class="delimiter">: </span><span class="description">convert a `Slice` object to a subsequence string.</span>
-   <span class="signature">[`str2multislice( str )`][@stdlib/slice/base/str2multislice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized `MultiSlice` object.</span>
-   <span class="signature">[`str2slice( str )`][@stdlib/slice/base/str2slice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized `Slice` object.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/slice-base@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-base

[test-image]: https://github.com/stdlib-js/slice-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/slice-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-base/tree/deno
[umd-url]: https://github.com/stdlib-js/slice-base/tree/umd
[esm-url]: https://github.com/stdlib-js/slice-base/tree/esm
[branches-url]: https://github.com/stdlib-js/slice-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/slice/base/length]: https://github.com/stdlib-js/slice-base-length/tree/umd

[@stdlib/slice/base/normalize-multi-slice]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/tree/umd

[@stdlib/slice/base/normalize-slice]: https://github.com/stdlib-js/slice-base-normalize-slice/tree/umd

[@stdlib/slice/base/seq2multislice]: https://github.com/stdlib-js/slice-base-seq2multislice/tree/umd

[@stdlib/slice/base/seq2slice]: https://github.com/stdlib-js/slice-base-seq2slice/tree/umd

[@stdlib/slice/base/shape]: https://github.com/stdlib-js/slice-base-shape/tree/umd

[@stdlib/slice/base/slice2seq]: https://github.com/stdlib-js/slice-base-slice2seq/tree/umd

[@stdlib/slice/base/str2multislice]: https://github.com/stdlib-js/slice-base-str2multislice/tree/umd

[@stdlib/slice/base/str2slice]: https://github.com/stdlib-js/slice-base-str2slice/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
