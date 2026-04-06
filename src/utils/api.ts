import { toast } from "react-toastify";

export class ApiError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

type MakeRequestParams = RequestInit & {
  id?: string;
  page?: number;
  limit?: number;
};

export class Api {
  public resource: string;
  private headers = {
    'Content-Type': 'application/json',
  };

  constructor(resource: string) {
    this.resource = resource;
  }

  private async handleResponse<Data>(this: void, res: Response) {
    const data = (await res.json()) as Data | string;
    if (res.ok && typeof data !== "string") {
      return data;
    }

    let message = "";
    if (typeof data === "string") {
      message = data;
    }

    toast.error(message);
    throw new ApiError(res.status, message);
  }

  private makeRequest<R>(options: MakeRequestParams): Promise<R> {
    const baseUrl = `/api/${this.resource}`;
    let urlEnding = "";

    const { id, page, limit, ...fetchInit } = options;

    if (id) {
      urlEnding = `/${id}`;
    }

    const searchParams: Record<string, string> = {};

    if (page) {
      searchParams._page = String(page);
    }

    if (limit) {
      searchParams._limit = String(limit);
    }

    const search = new URLSearchParams(searchParams).toString();

    if (search) {
      urlEnding += `?${search}`;
    }

    return fetch(`${baseUrl}${urlEnding}`, fetchInit)
      .then(this.handleResponse<R>);
  }

  public create<R>(body: Record<string, string>) {
    return this.makeRequest<R>({
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers,
    });
  }

  public readOne<R>(id: number | string) {
    return this.makeRequest<R>({id: String(id)});
  }

  public readAll<R>(page = 1, limit = 10) {
    return this.makeRequest<R>({page, limit});
  }

  public update<R>(id: number, body: Record<string, string>) {
    return this.makeRequest<R>({
      id: String(id),
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: this.headers,
    });
  }
  public remove(id: number) {
    return this.makeRequest({
      id: String(id),
      method: 'DELETE',
    });
  }
}
