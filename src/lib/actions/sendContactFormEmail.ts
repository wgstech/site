"use server";

import { setTimeout } from "node:timers";

interface Data {
  name: string;
  phone: string;
  details: string;
}

export async function sendContactFormEmail(data: Data) {
  await wait();
  console.log(data);
  return data;
}

function wait(time = 1000) {
  return new Promise((res) => setTimeout(res, time));
}
