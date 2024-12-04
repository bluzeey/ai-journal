"use client"

import {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
} from "@xyflow/react"

import "@xyflow/react/dist/style.css"

import { useCallback, useState } from "react"

import CustomNode from "./heronode" // Import the custom node

// Define your edges

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    animated: true,
    type: "smoothstep", // Type to create smooth paths
    className: "animated-edge", // Custom class for styling
    style: { strokeWidth: 3, stroke: "#D1D5DB" }, // Updated stroke color to bg-gray-300
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    animated: true,
    type: "smoothstep",
    className: "animated-edge",
    style: { strokeWidth: 3, stroke: "#D1D5DB" }, // Updated stroke color to bg-gray-300
  },
]

// Define your nodes and assign different types with dynamic props
const initialNodes = [
  {
    id: "1",
    data: {
      label: "Web Scraper",
      backgroundColor: "rgb(137, 204, 246)", // Light Blue
      gradientColor: "rgba(137, 204, 246, 0.2)", // Gradient Color for Input Node
      iconSrc: "/images/web_scraper.png", // Replace with the actual icon path for input
    },
    type: "custom",
    position: { x: 100, y: 10 },
  },
  {
    id: "2",
    data: {
      label: "Ask AI",
      backgroundColor: "rgb(186, 241, 156)", // Light Green
      gradientColor: "rgba(186, 241, 156, 0.2)", // Gradient Color for Default Node
      iconSrc: "/images/openai.png", // Replace with the actual icon path for default
    },
    type: "custom",
    position: { x: 20, y: 110 },
  },
  {
    id: "3",
    data: {
      label: "Write to Google Sheets",
      backgroundColor: "rgb(255, 198, 135)", // Light Orange
      gradientColor: "rgba(255, 198, 135, 0.2)", // Gradient Color for Output Node
      iconSrc: "/images/gsheets.png", // Replace with the actual icon path for output
    },
    type: "custom",
    position: { x: 100, y: 210 },
  },
]

// Register the custom node type
const nodeTypes = {
  custom: CustomNode,
}

function Flow() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  )
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  )
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        panOnDrag={false} // Disable panning when dragging
        panOnScroll={false} // Disable panning on scroll
        zoomOnScroll={false} // Disable zooming via scroll
        zoomOnDoubleClick={false} // Disable zooming via double click
        elementsSelectable={true} // Allow node selection
        nodesDraggable={true} // Ensure nodes are draggable
        preventScrolling={false}
        nodeExtent={[
          [10, 10], // Top-left corner
          [310, 310], // Bottom-right corner (or adjust based on your viewport size)
        ]}
      ></ReactFlow>
    </div>
  )
}

export default Flow
