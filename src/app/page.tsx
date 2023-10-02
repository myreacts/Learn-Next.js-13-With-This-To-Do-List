import { TodoItem } from "@/components/TodoItems";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  // 新增一条数据
  /* await prisma.todo.create({
    data: {
      title: "Todo 1",
      complete: false,
    },
  }); */
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none
        "
          href="/new"
        >
          New
        </Link>
      </header>
      <div className="pl-4">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </>
  );
}
