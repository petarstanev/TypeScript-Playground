import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as ts from "typescript";
import omitExample from './examples/omit';
import partialExample from './examples/partial';

function compileTypeScript(code: string) {
    const result = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    });
    return result.outputText;
}

const Omit = () => {
    const [tsCode, setTsCode] = useState(omitExample);//TODO: Change to Enums
    const [jsCode, setJsCode] = useState("");

    const handleRunCode = () => {
        const compiledCode = compileTypeScript(tsCode);
        setJsCode(compiledCode);//TODO: Error handling
    };

    return <>
        <button onClick={() => { setTsCode(omitExample) }}>Omit</button>
        <button onClick={() => { setTsCode(partialExample) }}>Partial</button>

        <Editor height="500px" width="1000px"
            defaultLanguage="typescript"
            value={tsCode}
            onChange={(value) => setTsCode(value || "")} />
        <button onClick={handleRunCode}>Run Code</button>
        <Editor height="500px" width="1000px"
            defaultLanguage="javascript"
            value={jsCode}
        />
    </>
}

export default Omit;