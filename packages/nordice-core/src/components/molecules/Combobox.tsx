import { IconChevronDown } from "@tabler/icons";
import * as React from "react";
import { cn, createCtx } from "../../utils";
import Input, { Props as InputProps } from "../atoms/Input";

const [useCtx, Provider] = createCtx<{
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: Props<any>["onChange"];
  selected: Props<any>["selected"];
  by: string;
  id?: string;
}>();

type Props<O> = {
  children: React.ReactNode;
  id: string;
  onChange: React.Dispatch<React.SetStateAction<Props<O>["selected"]>>;
  selected: O extends object ? O : null;
  by: string;
  className?: string;
};

function Combobox<O>({ children, className, id, onChange, selected, by }: Props<O>) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      <Provider value={{ id, expanded, setExpanded, onChange, selected, by }}>{children}</Provider>
    </div>
  );
}

Combobox.Options = ({
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"ul">, "role" | "id">) => {
  const { expanded, id } = useCtx();

  return (
    <ul
      id={id}
      role="listbox"
      className={cn(
        "absolute top-14 -z-10 w-full rounded-lg bg-white p-4 opacity-0 shadow-[rgba(17,_12,_46,_0.15)_0px_48px_100px_0px] transition-opacity duration-100",
        expanded && "z-10 opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

Combobox.Option = ({
  children,
  className,
  value,
  ...props
}: {
  children: React.ReactNode | ((selected: any) => JSX.Element);
  value: Record<string, unknown> | string;
} & Omit<React.ComponentPropsWithoutRef<"li">, "role" | "onClick" | "children" | "value">) => {
  const { setExpanded, onChange, selected, by } = useCtx();

  const isString = typeof value === "string" && typeof selected === "string";
  const isObject = typeof value === "object" && selected && typeof selected === "object";
  let arg;

  if (!selected) arg = null;

  if (isString) arg = value === selected;

  if (isObject) arg = value[by] === selected[by];

  return (
    <li
      role="option"
      className={cn(
        "hover:bg-polarNight2 hover:text-snowStorm2  flex h-9 cursor-pointer items-center rounded-md px-3 pb-[3px] text-sm font-medium",
        className,
      )}
      onClick={() => {
        onChange(value);
        setExpanded(false);
      }}
      {...props}
    >
      {typeof children === "function" ? children(arg) : children}
    </li>
  );
};

Combobox.Input = (props: Omit<InputProps, "icon" | "role" | "aria-expanded">) => {
  const { expanded, setExpanded, id } = useCtx();

  return (
    <Input
      role="combobox"
      aria-expanded={expanded}
      aria-controls={id}
      onClick={() => setExpanded((c) => !c)}
      icon={{
        placement: "end",
        element: (
          <IconChevronDown
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
          />
        ),
      }}
      {...props}
    />
  );
};
export default Combobox;
