import cn from "../utils/cn";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-x-3 top-3 rounded-xs border",
        "px-4 py-4 text-white shadow-[2px_2px_0_0_#0000001a]",
        message.type === "error" && "border-red-900 bg-red-700",
        "transition-[translate,opacity] transition-discrete starting:-translate-y-6 starting:opacity-0",
      )}
    >
      {message.text}
    </div>
  );
};

export default Notification;
