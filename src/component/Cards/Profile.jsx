/* eslint-disable react/prop-types */
import { getInitials } from "../../utils/helper";

export default function Profile({ logout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("John Doe")}
      </div>

      <div>
        <p className="text-sm font-medium ">John Doe</p>
        <button className="text-sm text-slate-700 underline" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
