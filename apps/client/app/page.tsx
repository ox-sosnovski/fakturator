import {trpc} from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({ name: "Joe"});
  return (
      <h1>{response}</h1>
  );
}
