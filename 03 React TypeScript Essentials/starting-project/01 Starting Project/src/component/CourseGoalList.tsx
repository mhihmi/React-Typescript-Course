import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "./../App.tsx"

type CourseGoalListProps = {
    goals: CGoal[], // Array of this object template is expected
    onDeleteGoal: (id: number) => void; // function type returning nothing with id as parameter
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) =>
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            )}
        </ul>
    )
}
