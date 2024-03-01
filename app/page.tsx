"use client"

import { useState, useEffect } from "react";
import { setup, publish } from "./lib/nats-service";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [server, setServer] = useState<string>(process.env.NATS_HOST || "localhost:4222");


  async function send() {
    console.log("send: ", key, value);
    publish(key, value);
  }

  async function connect() {
    let status = await setup({
      servers: server
    });

    if (status) {
      alert("Server connected");
      setLoading(!status);
    } else {
      alert("Unable to connect to NATS");
    }
  }

  return (
    <main>
      <div className="flex flex-row h-screen">
        <div className="basis-1/4 border-2 border-sky-500">
          <div className="flex flex-col p-2">
            <h3>Server</h3>
            <div className="flex flex-col gap-2">
              <input name="server" className="p-1" type="text" placeholder="server" value={server} onChange={e => setServer(e.currentTarget.value)} />
              <button className="p-1 hover:bg-violet-600" onClick={connect}>Connect</button>
            </div>
          </div>
          {(!loading) &&
            <div className="flex flex-col p-2">
              <h3>Producer</h3>
              <div className="flex flex-col gap-2">
                <input name="value" className="p-1" type="text" placeholder="subject" value={key} onChange={e => setKey(e.currentTarget.value)} />
                <textarea name="value" id="value" cols={5} rows={10} value={value} onChange={e => setValue(e.currentTarget.value)}></textarea>
                <button className="p-1 hover:bg-violet-600" onClick={send}>Send</button>
              </div>
            </div>
          }
        </div>
        <div className="basis-3/4">
          <iframe src="http://localhost:3002/" className="h-full w-full"></iframe>
        </div>
      </div>
    </main>
  );
}
