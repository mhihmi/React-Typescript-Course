import { useState } from "react";

import CourseGoalList from "./component/CourseGoalList.tsx";
import Header from "./component/Header.tsx";
import NewGoal from "./component/NewGoal.tsx";
import goalsImg from "./assets/goals.jpg"

//3.36 TsUseState
export type CourseGoal = {
  title: string;
  description: string;
  id: number
}
export default function App() {
  //3.36 TsUseState
  const [goals, setGoals] = useState<CourseGoal[]>([])
  // Same As
  // const [goals, setGoals] = useState<Array<CourseGoal>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
      <h1>Your Course Goals</h1>
    </Header>

    <NewGoal onAddGoal={handleAddGoal} />

    {/* Without children Prop */}
    {/* <CourseGoal title="Learn React + TS" description="Learn it from the ground up" /> */}
    {/* With children Prop */}
    {/* <CourseGoal title="Learn React + TS">
      <p>Learn it from the ground up</p>
    </CourseGoal> */}

    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
  </main>
}
