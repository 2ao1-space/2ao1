import { useState } from "react";

export function useAvilability() {
  const [status, setStatus] = useState("Loading...");
  const [timeStr, setTimeStr] = useState("");

  function getStatusBtHour(hour, now) {
    let status = "";
    let until;

    if (hour >= 0 && hour < 9) {
      status = "Sleeping. Will get back soon!";
      until = new Date(now.setHours(9, 0, 0, 0));
    }

    if (hour >= 9 && hour < 17) {
      status = "Available to work.";
      until = new Date(now.setHours(17, 0, 0, 0));
    }

    if (hour >= 17 && hour < 23) {
      status = "Relaxing & Recharging.";
      until = new Date(now.setHours(23, 0, 0, 0));
    }

    if (hour >= 23) {
      status = "Sleeping. Will get back soon!";
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(9, 0, 0, 0);
      until = tomorrow;
    }

    return { status, until };
  }

  function updateAvailability() {
    const now = new Date();
    const hour = now.getHours();
    const timeStr = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const { status } = getStatusBtHour(hour, now);

    setStatus(status);
    setTimeStr(timeStr);

    const msToNextMinute =
      60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    setTimeout(updateAvailability, msToNextMinute);
  }

  return { updateAvailability, status, timeStr };
}
