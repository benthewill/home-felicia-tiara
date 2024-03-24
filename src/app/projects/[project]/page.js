import { createClient } from "@/utils/server";
import ProjectPageSection from "@/components/ProjectPageSection";

export default async function Page({ params }) {
  const supabase = createClient();
  let { data: projectData } = await supabase
    .from("project-data")
    .select("*")
    .eq("project_id", params.project);

  let { data: projectTitles } = await supabase
    .from("project-titles")
    .select("*")
    .eq("project_id", params.project);

  const projectTitle = projectTitles[0].project_title;
  const projectYear = projectTitles[0].year;
  const projectPremise = projectTitles[0].project_premise;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-24 max-w-4xl">
        <p className="mb-4 text-9xl font-black">{projectTitle}</p>
        <p className="text-xl font-thin">{projectPremise}</p>
      </div>
      {projectData.map((item, index) => {
        return (
          <ProjectPageSection
            item={item}
            projectID={params.project}
            key={index}
          />
        );
      })}
    </main>
  );
}
