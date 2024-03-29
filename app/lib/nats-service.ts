'use server'

import exp from "constants";
import { NatsConnection, connect, JSONCodec } from "nats";


let nc: NatsConnection;

export async function setup(v: any) {
  try {
    nc = await connect(v);
    console.log(`connected to ${nc.getServer()}`);
    if (nc) {
      return true;
    }
  } catch (error) {
    console.log(v, error);
  }

  return false;
}

export async function publish(key: string, value: string) {
  if (nc) {
    console.log("publish: ", key, value);
    nc.publish(key, JSONCodec().encode(JSON.parse(value)));
  }
}
