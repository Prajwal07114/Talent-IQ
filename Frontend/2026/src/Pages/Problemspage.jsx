import React from 'react'
import Navbar from "../Components_07/Navbar"
import { PROBLEMS } from '../data/problems'
import { Link } from 'react-router';
import { BookOpenIcon, ChevronRightIcon, Code2Icon, FlameIcon, LoaderIcon, Sparkle, SparklesIcon, Wrench } from 'lucide-react';
import { getDifficultyBadgeClass } from '../lib/utils';
function Problemspage() {
  const problems = Object.values(PROBLEMS);
  const easyProblems = problems.filter(p=>p.difficulty === "Easy").length
  const mediumProblems = problems.filter(p=>p.difficulty==="Medium").length
  const hardProblems = problems.filter(p=>p.difficulty==="Hard").length
  return (
    <div className='min-h-screen bg-base-200'>
      <Navbar/>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='mb-8'>
          <h1 className='text-5xl font-bold mb-3'>Practise Your Problems Lala</h1>
          <p className='text-base-content'>Increase your accuracy by solving these problems</p>
        </div>
        {/*pROBLEMS LIST*/}
        <div className='space-y-4'>
          {problems.map(problem=>(
          <Link key={problem.id}
          to={`/problem/${problem.id}`}
          className='card bg-base-100 hover:scale-105' >
            <div className='card-body'>
              <div className='flex items-center justify-between gap-4'>
                {/*leftside*/}
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-1'>
                    <div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                    <Code2Icon className='size-6 text-primary'></Code2Icon>
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-center gap-2 mb-1'>
                        <h2 className='text-xl font-bold'>
                          {problem.title}
                        </h2>
                        <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                    
                      </div>
                      <p className='text-sm text-base-content/60'>{problem.category}</p>
                    </div>
                  </div>
                  <p className='text-based-content/80 mb-3'>{problem.description.text}</p>
                </div>
                {/*right isde*/}
                <div className='flex item-centre gap-2 text-primary'>
                  <span className='font-medium'>Solve NHK</span>
                  <Wrench className='size-5'></Wrench>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
        <div className='mt-12 card bg-base-100 shadow-lg'
        >
          <div className='card-body'>
            <div className='stats stats-vertical lg:stats-horizontal'>
              <div className='stat'>
                <div className='stat-title flex items-center gap-3 text-blue-400' >Total Problems
                <BookOpenIcon className='size-6 text-blue-400'></BookOpenIcon></div>
                <div className='stat-value text- text-blue-400'>{problems.length}</div>
                </div>
                 <div className='stat'>
                <div className='stat-title flex items-center gap-3 text-green-500'>Easy
                <SparklesIcon className='size-6 text-green-500' ></SparklesIcon>
                </div>
                <div className='stat-value text-success'>{easyProblems}</div>
                </div>
                 <div className='stat'>
                <div className='stat-title flex items-center gap-3 text-yellow-300' >
                Medium
                <LoaderIcon className='size-6 text-yellow-300'></LoaderIcon></div>
                <div className='stat-value text-warning'>{mediumProblems}</div>
              </div>
               <div className='stat'>
                <div className='stat-title flex items-center gap-3 text-red-600'>Hard(nhk)
                  <FlameIcon className='size-6 text-red-600'></FlameIcon>
                </div>
                <div className='stat-value text-error'>{hardProblems}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Problemspage
