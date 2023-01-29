import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backimg = "model-s.jpg"
        leftbtnText = "Custom order"
        rightbtnText ="Demo Drive"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backimg = "model-y.jpg"
        leftbtnText = "Custom order"
        rightbtnText ="Demo Drive"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backimg = "model-3.jpg"
        leftbtnText = "Custom order"
        rightbtnText ="Demo Drive"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backimg = "model-x.jpg"
        leftbtnText = "Custom order"
        rightbtnText ="Demo Drive"
      />

        <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backimg = "solar-panel.jpg"
        leftbtnText = "Order now"
        rightbtnText ="Learn more"
      />

    <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backimg = "solar-roof.jpg"
        leftbtnText = "Order now"
        rightbtnText ="Learn more"
      />

    <Section
        title="Accessories"
        backimg = "accessories.jpg"
        leftbtnText = "Shop Now"
      />
     
     
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;

`