import { Canvas } from '@react-three/fiber'
import React from 'react'

{/* <div className="absolute top-28 left-0 right-0 z-10">
        Test
      </div> */}

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home