import cn from "../utils/cn";

const Notification = ({ message }) => {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-3 mx-auto max-w-[calc(24rem-1.5rem)] px-2 py-1",
        message.type === "success" && "bg-green-700 text-white",
        message.type === "error" && "bg-red-700 text-white",
      )}
    >
      {message.text}
    </div>
  );
};

export default Notification;
