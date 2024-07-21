import Head from "next/head";
import { Sora } from "next/font/google";
import TestimonialCard from "@/components/testimonialCard";
import Input from "@/components/input";
import SkillCard from "@/components/skillCard";
import ExperienceCard from "@/components/experienceCard";

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
          <ExperienceCard
            company="Google"
            startDate="2019"
            endDate="Present"
            logo={""}
            title="SDE at Launchezy"
            description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
          />
        </div>
      </main>
    </>
  );
}
