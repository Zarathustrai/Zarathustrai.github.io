import logo from './logo192.png';
import './App.css';
import NavBar from './components/NavBar';
import FetchBeers from './components/FetchBeers';
import RenderForm from './components/RenderForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nesciunt pariatur perferendis laboriosam nisi animi culpa. Harum quis, optio magnam sed illo blanditiis distinctio quos temporibus ipsa quo, nisi cum placeat? Soluta dolorum, atque aliquid fugit impedit consequatur quam aspernatur harum nihil libero itaque, esse iure sint sit ea error aut delectus ut. Cupiditate, adipisci quos dolore culpa! Sapiente illo distinctio autem atque laboriosam voluptate eum perferendis laborum molestiae veritatis qui ut eligendi magni aliquam quisquam culpa nulla fugit ad aliquid, quae ducimus! Impedit aut facere necessitatibus alias, ipsam beatae at excepturi ut odit. Voluptates fuga nesciunt aperiam cumque ea sunt cupiditate nostrum nobis adipisci! Sed tempora consectetur, atque odit, officiis saepe perspiciatis asperiores vitae quaerat laborum similique! Explicabo sit aspernatur, maxime illum libero sapiente autem quod rem in at, consequuntur eius voluptates aliquid ut cum dicta esse nemo maiores! Numquam ad unde, libero iusto excepturi voluptatem culpa dolorum ipsa rem et impedit adipisci asperiores minus fugit in ab accusantium atque sit consequuntur obcaecati modi distinctio, explicabo eligendi. Enim beatae id tempore architecto et nobis, quis, praesentium soluta porro optio eius in dolorum sit perspiciatis odio quod mollitia officia quisquam consequatur doloremque libero omnis fugit commodi inventore. Quis exercitationem tempore similique suscipit odit sequi totam reiciendis beatae distinctio voluptatibus odio, tenetur, repudiandae, corporis nulla eum consectetur voluptate quasi perferendis aliquam vitae libero magnam aut sit velit adipisci. Architecto officiis, molestias enim adipisci odio. Quia eos consequuntur molestias autem, cupiditate voluptatum veniam veritatis, nulla ea voluptatem quaerat assumenda amet cumque quidem ab, suscipit labore asperiores atque. Ad iusto quis officiis. Vitae.
        </p>
        <RenderForm/>
      </div>
      <div className="main">
        <FetchBeers/>
      </div>
    </div>
  );
}

export default App;
