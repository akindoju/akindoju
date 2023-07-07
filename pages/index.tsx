import { Homepage } from "../components/Homepage/Homepage";
import Head from "next/head";
// import { Home } from "@/components/Home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Olusola Akindoju | Frontend Developer</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Homepage />
    </>
  );
}
