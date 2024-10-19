import Editor from "@monaco-editor/react";
import { useState } from "react";
// import * as ts from "typescript";
import { createProjectSync, ts } from "@ts-morph/bootstrap";

// import omitExample from './examples/omit';
import { init, validate } from "../challenges/HelloWorld/init";
import { types } from "../challenges/types";
//TODO Change files to be .ts and import them


const CodeEditor = () => {
    const [tsCode, setTsCode] = useState(init);
    // const [validateCode, setValidateCode] = useState(validate);

    function compileTypeScript() {
        const wholeCode = types + ' ' + tsCode + ' ' + validate;
        const project = createProjectSync({ useInMemoryFileSystem: true });

        project.createSourceFile(
            "MyClass.ts",
            wholeCode,
        );

        const program = project.createProgram();
        const errors = ts.getPreEmitDiagnostics(program); // check these

        return errors;
    }

    const validateCode = () => {
        const compiledCode = compileTypeScript();
        console.log(compiledCode);
    };

    return <>
        <Editor height="500px" width="500px"
            defaultLanguage="typescript"
            value={tsCode}
            onChange={(value) => setTsCode(value || "")} />

        <Editor height="500px" width="500px"
            defaultLanguage="typescript"
            defaultValue={validate} />

        <button onClick={validateCode}>Validate solution</button>
    </>
}

export default CodeEditor;