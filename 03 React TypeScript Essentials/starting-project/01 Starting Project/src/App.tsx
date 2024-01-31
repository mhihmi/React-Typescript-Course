import { useState } from "react";

import CourseGoalList from "./component/CourseGoalList.tsx";
import Header from "./component/Header.tsx";
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

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals, newGoal]
    })
  }

  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
      <h1>Your Course Goals</h1>
    </Header>

    <button onClick={handleAddGoal}>Add Goal</button>

    {/* Without children Prop */}
    {/* <CourseGoal title="Learn React + TS" description="Learn it from the ground up" /> */}
    {/* With children Prop */}
    {/* <CourseGoal title="Learn React + TS">
      <p>Learn it from the ground up</p>
    </CourseGoal> */}

    <CourseGoalList goals={goals} />
  </main>
}
