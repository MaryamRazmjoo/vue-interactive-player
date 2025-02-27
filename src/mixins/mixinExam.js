import { TaskList } from '../models/Task'

const mixinExam = {
  data() {
    return {
      taskSequence: new TaskList(),
    }
  },
  methods: {
    async doExam(task) {
      this.pause()
      if (typeof task.before_do === 'function') {
        await task.before_do()
      }
      task.setDoing()
      this.overPlayData = task
      this.overPlayComponent = 'exam'
      this.changeSources(this.currentTimePoint.sources, this.currentTimePoint.poster)
      this.showOverPlayer()
    },

    async doActionOfExam(data) {
      const taskIds = data.taskIds
      const examTask = data.examTask
      // const questions = data.examTask.data.questions
      if (typeof examTask.before_action === 'function') {
        await examTask.before_action()
      }
      this.hideOverPlayer()
      examTask.setDone()
      this.doTaskSequence(taskIds, examTask.data.next_task_id)
    },
  }
}

export default mixinExam
