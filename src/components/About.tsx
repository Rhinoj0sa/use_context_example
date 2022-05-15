import { useGlobalContext } from './MyGlobalContext'
import  MyProfile  from './MyProfile'
const About = () => {
const { copy, setCopy } = useGlobalContext()
return(
   <>
   <h2>About</h2>
   <h3>Content: {copy}</h3>
    <button onClick={() => setCopy(`context changed by About at ${Date.now()}`)}>
      Change the context
    </button>
    <MyProfile  />
  </>
 )
}
export default About