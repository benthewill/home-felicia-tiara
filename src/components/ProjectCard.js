"use client";

import { Button, ButtonGroup, Link } from "@nextui-org/react";

export default function ProjectCard({ item }) {
  const projectTitle = item.project_title;
  const projectYear = item.year;
  const projectPremise = item.project_premise;
  const projectID = item.project_id;

  return (
    <div className="max-w-unit-9xl flex flex-col gap-4 pb-24">
      <div className="flex flex-col">
        <p className="text-9xl font-bold ">{projectTitle}</p>
      </div>
      <p className="text-xl font-thin">{projectPremise}</p>
      <Button
        variant="bordered"
        size="large"
        className="w-1/4"
        radius="none"
        as={Link}
        href={`projects/${projectID}`}
      >
        <p className="text-2xl">{"->"}</p>
      </Button>
    </div>
  );
}
