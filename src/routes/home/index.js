import style from './style'
import Textcontent from '../../components/textcontent'
import Code from '../../components/code'

const Home = () => (
  <div class={style.home}>
    <Textcontent>
      <h1>Yjs</h1>
      <p>Yjs is a CRDT implementatation that exposes its internal structure as actual data types that can be manipulated and fire changes when remote or local changes happen. While Yjs can be used for all kinds of state management, we lay a special focus on shared editing.</p>
    </Textcontent>
    <Code code={'class A { constructor () {} }'} />
  </div>
)

export default Home
