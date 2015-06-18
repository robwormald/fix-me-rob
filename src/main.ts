// Code goes here
import {
bootstrap,
View,
Component,
EventEmitter,
formDirectives,
httpInjectables,
FormBuilder,
ControlGroup,
Http,
NgZone
} from 'angular2/angular2';

import {
routerInjectables,
routerDirectives} from 'angular2/router'


@Component({
    selector: 'test-app',
    injectables: [routerInjectables]
})
@View({
    template: `
    hello, {{data.foo}}
  `,
    directives: [routerDirectives]
})
class App {
    data: any;
    constructor(http: Http) {
        this.data = {};

        http.get('foo.json')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data;
                console.log(this.data);
            })

    }
}

bootstrap(App, [httpInjectables])