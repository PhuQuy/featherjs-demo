import { Injectable } from '@angular/core';
import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    private _feathers = feathers();                     // init socket.io
    private _socket = io(environment.api);      // init feathers
    // private feathersAuthClient = require('@feathersjs/authentication-client').default;

    constructor() {
        this._feathers
            .configure(feathersSocketIOClient(this._socket))  // add socket.io plugin
            .configure(feathersRx({                           // add feathers-reactive plugin
                idField: '_id'
            }));
    }

    // expose services
    public service(name: string) {
        return this._feathers.service(name);
    }
}
