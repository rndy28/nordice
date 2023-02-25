import clsx from "clsx";
import * as React from "react";

const Form = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  return (
    <form {...props}>
      {children}
    </form>
  );
};

Form.Error = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={clsx(
        "text-aurora0 inline-block font-medium mt-1 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Form.Label = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"label">) => {
  return (
    <label className={clsx("font-normal mb-1", className)} {...props}>
      {children}
    </label>
  );
};

Form.Group = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
};

export default Form;
