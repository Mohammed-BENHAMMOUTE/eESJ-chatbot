import {Button,TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";


export default function Chat(){
    const [question, setQuestion] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    async function send(){
        return ChatAiService.ragChat(question).then(resp => setResponse(resp));
    }

    return(
        <div className="p-m">
            <h2>eESJ CHATBOT</h2>
            <div>
                <TextField  theme="primary" style = {{width:"80%"}} onChange={(e => setQuestion(e.target.value))}/>
                <Button theme="primary" onClick={send}>Send</Button>
            </div>
            <div>
                <Markdown>
                    {response}
                </Markdown>
            </div>

        </div>

    )
}