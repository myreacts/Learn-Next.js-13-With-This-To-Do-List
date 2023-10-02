"use client";

type ToDoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleToDo: (id: string, complete: boolean) => void;
};
export function TodoItem({ id, title, complete, toggleToDo }: ToDoItemProps) {
  return (
    <>
      <li className="flex gap-1 items-center">
        <input
          type="checkbox"
          id={id}
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </li>
    </>
  );
}
