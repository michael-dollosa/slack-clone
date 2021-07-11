import ChatContainer from "../components/Chat/ChatContainer.js/ChatContainer"
import "./Main.scss"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"

const Main = () => {

  return(
    <main className="main-container">
      <header>
        <Header />
      </header>

      <nav>
        <Sidebar />
      </nav>

      <section>
        <ChatContainer />
      </section>
    </main>
  )
}

export default Main