import { useState } from "react";
import { Child } from "./Child";

export function Parent() {
  const [message, setMessage] = useState("");
  const [messageFromChildren, setMessageFromChildren] = useState("");
  const [interChildMessage, setInterChildMessage] = useState("");

  function handleSend() {
    setMessage(`Message from parent: "${String(Math.random())}"`);
  }
  return (
    <>
      <h1>Inter-component Communication Example</h1>
      <h3>Message from child: {messageFromChildren}</h3>
      <button onClick={handleSend}>Send 2 Children</button>
      <hr />
      <Child
        fromParent={message}
        onMessageFromChild={setMessageFromChildren}
        fromSibling={interChildMessage}
      />
      <Child
        fromParent={message}
        onMessageFromChild={setMessageFromChildren}
        onMessageFromSibling={setInterChildMessage}
      />
    </>
  );
}
