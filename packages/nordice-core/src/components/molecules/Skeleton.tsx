import * as React from "react";
import clsx from "clsx";

interface SkeletonBaseProps {
  className?: string;
}

interface SkeletonContainer {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

type SkeletonProps<T> = {
  as: keyof JSX.IntrinsicElements | React.FC;
  className?: string;
  children: React.ReactNode;
} & (T extends React.FC<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never);

const Skeleton = <T extends keyof JSX.IntrinsicElements | React.FC>({
  as,
  children,
  ...rest
}: SkeletonProps<T>) => {
  const Component = as;
  return <Component {...rest}>{children}</Component>;
};

const Container = ({ children, as, className }: SkeletonContainer) => {
  const Component = as || "div";
  return (
    <Component className={clsx("animate-pulse", className)}>
      {children}
    </Component>
  );
};

const Avatar = ({ className }: SkeletonBaseProps) => {
  return (
    <div
      className={clsx(
        `mt-1 rounded-full bg-gray-200 animate-pulse ltr:mr-2 rtl:ml-2`,
        className
      )}
    />
  );
};

const Text = ({
  className = "",
  invisible = false,
}: SkeletonBaseProps & { invisible?: boolean }) => {
  return (
    <span
      className={clsx(
        `font-size-0 dark:white-300 inline-block animate-pulse rounded-md bg-gray-300 empty:before:inline-block empty:before:content-['']`,
        className,
        invisible && "invisible"
      )}
    />
  );
};

const Button = ({ className }: SkeletonBaseProps) => {
  return (
    <Container>
      <div className={clsx(`rounded-md bg-gray-200`, className)} />
    </Container>
  );
};

Skeleton.Container = Container;
Skeleton.Text = Text;
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;

export default Skeleton;
