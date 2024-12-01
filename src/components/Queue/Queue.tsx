import React from "react";
import ProfileTabs from "../ProfileTabs/ProfileTabs";
import ProfileDetails from "./components/ProfileDetails";
import Conversation from "./components/Conversation";
import Messages from "./components/Messages";

const Queue: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-5">
      <ProfileTabs />
      <div className="grid grid-cols-1 lg:grid-cols-3 my-5 gap-5">
        <ProfileDetails />
        <Conversation />
        <Messages />
      </div>
    </div>
  );
};

export default Queue;
