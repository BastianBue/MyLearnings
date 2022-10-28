import axios from "axios";
import {useEffect, useState} from "react";
import Navbar from "./components/nav/Navbar";
import ContentWrapper from "./components/wrapper/ContentWrapper";
import Overview from "./components/overview/Overview";
import Post from "./components/overview/Post";
import {posts} from "./components/overview/postSamples.json";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/learnings",).then(
        (res) => {
          setData(res.data)
        }
    )
  }, []);


  return (
        <div>
            <Navbar />
            <main>
                <ContentWrapper>
                    <Overview>
                        {posts.map(post => <Post post={post}/>)}
                    </Overview>
                    {JSON.stringify(data)}
                </ContentWrapper>
            </main>
        </div>
  );
}

export default App;
