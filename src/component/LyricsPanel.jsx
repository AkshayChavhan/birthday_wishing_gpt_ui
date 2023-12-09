import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./modal/HeroSection";
import { useMyContext } from "./UserDetailContext";
import OpenAI from 'openai';
import { getPrompt } from "./utils/getPrompt";

function LyricsPanel() {
  const { gender, bname , musicType } = useMyContext();
  const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY  , dangerouslyAllowBrowser: true });
  const [isLoading, setIsLoading] = useState(true);
  const [lyrics, setLyrics] = useState("");
  const [status , setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("Your songs lyric's are loading...");
        const prompt = getPrompt(musicType, bname, gender === 'Male' ? 'him' : 'her');
        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });

        const generatedLyrics = response.choices[0]?.message?.content || '';
        setLyrics(generatedLyrics);
        setStatus("Your songs lyrics's are ready!")
      } catch (error) {
        console.error('Error fetching lyrics:', error.message);
        setStatus("Failed to load lyrics.")
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [gender, bname, musicType]);

  return (
    <div className="">
      <Header progress={"/progress bar4.png"} />

      <div>
        <HeroSection
          sectionPara={ status }
        />
        <div
          className="bg-white h-min-[50vh] h-[50vh]
        m-10 rounded-3xl p-5 overflow-y-scroll"
        >
          <div className="p-3">
            <p className=" text-center text-[#42006dc4]">{lyrics}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LyricsPanel;
