'use client'

import { NatsEvent } from "./types"

export default function EventList({
    events
}:{
    events: NatsEvent[]
}) {
    return (
        <>
            <div className="h-full w-full p-2 border border-solid border-slate-400">
                <ul>
                {events.map(e => <>
                    <li className="p-1" key={e.timestamp.getUTCMilliseconds()}>
                        <span>[{e.timestamp.toDateString()}]</span><br />
                        <span>{e.key}: {e.value}</span>
                    </li>
                </>)}
                </ul>
            </div>
        </>
    )
}