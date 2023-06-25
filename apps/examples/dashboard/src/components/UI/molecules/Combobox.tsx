import { Combobox as C } from "@nordice/core";
import { IconCheck } from "@tabler/icons-react";
import * as React from "react";
const items = [
  {
    id: 1,
    email: "rendyramadhan838@gmail.com",
  },
  {
    id: 2,
    email: "S.Pratama@gmail.com",
  },
  {
    id: 3,
    email: "rrne38@gmail.com",
  },
];

const Combobox = () => {
  const [selectedEmail, setSelectedEmail] = React.useState<
    null | typeof items[0]
  >(null);

  return (
    <C
      id="email-list"
      onChange={setSelectedEmail}
      selected={selectedEmail}
      by="id"
    >
      <C.Input
        size="md"
        aria-readonly="true"
        value={selectedEmail?.email || ""}
      />
      <C.Options>
        {items.map((item) => (
          <C.Option key={item.id} value={item}>
            {(selected) => (
              <>
                {item.email}
                {selected && <IconCheck size={20} className="ml-auto" />}
              </>
            )}
          </C.Option>
        ))}
      </C.Options>
    </C>
  );
};
export default Combobox;
