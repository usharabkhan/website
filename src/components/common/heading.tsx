import { Text } from "@radix-ui/themes";

export function Heading({ children }: { children?: React.ReactNode }) {
  return (
    <p className=" text-primary text-4xl mb-10 text-center font-bold">
      {children}
    </p>
  );
}

export function SubHeading({ children }: { children?: React.ReactNode }) {
  return (
    <Text size="5" className=" text-white text-center lg:text-left">
      {children}
    </Text>
  );
}
