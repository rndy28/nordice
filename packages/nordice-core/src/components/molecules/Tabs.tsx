import { AnimatePresence, domMax, LazyMotion, m } from "framer-motion";
import * as React from "react";

interface Props {
  items: { id: number; title: string; content: React.ReactNode }[];
  initialSelected?: number;
  className?: string;
}

const Tabs = ({ initialSelected, items, className }: Props) => {
  const [selected, setSelected] = React.useState(initialSelected ?? 1);
  return (
    <LazyMotion features={domMax}>
      <div className={className}>
        <nav className="w-fit">
          <ul className="flex gap-3 w-full">
            {items.map(({ title, id }) => (
              <li
                className="rounded-md rounded-bl-none rounded-br-none relative cursor-pointer w-full select-none"
                key={id}
              >
                <button
                  className="w-fit cursor-pointer whitespace-nowrap bg-transparent pb-1"
                  onClick={() => setSelected(id)}
                >
                  {title}
                </button>
                {id === selected ? (
                  <m.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-frost3"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex justify-center items-center flex-grow">
          <AnimatePresence mode="wait">
            <m.div
              className="mt-4"
              key={selected}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {items[selected - 1].content}
            </m.div>
          </AnimatePresence>
        </main>
      </div>
    </LazyMotion>
  );
};

export default Tabs;
