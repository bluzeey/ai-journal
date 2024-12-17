import React, { useCallback, useState } from "react"
import {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import "@xyflow/react/dist/style.css"

interface BranchingTimelineProps {
  branches: {
    [key: string]: {
      versions: any[]
      metadata?: { originBranch: string; originVersionIndex: number }
    }
  }
  currentBranch: string
  currentVersionIndex: number
  onSeek: (versionIndex: number) => void
  onCreateBranch: () => void
  onSelectBranch: (branchName: string) => void
}

// A persistent map to store branch colors
const branchColorMap: { [key: string]: string } = {}
const colors = [
  "#D1E8FF",
  "#FFE5B4",
  "#DFFFD6",
  "#FFEBB8",
  "#C9F7F7",
  "#FADADD",
  "#F7F7D4",
  "#DAD8F7",
  "#D4F1F4",
  "#FFF4C2",
]

// Assigns or returns the existing color for a branch
const getOrAssignBranchColor = (branchName: string) => {
  if (!branchColorMap[branchName]) {
    const colorIndex = Object.keys(branchColorMap).length % colors.length
    branchColorMap[branchName] = colors[colorIndex]
  }
  return branchColorMap[branchName]
}

const BranchingTimeline: React.FC<BranchingTimelineProps> = ({
  branches,
  currentBranch,
  onCreateBranch,
  onSelectBranch,
}) => {
  const [showTimelineVisualization, setShowTimelineVisualization] =
    useState(false)
  const branchNames = Object.keys(branches)

  // Create nodes and edges for the React Flow visualization
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([])

  const generateNodesAndEdges = useCallback(() => {
    const nodes: Node[] = []
    const edges: Edge[] = []
    const branchOffset = 175
    const versionOffset = 200
    const branchOffsetY = 75

    const lastVersionXOffsetMap: { [key: string]: number } = {}
    const branchOriginCount: { [key: string]: number } = {}

    branchNames.forEach((branchName, branchIndex) => {
      const branch = branches[branchName]
      const branchVersions = branch?.versions || []
      const branchMetadata = branch?.metadata || null

      branchVersions.forEach((_, versionIndex) => {
        const nodeId = `${branchName}-${versionIndex}`
        let xOffset = versionIndex * versionOffset
        let yOffset = branchIndex * branchOffset

        if (versionIndex === 0 && branchName !== "branch1" && branchMetadata) {
          const originBranch = branchMetadata.originBranch
          const originVersionIndex = branchMetadata.originVersionIndex
          const parentNodeId = `${originBranch}-${originVersionIndex}`
          const parentNode = nodes.find((node) => node.id === parentNodeId)

          if (parentNode) {
            branchOriginCount[parentNodeId] =
              (branchOriginCount[parentNodeId] || 0) + 1
            const additionalOffsetY =
              (branchOriginCount[parentNodeId] - 1) * branchOffsetY

            xOffset = parentNode.position.x + versionOffset
            yOffset = parentNode.position.y + branchOffset + additionalOffsetY
            lastVersionXOffsetMap[branchName] = xOffset

            edges.push({
              id: `e-${branchName}-origin`,
              source: parentNodeId,
              target: nodeId,
              animated: true,
            } as Edge)
          }
        } else if (versionIndex > 0) {
          if (lastVersionXOffsetMap[branchName] !== undefined) {
            xOffset = lastVersionXOffsetMap[branchName] + versionOffset
            lastVersionXOffsetMap[branchName] = xOffset
          }
        }

        const nodeBackgroundColor = getOrAssignBranchColor(branchName)

        nodes.push({
          id: nodeId,
          data: {
            label: `Branch: ${branchName}, Version: ${versionIndex + 1}`,
          },
          position: { x: xOffset, y: yOffset },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          style: { background: nodeBackgroundColor },
        } as Node)

        if (versionIndex > 0) {
          edges.push({
            id: `e-${branchName}-${versionIndex - 1}-${versionIndex}`,
            source: `${branchName}-${versionIndex - 1}`,
            target: nodeId,
          } as Edge)
        }
      })
    })

    setNodes(nodes)
    setEdges(edges)
  }, [branchNames, branches, setNodes, setEdges])

  return (
    <div className="timeline-controls mt-4">
      <div className="flex items-center gap-4">
        <Button onClick={onCreateBranch} variant="default">
          Create Branch
        </Button>

        <Select onValueChange={onSelectBranch} value={currentBranch}>
          <SelectTrigger className="w-40">
            <SelectValue>{currentBranch}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {branchNames.map((branch) => (
              <SelectItem key={branch} value={branch}>
                {branch}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={() => {
            setShowTimelineVisualization(!showTimelineVisualization)
            if (!showTimelineVisualization) {
              generateNodesAndEdges()
            }
          }}
          variant="outline"
        >
          {showTimelineVisualization ? "Hide Timeline" : "Show Timeline"}
        </Button>
      </div>

      {showTimelineVisualization && (
        <div
          className="timeline-visualization mt-4 rounded-md border p-4"
          style={{ height: 500 }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
      )}
    </div>
  )
}

export default BranchingTimeline
