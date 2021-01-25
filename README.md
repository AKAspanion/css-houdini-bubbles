# CSS Houdini Bubbles

A CSS Houdini Paint Worklet to draw background bubbles.

![CSS Houdini Bubbles](https://github.com/AKAspanion/css-houdini-bubbles/blob/main/assets/demo.png?raw=true)

## Usage

### 1. Getting `css-houdini-bubbles`
### Installing using UNPKG
Using CDN is the easiest way to add the library: 

```javascript
if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('https://unpkg.com/css-houdini-bubbles/dist/bubbles.js');
}
```

For old browsers, you need to add a pollyfill.  
Include the [css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) before loading the Worklet.

```javascript
<script>
(async function() {
    if (CSS['paintWorklet'] === undefined) {
        await import('https://unpkg.com/css-paint-polyfill');
    }

    CSS.paintWorklet.addModule('https://unpkg.com/css-houdini-bubbles/dist/bubbles.js');
})()
</script>
```

#### Installing it Locally

You can install the `css-houdini-bubbles` locally using NPM.

```bash
npm install css-houdini-bubbles
```

### Usage in CSS
To use Bubbles Paint Worklet you need to set the background-image property to `paint(bubbles)`
```css
.bubbles {
    background-image: paint(bubbles);
}
```
Bubbles Paint Worklet has few custom properties for tweaking its appearance.
```css
.bubbles {
    --bubbles-colors: #007C8E, #7940c1;
    --bubbles-min-radius: 20;
    --bubbles-max-radius: 100;
    --bubbles-total-num: 30;
    --bubbles-is-dark: no;

    background-image: paint(bubbles);
}
```

| property | description | default value |
| -------- | ----------- | ------------- |
| --bubbles-colors | **Colors to use**, one or more hexadecimal colors comma separated | `#007C8E, #7940c1`|
| --bubbles-min-radius | **Minimum radius**, minimum bubble radius | `10` |
| --bubbles-max-radius | **Maximum radius**, maximum bubble radius | `60` |
| --bubbles-total-num | **Number of Bubbles to draw** | `20` |
| --bubbles-is-dark | **Render bubbles on dark background**, (accepts `yes` or `no` ) | `no` |

## Demo
Play around on Codepen [https://codepen.io/spanion/pen/rNMgerx](https://codepen.io/spanion/pen/rNMgerx)

## Acknowledgement
Got the inspiration from this [video](https://www.youtube.com/watch?v=5eBar5TI71M) by [@una](https://github.com/una)

## License
MIT