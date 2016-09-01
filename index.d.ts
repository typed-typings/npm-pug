declare namespace pug {
  export function compile (str: string, options?: Options): Template;
  export function compileFile (filename: string, options?: Options): Template;
  export function render (str: string, options?: Options & any, fn?: (err: Error | void, res: string) => void): string;
  export function renderFile (filename: string, options?: Options & any, fn?: (err: Error | void, res: string) => void): string;

  export interface Options {
    cache?: boolean;
    filename?: string;
    compileDebug?: boolean;
    pretty?: boolean;
  }

  export interface Template {
    (locals?: any): string;
  }
}

export = pug;
