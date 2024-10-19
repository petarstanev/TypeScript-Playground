import Editor from "@monaco-editor/react";
import { useState } from "react";
import { createProjectSync, ts } from "@ts-morph/bootstrap";

import challenge from "../challenges/HelloWorld";
import { types } from "../challenges/types";

const CodeEditor = () => {
    const [tsCode, setTsCode] = useState(challenge.init);
    const [isValid, setIsValidCode] = useState(false);

    function validateCode() {
        const wholeCode = types + tsCode + `
        type cases = [
            ${challenge.tests}
        ]`;
        const project = createProjectSync({ useInMemoryFileSystem: true });

        project.createSourceFile(
            "MyClass.ts",
            wholeCode,
        );

        const program = project.createProgram();

        const errors = ts.getPreEmitDiagnostics(program);
        console.log(errors);
        setIsValidCode(() => errors.length === 0);
    }

    return <>
        <h2>
            {challenge.description}
        </h2>
        <Editor height="500px" width="500px"
            defaultLanguage="typescript"
            value={tsCode}
            onChange={(value) => setTsCode(value || "")} />
        <ul>
            {challenge.tests.map(challenge => <li key={challenge} style={{ backgroundColor: isValid ? 'green' : 'red' }}>{challenge}</li>)}
        </ul>

        <button onClick={validateCode}>Validate solution</button>
    </>
}

export default CodeEditor;