import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _rest;

    constructor(
        private _restService: BaseService
    ) {
        // Let's get both the socket.io and REST feathers services for messages!
        this._rest = _restService.service('user');
    }

    user$() {
        // just returning the observable will query the backend on every subscription
        // using some caching mechanism would be wise in more complex applications
        return (<any>this._restService // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
            .service('user'))
            .watch()
            .find();
    }

    public find(query?: any) {
        return this._rest.find(query);
    }

    public get(id: string, query: any) {
        return this._rest.get(id, query);
    }

    public create(user: any) {
        return this._rest.create(user);
    }

    public remove(id: string, query: any) {
        return this._rest.remove(id, query);
    }
}
