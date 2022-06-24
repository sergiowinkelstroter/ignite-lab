import { gql, useQuery } from "@apollo/client";
import { X } from "phosphor-react";
import { Link } from "react-router-dom";

import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside
      className={[
        "block w-full md:w-[358px] fixed md:static bg-gray-600 px-8 [@media(max-width:869px)]:h-full transition-[left] smooth delay-700 z-50",
        `${isOpen ? "" : "[@media(max-width:869px)]:left-out"}`,
      ].join(" ")}
    >
      <span className="block w-full my-6 text-gray-100 text-xl font-bold">
        Cronograma de aulas
      </span>

      <div className="w-full flex flex-col gap-5 overflow-y-auto">
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
