import { useId } from "react";

type Props = {
  fromParent: string;
  onMessageFromChild: (msg: string) => void;
  fromSibling?: string;
  onMessageFromSibling?: (mg: string) => void;
};

export function Child({
  fromParent,
  onMessageFromChild,
  fromSibling,
  onMessageFromSibling,
}: Props) {
  const id = useId();

  function handleSend() {
    onMessageFromChild(`Message from child ${id}: "${String(Math.random())}"`);
  }

  function handleSendToSibling() {
    onMessageFromSibling?.(`Message from Sibling ${id}: "${String(Math.random())}"`);
  }

  return (
    <>
      <h2>This is a child {id}</h2>
      <h3>Message: {fromSibling} {fromParent}</h3>
      <button onClick={handleSend}>Send 2 Parent</button>
      {onMessageFromSibling && <button onClick={handleSendToSibling}>Send 2 Sibling</button>}
    </>
  );
}
