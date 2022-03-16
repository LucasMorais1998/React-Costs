import styles from './Company.module.css';

import LinkButton from '../layout/LinkButton';

function Company() {
  return (
    <section className={styles.company_container}>
      <h1>
        Conheça o <span>Costs</span>
      </h1>
      <p>O Costs é um gerenciador de projetos, como ele você é capaz de criar, gerir e excluir projetos de forma prática e eficiente</p>
      <p>O Costs oferece uma aba totalmete interativa onde você pode editar seus projetos, e adicionar ou remover serviços de simples</p>
      <p>Com o Costs gerenciar seus projetos será uma tarefa facíl e sem dor de cabeça!</p>
    </section>
  );
}

export default Company;