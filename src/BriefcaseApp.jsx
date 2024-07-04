import { AppRouter } from "./briefcase/routes/AppRouter";
import {  useAll } from "./context/AllContext";

export const BriefcaseApp = () => {
  const {isMode}=useAll()
  return (
    <div className={`${
      isMode ? "bg-blue-200" : "bg-gray-600"
    }`}>
        <AppRouter />
    </div>
  );
};
