import { UserProfile } from "./UserProfile";

import { SearchButton } from "./SearchButton";
import { FaCheckDouble } from "react-icons/fa6";
import AppLogo from "@/app/AppComponents/AppLogo";

export function TaskHeader() {
  return (
    <div className="flex justify-between  items-center mb-6">
      <AppLogo />
      <div className="flex items-center gap-1 ">
        <SearchButton />
        <UserProfile />
      </div>
    </div>
  );
}
