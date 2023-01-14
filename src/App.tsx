import { createSignal, For } from "solid-js";
import { open } from "@tauri-apps/api/dialog";
import { readDir, BaseDirectory } from '@tauri-apps/api/fs';

interface directoryData {
    name: string
    path: string,
    children?: directoryData[]
}

function App() {
    const [dir, setDir] = createSignal<directoryData[]>([]);
    const [file, setFile] = createSignal("");

    async function selectDirectory() {
        const res = await readDir('HoverNotes', { dir: BaseDirectory.Document })
        setDir(res)
    }

    // async function selectFile() {
    //     const res = await open() 
    //     const read = await 
    //     setFile(res)
    //     console.log(BaseDirectory.Document)
    // }

    return (
        <div class="flex flex-col justify-center items-center h-screen w-full gap-6">
            <h1 class="text-3xl font-bold text-white"> Hello Tauri! 🤯</h1>

            <button class="btn btn-accent" onClick={selectDirectory}> Select Directory </button>
            {/* <button class="btn btn-accent" onClick={selectFile}> Read File </button> */}
            <For each={dir()}>
                {(folder) => <p>{folder.name}</p>}
            </For>
        </div>
    );
}

export default App;
