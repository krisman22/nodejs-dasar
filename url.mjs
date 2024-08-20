import { URL } from "url";

const uri = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

uri.searchParams.append("status", "premium")

console.info(uri.toString());
console.info(uri.href);
console.info(uri.origin);
console.info(uri.pathname);
console.info(uri.searchParams);