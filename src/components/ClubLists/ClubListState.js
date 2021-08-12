import ClubListContainer from "./ClubListContainer";
import styles from './ClubListState.module.sass';

const ClubListState = () => {
    const list = [
        {
            id: 1,
            title: '우아한 애자일',
            categories: 'IT'
        },
        {
            id: 2,
            title: '프리버드',
            categories: '음악'
        },
        {
            id: 3,
            title: '둘리',
            categories: '맛집'
        },
        {
            id: 3,
            title: '학식',
            categories: '맛집'
        },
        {
            id: 3,
            title: '월계국밥',
            categories: '맛집'
        },
        {
            id: 3,
            title: '용궁',
            categories: '맛집'
        },
        {
            id: 3,
            title: '다온',
            categories: '맛집'
        },
        {
            id: 3,
            title: '밥은',
            categories: '맛집'
        },
        

    ];
    return (
       <div className={styles.listblock}>
           {list.map(lists => (
               <ClubListContainer list={lists} key={lists.id}/>
           ))}

      </div> 
    )
}

export default ClubListState;