import Vue from "vue";
import App from "./App"
// import "./assets/neomorph.css";

let v = new Vue({
    el: "#app",
    template: `
    <div class="App-Index">
        <App />
    </div>
    `,
    data: { name: "World" },
    components: {
        App
    }
});
