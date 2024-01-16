import { type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
}

const CourseGoal = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
