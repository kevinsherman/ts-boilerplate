import { readFile } from "fs/promises";
import api from "./sample";

const users = await api.get("/users");
console.log(JSON.stringify(users.data.users.length, null, 2));

const fileName = "./src/foo.txt";

const file = await readFile(fileName, "utf8");

const speak = `${file} ${process.env.MY_NAME}!`;

console.log(speak);

export function sum(a: number, b: number) {
  return a + b;
}
