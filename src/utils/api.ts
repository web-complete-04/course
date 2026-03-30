export class ApiError extends Error {
  public statusCode:number;

  constructor(statusCode: number, message?: string) {
    super(message);
    this.statusCode = statusCode;
  }
}


export class Api<Data> {
  public resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  private async handleResponse(this: void, res: Response) {
    const data = await res.json() as Data | string;
    if(res.ok && typeof data !== 'string') {
      return data;
    }

    let message = '';
    if(typeof data === 'string') {
      message = data;
    }

    throw new ApiError(res.status, message)
  }

  private makeRequest(urlPostfix?: string | null, page?: number, limit?: number) {
    const baseUrl = `/api/${this.resource}`;
    let urlEnding = '';

    if(urlPostfix) {
      urlEnding = `/${urlPostfix}`;
    }
    
    const searchParams: Record<string, string> = {};

    if(page) {
      searchParams._page = String(page);
    }

    if(limit) {
      searchParams._limit = String(limit);
    }

    const search = new URLSearchParams(searchParams).toString();

    if(search) {
      urlEnding += `?${search}`;
    }

    return fetch(`${baseUrl}${urlEnding}`)
      .then(this.handleResponse)
      .catch((err: unknown) => {
        console.warn(err);
        return null;
      })
  }

  public create() {
    //this is not empty
  }

  public readOne(id: number | string) {
    return this.makeRequest(String(id));
  }

  public readAll(page = 1, limit = 10) {
    return this.makeRequest(null, page, limit);
  }

  public update() {
    //this is not empty
  }
  public remove() {
    //this is not empty
  }
}
