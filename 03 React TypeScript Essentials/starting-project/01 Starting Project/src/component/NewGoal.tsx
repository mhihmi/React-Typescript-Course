import { useRef, type FormEvent } from "react"

// 3.43 Handling User Input
type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
    // 3.42 useRef() w/ TS - Ref by default contain undefined as value
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    // DOM Base Types from lib in ts.config file
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // 3.41
        // One of the 3 ways to handle input datas, built-in FormData (another way would be useState, and another way would be useRef) 
        // new FormData(event.currentTarget)

        // 3.42 useRef() w/ TS
        const enteredGoal = goal.current!.value; // '!'because goal.current will never be null
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);
        event.currentTarget.reset(); // reset the form after submit
    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal} />
            {/* Add name attribute if FormData is used */}
            {/* <input id="goal" type="text" name="goal" /> */}
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}
