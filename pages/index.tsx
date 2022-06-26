import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>A CASE OF SISTERS CHAMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex ">
        <div className="m-8 box-border">
          {/* <Image /> */}
          <h1>
            User
          </h1>
          <div>
            <p>Name: user</p>
            <p>Phone number: user number</p>
            <p>Email: user@email.com</p>
            <button>Edit</button>
          </div>
        </div>
        <div className="m-8 ">
            <h1 className="font-bold text-lg">Hello User</h1>
            <button>Account</button>
            <button>Attendance</button>
            <button>Loan</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
