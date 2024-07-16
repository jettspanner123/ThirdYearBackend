import {createServer, IncomingMessage, Server, ServerResponse} from "node:http";


const {log: PrintLine} = console;
const PORT: number = 8000;
const HOST: string = "localhost";
const server: Server<typeof IncomingMessage, typeof ServerResponse> = createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hell Uddeshya Singh");
});

server.listen(PORT, HOST, (): void => {
    PrintLine(`Server running at ${PORT}`);
});
