import { Text } from "@radix-ui/themes";

export function Heading({ children }: { children?: React.ReactNode }) {
  return (
    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl md:text-5xl mb-12 text-center font-medium tracking-tight">
      {children}
    </h2>
  );
}

export function SubHeading({ children }: { children?: React.ReactNode }) {
  return (
    <Text size="5" className="text-text font-medium text-center lg:text-left">
      {children}
    </Text>
  );
}
