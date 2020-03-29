import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../components/data.json';

const dataPg= (props)=> {
  const router = useRouter()

  return (
    <>
       <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <p>{props.date}</p>
    </>
  )
  
}


dataPg.getInitialProps = async ({ query }) => {
  const moment = (await import('moment')).default()

  return {
    date: moment.format('dddd D MMMM YYYY'),
    post: data[query.dynamic]
  }
}

export default dataPg;