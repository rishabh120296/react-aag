import { useEffect, useState } from "react";

useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    getStatus();
  }, []);

  getStatus = () => {
    window.addEventListener("offline", () => {
      console.log("OFF");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("ON");
      setOnlineStatus(true);
    });
  };

  return onlineStatus;
};

export default useOnlineStatus;
