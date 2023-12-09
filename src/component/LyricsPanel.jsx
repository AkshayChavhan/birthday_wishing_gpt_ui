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

  useEffect(() => {
    // console.log("process.env.=> ", process.env)
    const fetchData = async () => {
      try {
        const prompt = getPrompt(musicType, bname, gender === 'Male' ? 'him' : 'her');
        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });

        const generatedLyrics = response.choices[0]?.message?.content || '';
        setLyrics(generatedLyrics);
      } catch (error) {
        console.error('Error fetching lyrics:', error.message);
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
          sectionPara={
            isLoading
              ? "Your songs lyric's are loading..."
              : "Your songs lyrics's are ready!"
          }
        />
        <div
          className="bg-white h-min-[50vh] h-[50vh]
        m-10 rounded-3xl p-10 overflow-y-scroll"
        >
          <div className="p-6">
            <p className=" text-center">{lyrics}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LyricsPanel;
