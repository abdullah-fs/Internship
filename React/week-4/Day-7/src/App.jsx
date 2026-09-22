import React from 'react'

const App = () => {
  return (
    <div>
      {/* padding all sides */}
      <h1 className='p-4'>Abdullah Mahmood</h1>  

      {/* left + right padding */}
      <h1 className='px-4'>Abdullah Mahmood</h1> 

      {/* top + bottom padding */}
      <h1 className='py-4'>Abdullah Mahmood</h1> 


      {/* margin all sides */}
      <h1 className='m-4'>Abdullah Mahmood</h1> 

      {/* left + right margin */}
      <h1 className='mx-4'>Adbullah Mahmood</h1> 

      {/* top + bottom margin */}
      <h1 className='my-4'>Abdullah Mahmood</h1> 




      {/* Flex Utility Classes */}
      {/* Basic flex */}
      <div className='flex'>
        <div>Box-1</div>
        <div>Box-2</div>
      </div>

      {/* flex-col */}
      <div className='flex flex-col'>
        <div>Box-1</div>
        <div>Box-2</div>
      </div>

      {/* justify-center */}
      <div className='flex flex-col justify-center'>
        <div>Box-1</div>
        <div>Box-2</div>
      </div>

      {/* items-center */}
      <div className='flex flex-col items-center'>
        <div>Box-1</div>
        <div>Box-2</div>
      </div>

      {/* gap */}
      <div className='flex gap-10'>
        <div>Box-1</div>
        <div>Box-2</div>
      </div>



      {/* Grid Utility Classes */}
      {/* Basic Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div>Box 1</div>
        <div>Box 2</div>
        <div>Box 3</div>
      </div>
      


      {/* Colors Utility Classes */}
      {/* Background Color */}
      <div className="bg-blue-500">
        Hello
      </div>

      {/* Text Color */}
      <p className="text-white">
        Hello Abdullah
      </p>

      {/* Border Color */}
      <div className="border border-blue-500">
        Box
      </div>

      
    </div>

    
  )
}

export default App





