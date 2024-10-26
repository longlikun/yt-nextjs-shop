import React from 'react'
import { createClient } from '../util/supabase/server'



const HeadCategory = async () => {

const supabase = createClient()

const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .limit(4)

console.log('categories', categories)
    return (
        <nav aria-label="Global" className="hidden ml-10 md:block ">
            <ul className="flex items-center gap-8 text-md  font-bold ">
                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href={"/products"}> 全部 </a>
                </li>

                {categories?.map((item) => (
                    <li key={item.id}>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> {item.name}</a>
                    </li>
                ))} 
            </ul>
        </nav>
    )
}

export default HeadCategory