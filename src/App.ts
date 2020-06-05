
import Vue from 'vue'
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import DetailBar from "./components/detail-bar.vue";

export default Vue.extend({
    // el: "#app",
    template: `
    <div class="app">
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        <detail-bar />
        </div>
    `,
    data: function () { 
        return  ({ name: "World" }) 
    },
    components: {
        HelloComponent,
        HelloDecoratorComponent,
        DetailBar
    }
});
