export class Event {
  readonly url: URL;

  public responseStatus: number = 404;
  public responseHeaders: Record<string, string> = { "x-source": "preact-static" };
  public responseMultiValueHeaders: Record<string, string[]> = {};
  public responseBody = "";

  constructor(
    readonly method: string,
    readonly originalUrl: string,
    readonly headers: Record<string, string | string[] | undefined>
  ) {
    this.url = new URL(`http://${headers.host}${originalUrl}`);
  }
}
