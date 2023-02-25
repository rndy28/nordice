import { Input, Loader, TUnionToKeys } from "@nordice/core";
import { IconAlertCircle, IconSearch } from "@tabler/icons-react";
import * as React from "react";

type TStatus = "idle" | "loading" | "error";

interface Props extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  status: TStatus;
}

const icon: TUnionToKeys<TStatus, React.ReactElement> = {
  idle: <IconSearch size={22} className="text-polarNight2-500" />,
  loading: <Loader size="sm" />,
  error: <IconAlertCircle size={22} className="text-aurora0" />,
};

const SearchBar = ({ status, ...props }: Props) => {
  return (
    <Input
      aria-invalid={status === "error"}
      size="md"
      icon={{
        element: icon[status],
        placement: "end",
      }}
      iconWrapperClassName="max-w-[20rem]"
      {...props}
    />
  );
};

export default SearchBar;
