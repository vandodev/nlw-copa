interface HomeProps{
  count: number
}

export default function Home(props:HomeProps) {
  // fetch('http://localhost:3333/pools/count')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // })
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
 const response = await fetch('http://localhost:3333/pools/count')
 const data = await response.json()
 console.log(data)
 return{
  props: {
    count:data.count,
  }
 }
}
