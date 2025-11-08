declare module '@apiverve/websitetotext' {
  export interface websitetotextOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface websitetotextResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class websitetotextWrapper {
    constructor(options: websitetotextOptions);

    execute(callback: (error: any, data: websitetotextResponse | null) => void): Promise<websitetotextResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: websitetotextResponse | null) => void): Promise<websitetotextResponse>;
    execute(query?: Record<string, any>): Promise<websitetotextResponse>;
  }
}
