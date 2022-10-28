import {FC, ReactNode} from "react";


const Overview: FC<{ children: ReactNode }> = ({children}) => {
    return (
            <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I learned</h2>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                        An Overview of all my learnings as a <strong>Web Dev</strong>
                    </p>
                </div>
                <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    {children}
                </div>
            </div>

    )
}

export default Overview;