import { TaskList } from '../models/Task'

const mixinStabilizationTest = {
  data() {
    return {
      taskSequence: new TaskList(),
    }
  },
  methods: {
    doStabilizationTest(task) {
      console.log('doStabilizationTest (playerCurrentTime): ', this.playerCurrentTime)
      this.pause()
      task.done = true
      this.overPlayData = task
      this.overPlayComponent = 'stabilization-test'
      this.changeSources(this.currentTimePoint.sources, this.currentTimePoint.poster)
      this.showOverPlayer()
    },

    doActionOfStabilizationTest(data) {
      const taskIds = data.taskIds
      const examTask = data.examTask
      // const questions = data.questions
      this.hideOverPlayer()
      this.doTaskSequence(taskIds, examTask.data.next_task_id)
    },
  }
}

export default mixinStabilizationTest
