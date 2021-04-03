import readFile from "utils/readFile";

import { TEMPLATE } from "./constants";

const createStoriesFile = async (dirName: string, input: string) => {
  const file = await readFile("Marklar.stories.txt");

  const value = file.replace(
    'title: "UI/Marklar"',
    `title: "${dirName.toUpperCase()}/${input}"`
  );

  const regex = new RegExp(TEMPLATE, "g");
  const content = value.replace(regex, input);
  const fileName = `${input}.stories`;
  const ext = "tsx";

  return { fileName, content, ext };
};

export default createStoriesFile;
