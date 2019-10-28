# @fnando/react-native-carousel

[![NPM package version](https://img.shields.io/npm/v/@fnando/react-native-carousel.svg)](https://www.npmjs.com/package/@fnando/react-native-carousel)
![License: MIT](https://img.shields.io/npm/l/@fnando/react-native-carousel.svg)

A ridiculously simple carousel.

## Usage

### Installation

```console
$ yarn add @fnando/react-native-carousel
```

### How to use

The basic usage is [rendering the carousel as it its][example-1]. This means
that indicators will be rendered using `#ccc` for inactive dots and `#4a90e2`
for active dots.

If you need to customize the indicators in any way, even changing the color,
you'll have to implement your own renderer. You can either disable the
indicators entirely with `showsIndicator={false}` then [rendering them outside
the `Carousel` component][example-2], or just [pass the indicator
element][example-3] using `renderIndicator`.

If you need to programatically go to an specific page, get a `ref` and use
`ref.current.goToPage(page: number, animated: boolean)`. The referece also
contains the current `ScrollView` object.

### Examples

[![Default indicators](https://github.com/fnando/react-native-carousel/raw/master/images/default-indicators.gif)][example-1]

[![Custom indicators](https://github.com/fnando/react-native-carousel/raw/master/images/custom-indicators.gif)][example-2]

[![Custom indicators - Change color](https://github.com/fnando/react-native-carousel/raw/master/images/custom-indicators-simple.gif)][example-3]

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[example-1]:
  https://github.com/fnando/react-native-carousel/blob/master/examples/default-indicators/App.tsx
[example-2]:
  https://github.com/fnando/react-native-carousel/blob/master/examples/custom-indicators/App.tsx
[example-3]:
  https://github.com/fnando/react-native-carousel/blob/master/examples/custom-indicators-simple/App.tsx
