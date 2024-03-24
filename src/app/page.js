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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projectTitles.map((item, index) => {
        return <ProjectCard key={index} item={item} />;
      })}
    </main>
  );
}
