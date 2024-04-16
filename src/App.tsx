import Card from "./components/card";
import SearchInput from "./components/search";
import { config } from "./config";

function App() {
  // const { API_BASE_URL, API_KEY,  } = config

  // console.log(API_KEY, API_BASE_URL)

  return (
    <div className="relative min-h-screen w-full">
      
      <main className="absolute -top-[80px] min-h-screen bg-[url(./assets/images/dark-sky-cityscape-mountain.jpg)] mt-20 bg-cover bg-center h-screen w-full px-8 py-6">
        {/* <div className="absolute w-full h-full -z-0 bg-black opacity-80"></div> */}
      <header>
      <SearchInput />
      </header>
      <section>
        <Card />
      </section>
      <aside>

      </aside>
      </main>

    </div>
  );
}

export default App;
