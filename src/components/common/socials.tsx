import { Flex } from "@radix-ui/themes";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdDownload, MdOutlineMail } from "react-icons/md";
import MyButton from "../common/button";

export default function Socials() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-xl">
      <Flex justify="center" align="center" gap="4">
        <MyButton customStyle="rounded-full p-3" href="https://www.linkedin.com/in/usharabkhan/">
          <AiOutlineLinkedin size={24} />
        </MyButton>
        <MyButton customStyle="rounded-full p-3" href="https://github.com/usharabkhan/">
          <AiOutlineGithub size={24} />
        </MyButton>
        <MyButton customStyle="rounded-full p-3" href="mailto:usharabkhan@gmail.com">
          <MdOutlineMail size={24} />
        </MyButton>
      </Flex>
    </div>
  );
}
