import React from "react"
import BlogD from "../blog/d";

function FondationsB() {
  return (
    <svg fill="none" viewBox="0 0 266 150">
      <defs>
      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
        <feFlood floodColor="#052b4a" result="flood" />
        <feComposite
          operator="in"
          in2="SourceAlpha"
          in="flood"
          result="shadow"
        />
        <feOffset dx={-3.5} dy={-3.5} in="SourceGraphic" result="offset-1" />
        <feOffset dx={3.5} dy={3.5} in="shadow" result="offset-2" />
        <feMerge>
          <feMergeNode in="offset-2" />
          <feMergeNode in="offset-1" />
        </feMerge>
      </filter>
    </defs>
    <text
      x={0}
      y={80}
      fill="#51c7f5"
      style={{
        fontWeight: '700',
        fontSize: 44,
      }}
    >
      {"Semantic"}
    </text>
    <text
      x={0}
      y={120}
      fill="#51c7f5"
      style={{
        fontWeight: '700',
        fontSize: 44,
      }}
    >
      {"Colors"}
    </text>
    </svg>
  )
}

export default FondationsB;
