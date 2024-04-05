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
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-12">
      <div className="my-12 md:my-24 max-w-full md:max-w-2xl">
        <p className="mb-4 text-4xl md:text-[10rem] leading-none tracking-widest font-black pb-0 md:pb-10">
          {projectTitle.toUpperCase()}
        </p>
        <p className="text-2xl md:text-3xl font-thin">{projectPremise}</p>
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
