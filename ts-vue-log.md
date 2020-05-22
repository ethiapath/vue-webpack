Ok I'm going to try and document my process for once.

Honestly just having a text file open where I paste links throughout my googlings 
would be incredibly valuble!

I want to make a music app on the web

I drew some desings, but esentially I'm recreating ableton live.
Speaking of design. I think it'd be cool to use some neumorphism
https://www.justinmind.com/blog/neumorphism-ui/
https://neumorphism.io/#55b9f3

https://codepen.io/miocene/pen/oNNOmza
https://dribbble.com/shots/9956580-Freebie-Neumorphic-UI-elements
https://dribbble.com/tags/neomorphism
https://dribbble.com/shots/9890709-Neumorphism-UI-Trend-2020


To start I want to impliment the detail device view.

I did some inital research that was pretty fruitful
I'll post links here

I also need to find those web audio examples I was reading on my phone.


THen maybe a link to the guy who integrated web audio into a vue component


SO I just cloned this vue with typescript project from microsoft
https://github.com/Microsoft/TypeScript-Vue-Starter

Using vue I'm able to choose the best web tech!
vue + ts + scss + pug

I think this set makes nice clean looking code on the web

I'll have to learn pug (I might switch to normal html), but scss is just sass with no brackets

I also wanted a project with webpack exposed so I could learn that and integrate diffrent tech.
Like wasm... More on that later :)


# Setup webpack dev server

I'm gonna try and follow this guide
https://linguinecode.com/post/how-to-setup-webpack-dev-server-react-babel

simplist webpack config (need to test)
```js
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  devServer: {
    contentBase: path.join('dist'),
    compress: false,
    hot: true,
    port: 3000,
    publicPath: '/',
  },
}
```

THis guy took a screen shot of his npm install command 🙄
or it was just in a weird code block that wasn't copyable? 
```
npm i --save-dev html-webpack-plugin webpack webpack-cli webpack-dev-server
```

Running into webpack issues
```
ERROR in ./src/components/Hello.vue?vue&type=style&index=0&id=361a4bd2&lang=scss&scoped=true& (./node_modules/vue-loader/lib??vue-loader-options!./src/components/Hello.vue?vue&type=style&index=0&id=361a4bd2&lang=scss&scoped=true&) 37:0
Module parse failed: Unexpected token (37:0)
File was processed with these loaders:
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
| 
| 
> .greeting {
|     font-size: 20px;
| }
 @ ./src/components/Hello.vue?vue&type=style&index=0&id=361a4bd2&lang=scss&scoped=true& 1:0-153 1:169-172 1:174-324 1:174-324
 @ ./src/components/Hello.vue
 @ ./src/index.ts

ERROR in ./src/components/HelloDecorator.vue?vue&type=style&index=0&id=1daead39&lang=scss&scoped=true& (./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloDecorator.vue?vue&type=style&index=0&id=1daead39&lang=scss&scoped=true&) 37:0
Module parse failed: Unexpected token (37:0)
File was processed with these loaders:
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
| 
| 
> .greeting {
|     font-size: 20px;
| }
 @ ./src/components/HelloDecorator.vue?vue&type=style&index=0&id=1daead39&lang=scss&scoped=true& 1:0-162 1:178-181 1:183-342 1:183-342
 @ ./src/components/HelloDecorator.vue
 @ ./src/index.ts
 ```

Just had to add the css loader :)
https://webpack.js.org/concepts/loaders/#loader-features






