"use client"
import Image from "next/image";
import { Suspense, useCallback, useMemo, useState, useTransition } from "react";

type TabType = 'HTML' | 'CSS' | "JS";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("HTML");
  const [isTransition, startTransition] = useTransition();

  const changeTab = (tab: TabType) => {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  const textColor=useCallback((tab: TabType)=>{
    return activeTab===tab?"blue":"black"
  },[activeTab])

  return (
    <div>
      <div>
        <button onClick={()=>changeTab("HTML")} style={{color:textColor("HTML")}}>HTML</button>
        <button onClick={()=>changeTab("CSS")} style={{color:textColor("CSS")}}>CSS</button>
        <button onClick={()=>changeTab("JS")} style={{color:textColor("JS")}}>JavaScript</button>
      </div>
      <div>
          {
            isTransition ? <span>loading</span> : <> {
              activeTab === "HTML" && <p>
                The HyperText Markup Language or HTML is the
                standard markup language for documents designed to
                be displayed in a web browser.
              </p>
            }
              {
                activeTab === "CSS" && <p>
                  Cascading Style Sheets is a style sheet language
                  used for describing the presentation of a document
                  written in a markup language such as HTML or XML.
                </p>
              }
              {
                activeTab === "JS" && <p>
                  JavaScript, often abbreviated as JS, is a
                  programming language that is one of the core
                  technologies of the World Wide Web, alongside HTML
                  and CSS.
                </p>
              }</>
          }


      </div>
    </div>
  );
}
