import Head from "next/head";
import { Sora } from "next/font/google";
import Input from "@/components/input";
import TextArea from "@/components/textarea";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Prasoon Asati</title>
        <meta name="description" content="Prasoon Asati's Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={sora.className}>
        <div className="container">
          <Input type="email" helpText="sakhk" />
          <TextArea helpText="sakhk" />
        </div>
      </main>
    </>
  );
}
