import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContextProvider";

import { useGetLessonsQuery } from "../graphql/generated";

import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <aside
      className={`w-[348px] lg:visible ${
        !sidebarOpen
          ? "lg:block hidden"
          : "visible absolute z-50 min-w-full min-h-screen"
      } bg-gray-700 p-6 border-l border-gray-600`}
    >
      <span className="block w-full my-6 text-gray-100 text-xl font-bold">
        Cronograma de aulas
      </span>

      <div className="w-full flex flex-col gap-5">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
