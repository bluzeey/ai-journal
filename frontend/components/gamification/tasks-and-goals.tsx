"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export function TasksAndGoals() {
  const [customGoal, setCustomGoal] = useState("")

  const dailyTasks = [
    { id: "task1", label: "Write a gratitude journal entry", points: 10 },
    { id: "task2", label: "Reflect on today's mood", points: 5 },
    { id: "task3", label: "Set a goal for tomorrow", points: 5 },
  ]

  const weeklyChallenge = {
    label: "Complete 5 entries this week",
    progress: 3,
    total: 5,
    points: 50,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks and Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Daily Tasks</h3>
            <ul className="space-y-2">
              {dailyTasks.map((task) => (
                <li key={task.id} className="flex items-center">
                  <Checkbox id={task.id} />
                  <label htmlFor={task.id} className="ml-2 text-sm">
                    {task.label} (+{task.points} pts)
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Weekly Challenge</h3>
            <p className="text-sm">
              {weeklyChallenge.label} - {weeklyChallenge.progress}/
              {weeklyChallenge.total} (+
              {weeklyChallenge.points} pts)
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Custom Goal</h3>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Set a personal goal"
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
              />
              <Button>Set</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
