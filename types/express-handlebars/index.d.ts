// Type definitions for express-handlebars
// Project: https://github.com/ericf/express-handlebars
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>, Igor Dultsev <https://github.com/yhaskell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import handlebars, { compile } from 'handlebars'

type CompileOptions = typeof compile extends (_: any, CO: infer CO) => any ? Exclude<CO, undefined> : never

interface PartialTemplateOptions {
    cache?: boolean;
    precompiled?: boolean;
}

interface RenderOptions {
    cache?: boolean;
    data?: Object;
    helpers?: any;
    partials?: any;
}

interface ExphbsOptions {
    handlebars?: handlebars;
    extname?: string;
    layoutsDir?: string;
    partialsDir?: string;
    defaultLayout?: string;
    helpers?: { [name: string]: Function};
    compilerOptions?: CompileOptions;
}

interface ExphbsCallback {
    (err: any, content?: string): void;
}

interface Exphbs {
    engine: Function;
    extname: string;
    compiled: Object;
    precompiled: Object;
    create(options?: ExphbsOptions): Exphbs;
    getPartials(options?: PartialTemplateOptions): Promise<Object>;
    getTemplate(filePath: string, options?: PartialTemplateOptions): Promise<Function>;
    getTemplates(dirPath: string, options?: PartialTemplateOptions): Promise<Object>;
    render(filePath: string, context: Object, options?: RenderOptions): Promise<string>;
    renderView(viewPath: string, callback: ExphbsCallback): void;
    renderView(viewPath: string, options: any, callback: ExphbsCallback): void;
}

interface ExpressHandlebars {
  (options?: ExphbsOptions): (...args: any[]) => any;
  create (options?: ExphbsOptions): Exphbs;
}

declare module "express-handlebars" {
    var exphbs: ExpressHandlebars;
    export = exphbs;
}
