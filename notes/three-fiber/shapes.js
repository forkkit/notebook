import * as THREE from 'three'
import React from 'react'
import { Canvas } from 'react-three-fiber'

const vertices = [
  [-1, 0, 0],
  [0, 1, 0],
  [1, 0, 0],
  [0, -1, 0],
  [-1, 0, 0]
]

export default props => {
  return (
    <Canvas>
      <group>
        <line>
          <geometry
            attach="geometry"
            vertices={vertices.map(v => new THREE.Vector3(...v))}
            onUpdate={self => (self.verticesNeedUpdate = true)}
          />
          <lineBasicMaterial attach="material" color="black" />
        </line>
      </group>
    </Canvas>
  )
}
