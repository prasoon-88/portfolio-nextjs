import Head from "next/head";
import { Sora } from "next/font/google";
import TestimonialCard from "@/components/testimonialCard";
import Input from "@/components/input";

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
        <div className="container mt-60">
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        </div>
      </main>
    </>
  );
}
