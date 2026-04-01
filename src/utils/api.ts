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

export class Api<Data> {
  public resource: string;
  private headers = {
    'Content-Type': 'application/json',
  };

  constructor(resource: string) {
    this.resource = resource;
  }

  private async handleResponse(this: void, res: Response) {
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

  private makeRequest(options: MakeRequestParams) {
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
      .then(this.handleResponse)
      .catch((err: unknown) => {
        console.warn(err);
        return null;
      });
  }

  public create(body: Record<string, string>) {
    return this.makeRequest({
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers,
    });
  }

  public readOne(id: number | string) {
    return this.makeRequest({id: String(id)});
  }

  public readAll(page = 1, limit = 10) {
    return this.makeRequest({page, limit});
  }

  public update(id: number, body: Record<string, string>) {
    return this.makeRequest({
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
