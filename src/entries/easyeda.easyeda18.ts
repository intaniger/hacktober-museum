import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "EasyEDA - PCB Design",
  theme: ProjectThemes.Mindful,
  founderName: Founders.EasyEDA2021,
  topic: AcademicTopics.JavaScript,
  githubUrl: "https://github.com/EasyEDA2021",
  imagePath: undefined
};

export default props;
