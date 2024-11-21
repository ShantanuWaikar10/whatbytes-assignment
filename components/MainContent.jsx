import Image from "next/image";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { LineChart } from "@mui/x-charts/LineChart";
import LinearProgress from "@mui/material/LinearProgress";
import { Gauge } from '@mui/x-charts/Gauge';

const MainContent = () => {

  const question = 10;

  return (
    <div className="m-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="min-w-[45vw]">
        {/* first box */}
        <div className="border rounded-md py-5 px-3 flex gap-3">
          <Image src={"/html_icon.png"} width={50} height={50} alt="Alt" />
          <div>
            <h1 className="font-bold">Hyper Text Markup Language</h1>
            <p className="text-gray-500">
              Question: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
          <button className="bg-blue-900 text-white w-24 h-10 rounded-lg">
            Update
          </button>
        </div>
        {/* second box */}
        <div className="border rounded-md p-4 my-5">
          <h1 className="font-bold">Quick Statistics</h1>
          <div className="flex justify-center">
            <div className="flex m-4">
              <div className="bg-slate-200 w-12 h-12 flex items-center justify-center rounded-full">
                <EmojiEventsIcon />
              </div>
              <div className="ml-3">
                <h1 className="font-bold">1</h1>
                <p className="text-gray-500">YOUR RANK</p>
              </div>
            </div>

            <div className="flex m-4">
              <div className="bg-slate-200 w-12 h-12 flex items-center justify-center rounded-full">
                <CalendarTodayIcon />
              </div>
              <div className="ml-3">
                <h1 className="font-bold">30%</h1>
                <p className="text-gray-500">PERCENTILES</p>
              </div>
            </div>

            <div className="flex m-4">
              <div className="bg-slate-200 w-12 h-12 flex items-center justify-center rounded-full">
                <CheckBoxIcon />
              </div>
              <div className="ml-3">
                <h1 className="font-bold">10 / 15</h1>
                <p className="text-gray-500">CORRECT ANSWERS</p>
              </div>
            </div>
          </div>
        </div>

        {/* third box */}
        <div className="border rounded-md p-4 my-5">
          <h1 className="font-bold">Comparison Graph</h1>
          <p className="text-gray-500">
            <span className="font-bold">You scored 30% percentile </span>which
            is lower than the average percentile 72% of all the engineers who
            took this assignment
          </p>
        </div>
        <LineChart
          xAxis={[{ data: [0, 25, 50, 75, 100] }]}
          series={[
            {
              data: [0, 25, 50, 85, 100],
            },
          ]}
          width={500}
          height={300}
        />
      </div>

      <div>
        <div className="mx-24 border rounded-md p-5 max-h-[60vh]">
          <h1 className="font-bold">Syllabus Wise Analysis</h1>

          <div className="mt-10">
            <p className="text-gray-500 font-semibold">
              HTML Tools, Forms, History
            </p>
            <div className="flex items-center gap-8">
              <LinearProgress
                className="w-[70%]"
                variant="determinate"
                value={80}
              />
              <h1 className="font-semibold text-blue-600">80%</h1>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-gray-500 font-semibold">
              Tags and References in HTML
            </p>
            <div className="flex items-center gap-8">
              <LinearProgress
                className="w-[70%]"
                variant="determinate"
                value={60}
              />
              <h1 className="font-semibold text-blue-600">60%</h1>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-gray-500 font-semibold">
              Tables and References in HTML
            </p>
            <div className="flex items-center gap-8">
              <LinearProgress
                className="w-[70%]"
                variant="determinate"
                value={24}
              />
              <h1 className="font-semibold text-blue-600">24%</h1>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-gray-500 font-semibold">Tables and CSS Basics</p>
            <div className="flex items-center gap-8">
              <LinearProgress
                className="w-[70%]"
                variant="determinate"
                value={96}
              />
              <h1 className="font-semibold text-blue-600">96%</h1>
            </div>
          </div>
        </div>

        <div className="mx-24 mt-5 border rounded-md p-5 max-h-[60vh]">
          <div className="flex justify-between">
            <h1 className="font-bold">Question Analysis</h1>
            <h1 className="font-bold text-blue-600">10/15</h1>
          </div>
          <p className="text-gray-500 mt-2"><span className="font-bold">You scored 10 question out of 15. </span>It still needs some improvements</p>
          <div className="flex justify-center">
          <Gauge width={150} height={150} value={(question/15)*100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
