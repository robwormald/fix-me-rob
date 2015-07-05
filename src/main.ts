// Code goes here
//import deps here, much easier (and works with bundling)
// doing generic import just adds to the window (which is what we want....)
import 'zone.js';
import 'es6-shim';
import 'reflect-metadata'

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
routerDirectives} from 'angular2/router';

import {TestService} from './TestService'

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
    constructor(testService: TestService) {
        
       
        this.data = {};

       testService.load()
            .map(res => res.json())
            .subscribe(data => {
                this.data = data;
                console.log(this.data);
            })

    }
}

bootstrap(App, [httpInjectables, TestService]).catch(err => console.log(err));