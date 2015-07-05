import {Http} from 'angular2/angular2'

export class TestService {
    http:Http;
    constructor(http:Http){
        this.http = http;
    }
    
    load(){
        return this.http.get('foo.json').toRx();
    }
}