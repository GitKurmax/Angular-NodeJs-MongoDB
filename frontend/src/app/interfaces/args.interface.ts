export interface ApiCfg {
    type: string;
    data?: any;
    urlParams?: any;
    disableErrorHandler?: boolean;
    queryParams?: {
        [key: string]: any;
    };
    headers?: {
        [name: string]: string;
    };
    responseType?: string;
}
