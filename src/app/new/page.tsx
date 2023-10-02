import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createToDo(data: FormData) {
  // 仅调用于服务器
  // 需要在next.config配置
  // experimental: {
  //  serverActions: true,
  // },
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    return new Error("Invalid Title");
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  });

  redirect("/");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createToDo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="
        border border-slate-300 bg-transparent rounded px-2 py-1 outline-none
        focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
