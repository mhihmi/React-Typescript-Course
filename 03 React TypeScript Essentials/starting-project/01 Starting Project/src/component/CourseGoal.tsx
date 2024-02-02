// add type decorator is good practice
import { type PropsWithChildren } from "react";
// import { type ReactNode } from "react";

// With Alias/Custom Type //

// With children Prop 3.30/31/32
// interface CourseGoalProps { title: string; children: ReactNode }
// With children Alternative
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>

// Without children Prop (replace children by description in jsx)
// interface CourseGoalProps { title: string; description: string }
// OR
// type CourseGoalProps = { title: string; description: string }

export default function CourseGoal({ id, title, children, onDelete }: CourseGoalProps) {
  return <article>
    <div>
      <h2>{title}</h2>
      {children}
      {/* <p>{description}</p> */}
    </div>
    <button onClick={() => onDelete(id)}>Delete</button>
  </article>
}

// Without Alias/Custom Type //

// export default function CourseGoal({ title, description }: { title: string;  description: string}) {
//     return <article>
//       <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>
//         <button>Delete</button>
//   </article>
// }

// 3.34

