import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Cédric</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Développeur Web</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         Ayant récemment suivi une formation 'Développeur C#', j'ai obtenu un titre BAC+5 "Expert en informatique et système d'information".
         <br></br>Passionné par le développement informatique depuis de nombreuses années j'ai suivi une formation universitaire et effectué des stages en entreprise.
            
           
         </p>
      </div>
   )
}

export default Intro;