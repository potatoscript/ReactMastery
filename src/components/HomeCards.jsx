import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card bg='bg-indigo-100'>
                    <h2 className="text-2xl font-bold">For Developers</h2>
                    <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
                    <a href="/jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                        Browse Jobs
                    </a>
                </Card>
                <Card>
                    <h2 className="text-2xl font-bold">For Emplyers</h2>
                    <p className="mt-2 mb-4">List your job to find the perfect developer for the role</p>
                    <a href="/add-job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                        Add Job
                    </a>
                </Card>


                <div className="mb-5">
                    Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on 
                    exciting projects that make a difference...
                </div>
                
                <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>
                
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        Brooklyn, NY
                    </div>
                    <a href="/job.html" className="h-[36px] bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                        Read More
                    </a>
                </div>
            </div>
        </div>  
        </section>
  )
}

export default HomeCards
