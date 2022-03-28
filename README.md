# svelte-shielded

A svelte port of the [Women's Refuge Shielded Site Project](https://shielded.co.nz/)

is fully functional and tested manually, since i couldnt be bothered writing automatic tests.

# Installation

`svelte-shielded` is a available on npm
```
npm i --save svelte-shielded
```
or with yarn
```
yarn add svelte-shielded
```
or with pnpm
```
pnpm add svelte-shielded
```

# Usage

`svelte-shielded` contains 3 `.svelte` files, these files are the 3 modes that the modal can take (they can be used interchangably and multiple can be used simultaneously).

- Button
- Small Tab
- Large Tab

to import the package, add the following line to your code
```js
import {Button, SmallTab, LargeTab} from 'svelte-shielded';
```

Each of these can be used like standard svelte components, however, only the button is to be treated as a standard element, the 2 tab elements will place themselves ontop of ALL other markdown using CSS

## Parameters

***All parameters are optional.***

The small and large tab both have a `top` and `left` parameter in order to determine where to place the component on the screen, by default these parameters are `0` and `300`.

# Issues

If you come across an issue with the repostiry, feel free to open up an issue stating the problem, and we can work very quickly to resolve it since the is the kinds of library that can be very important.

