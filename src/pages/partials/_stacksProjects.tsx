import { Projects } from './_projects'
import { StacksSkills } from './_stacksSkills'

export const StacksProjects = () => {
  return (
    <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
      <StacksSkills />
      <Projects />
    </div>
  )
}

export default StacksProjects
