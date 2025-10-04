import { Text } from "@radix-ui/themes";

export function Heading({ children }: { children?: React.ReactNode }) {
  return (
    <p className=" text-primary text-3xl mb-4 text-center font-medium">
      {children}
    </p>
  );
}

export function SubHeading({ children }: { children?: React.ReactNode }) {
  return (
    <Text size="5" className=" text-subHeading text-center lg:text-left">
      {children}
    </Text>
  );
}
