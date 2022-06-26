import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Login: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>A CASE OF SISTERS CHAMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input name="username" type="text" placeholder="Your name" />
      <input name="password" type="password" placeholder="Your password" />
      <button className="">
        LOGIN
      </button>
    </div>
  );
};

export default Login;
