import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1663100403716-15caecbc3101?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       color:'blue',
      intro:'',
      tag:'Satisfied'},
    {
      img:'https://media.istockphoto.com/id/2121827514/photo/portrait-of-young-businesswoman-with-curly-hairstyle-wear-trendy-smart-casual-outfit-isolated.jpg?s=1024x1024&w=is&k=20&c=JFX2LygCAX3ttVtf1RPt3NjOeymuj8bNF7jjp9JdFlk=',
      color:'royalblue',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661717805091-5821cc62004a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'lightseagreen',
      intro:'',
      tag:'Underserved'
    },
     {
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'orange',
      intro:'',
      tag:'Average'
    }
  ]
  return (
    <div className='h-screen w-full bg-gray-500'>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
