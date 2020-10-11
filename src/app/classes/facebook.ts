
export class Facebook {
    constructor(
        // public https: string,
        // public social: string,
        public username: string,
        // public responseType: string,
        public appId: string,
        // public redirectUrl: string,
        public state: string, // A unique string value of your choice that is hard to guess. Used to prevent CSRF. For example, state=DCEeFWf45A53sdfKef424.
        // public scopes: string, // URL-encoded, space-delimited list of member permissions your application is requesting on behalf of the user. These must be explicitly requested.
        // public secret: string
    ) { }
}
