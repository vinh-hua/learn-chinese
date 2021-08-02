import { useEffect, useState } from 'react';
import './Learn.css';

export function Learn() {

    const [hanzi, setHanzi] = useState("N/A");
    const [pinyin, setPinyin] = useState("N/A");
    const [translations, setTranslations] = useState<any[]>([]);
    const [level, setLevel] = useState(0);

    const getVocab = async() => {
        const response = await fetch("http://localhost:5000/vocab", {
            method: "GET"
        });
        if (response.status >= 400) {
            console.log("Error!");
            return;
        }
        const vocab = await response.json();
        setHanzi(vocab["hanzi"]);
        setPinyin(vocab["pinyin"]);

        let translations_list: any[] = [];
        /*translations_list.push(vocab["translations"][0]);
        for (var i = 1; i < vocab["translations"].length; i++) {
            translations_list.push(", ");
            translations_list.push(vocab["translations"][i]);
        }*/
        vocab["translations"].forEach((t: any) => {
            translations_list.push(<p>{t}</p>);
        });
        setTranslations(translations_list);
        setLevel(vocab["level"]);
    }

    useEffect(() => {
        getVocab();
    }, []);

    return (
        <div>
            <div>
                <p className="hsk">HSK {level}</p>
                <p className="hanzi">{hanzi}</p>
                <p className="pinyin">{pinyin}</p>
                <p className="translations">{translations}</p> 

            </div>
            <div>
                <button>audio</button>
                <button>save</button>
                <button onClick={getVocab}>refresh</button>
            </div>
        </div>
    );
}