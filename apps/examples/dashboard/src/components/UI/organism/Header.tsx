import { Avatar } from "@nordice/core";
import SearchBar from "components/UI/molecules/Searchbar";

const Header = () => {
  return (
    <header className="z-10 flex min-h-[4.5rem] w-full flex-col gap-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="w-full text-2xl font-medium text-polarNight2">
          Hello rndy28 👋
        </h1>
        <div className="flex w-full justify-end gap-4">
          <SearchBar
            status="idle"
            placeholder="search here..."
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />

          <Avatar size="md" />
        </div>
      </div>
    </header>
  );
};

export default Header;
