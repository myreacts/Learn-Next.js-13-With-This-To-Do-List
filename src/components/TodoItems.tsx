type ToDoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};
export function TodoItem({ id, title, complete }: ToDoItemProps) {
  return (
    <>
      <li className="flex gap-1 items-center">
        <input type="checkbox" id={id} className="cursor-pointer peer" />
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
