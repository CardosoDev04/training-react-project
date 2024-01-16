
import {Header} from "./components/Header";
import {CoreConcept} from "./components/CoreConcept" ;
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import TabButton from "./components/TabButton";
import {useState} from "react";


function App() {
    const [content, setContent] = useState("components");
    function handleSelect(selectedButton){
        setContent(selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[content].title}</h3>
                        <p>{EXAMPLES[content].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[content].code}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;