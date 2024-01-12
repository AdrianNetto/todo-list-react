import React from 'react'
import { ITask } from '../interfaces/Task'
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <div className={styles.container}>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.diff}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-feather'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </div>
  )
}

export default TaskList