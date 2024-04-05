"use client";

import { Button, ButtonGroup, Link, Image } from "@nextui-org/react";

export default function ProjectPageSection({ item, projectID }) {
  const projectDataName = item.project_data_name;
  const projectIsMedia = item.is_media;
  const projectDataCaption = item.project_data_caption;

  const storagePhotoURL = `https://gvjbpydxtrwlusgdmwzb.supabase.co/storage/v1/object/public/photos/${projectID}/${projectDataName}`;

  return (
    <div className="flex max-w-8xl flex-col gap-2 md:gap-4 pb-10 md:pb-24">
      <div className="flex flex-col">
        {projectIsMedia ? (
          <div className="flex w-full flex-col gap-4 p-0 md:p-6">
            <Image
              // isZoomed
              width={4000}
              alt={projectDataCaption}
              src={storagePhotoURL}
            />
            <p className="text-lg md:text-2xl font-thin">
              {projectDataCaption}
            </p>
          </div>
        ) : (
          <div className="p-0 md:p-6">
            <p className="text-3xl md:text-5xl font-bold">
              {projectDataCaption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
