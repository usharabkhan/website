import { Flex } from "@radix-ui/themes";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdDownload, MdOutlineMail } from "react-icons/md";
import MyButton from "../common/button";

export default function Socials(){
    return(
        <div className="flex flex-col justify-center items-center gap-5 py-5">
            <Flex justify="center" align="center" gap="6" >
                <MyButton customStyle="rounded-full text-2xl" href="https://www.linkedin.com/in/usharabkhan/">
                    <AiOutlineLinkedin/>
                </MyButton>
                <MyButton customStyle="rounded-full text-2xl" href="https://github.com/usharabkhan/" >
                    <AiOutlineGithub/>
                </MyButton>
                <MyButton customStyle="rounded-full text-2xl" href="mailto:usharabkhan@gmail.com">
                    <MdOutlineMail/>
                </MyButton>
            </Flex>
            <Flex justify="center">
                <MyButton customStyle="text-xl">
                    <MdDownload />
                    My Resume
                </MyButton>
            </Flex>
        </div>
    )
}