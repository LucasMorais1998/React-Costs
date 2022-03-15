import { BsFillTrashFill } from 'react-icons/bs'

import styles from '../project/ProjectCard.module.css'

function ServiceCard({ id, name, cost, description, handleRemove }) {

  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  }
  return (
    <div className={styles.project_card}>
      <h1>{name}</h1>
      <p>
        <span>Custo Total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard;