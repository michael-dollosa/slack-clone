import ChatContainer from "../components/Chat/ChatContainer.js/ChatContainer"
import "./Main.scss"

const Main = () => {

  return(
    <main className="main-container">
      <header>
        Put the Header component here
      </header>

      <nav>
        Put the Nav component here
      </nav>

      <section>
        <ChatContainer />
      </section>
    </main>
  )
}

export default Main