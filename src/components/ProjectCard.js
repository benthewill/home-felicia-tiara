"use client";

import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useTrail, useTransition, a } from "@react-spring/web";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextTrail = ({ opened, title }) => {
  const trail = useTrail(title.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: opened ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        originX: 0,
        originY: 1,
        rotate: 3,
        transition: {
          type: "spring",
          damping: 30,
          stiffness: 300,
        },
        initial: false,
      }}
      whileTap={{
        scale: 1.04,
        originX: 0,
        originY: 1,
        rotate: 8,
        transition: {
          type: "spring",
          damping: 30,
          stiffness: 300,
        },
      }}
      className="text-4xl md:text-9xl font-black tracking-widest flex flex-row"
    >
      {trail.map((style, index) => {
        if (title[index] == " ") {
          return (
            <a.div key={index} style={style} id="letter">
              <p>&ensp;</p>
            </a.div>
          );
        } else {
          return (
            <a.div key={index} style={style} id="letter">
              {title[index]}
            </a.div>
          );
        }
      })}
    </motion.div>
  );
};

export default function ProjectCard({ item }) {
  let projectTitle = item.project_title;
  const projectYear = item.year;
  const projectPremise = item.project_premise;
  const projectID = item.project_id;

  const [useOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen((state) => true);
  }, []);

  return (
    <>
      <div className="max-w-unit-[50vw] flex flex-col gap-1 md:gap-4 pb-2 md:pb-20 text-zinc-300 dark:text-zinc-800 hover:text-zinc-800 dark:hover:text-zinc-300">
        <div className="flex flex-col">
          <Link href={`projects/${projectID}`}>
            <TextTrail title={projectTitle.toUpperCase()} opened={useOpen} />
          </Link>
        </div>
      </div>
      <Divider className="mb-4 md:mb-20 max-w-24 md:max-w-xs" />
    </>
  );
}
