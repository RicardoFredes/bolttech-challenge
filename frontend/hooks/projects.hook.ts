import { useContext } from "react";
import { ProjectsContext } from "../contexts/projects.contexts";

export const useProjects = () => {
  const values = useContext(ProjectsContext);
  return values;
};
