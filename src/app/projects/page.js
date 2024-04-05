// export const dynamic = "force-dynamic"; // not sure if required
export const runtime = "edge";

import { createClient } from "@/utils/server";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const supabase = await createClient();
  let { data: projectTitles, error } = await supabase
    .from("project-titles")
    .select("*");

  return (
    <main className="flex min-h-screen flex-col justify-between p-2 md:p-12 md:pt-12 pt-16">
      {projectTitles.map((item, index) => {
        return <ProjectCard key={index} item={item} />;
      })}
    </main>
  );
}
