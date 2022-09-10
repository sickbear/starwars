import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.container}>
      {people.map(({id, name, img}) => 
        <li className={styles.item} key={id}>
          <a className={styles.link} href="#">
            <img className={styles.img} src={img} alt={name} />
            <p>{name}</p>
          </a>
        </li>
      )}
    </ul>
  )
}

export default PeopleList
