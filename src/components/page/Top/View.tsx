import { useTheme } from "next-themes"
import { VFC } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import { PostItem } from "@/components/model/Post/PostItem"
import { DirectMessages } from "@/components/model/User/DirectMessages"

import { DropdownContent } from "@/components/ui/DropdownContent"
import { Navbar } from "@/components/ui/Navbar"
import { Sidebar } from "@/components/ui/Sidebar"

import { CANNELS } from "@/mocks/data"
import { mockPost } from "@/mocks/Post"
import { mockUserList } from "@/mocks/User"

export const TopPageView: VFC = () => {
  const { theme } = useTheme()

  useHotkeys("command+/", () => {
    document.getElementById("modal-opener")?.click()
  })

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <div className="flex grow w-full">
        <Sidebar />
        <div className="w-3/12 border border-gray-200">
          <div className="w-full dropdown">
            <label tabIndex={0} className="prose">
              <h1 className="p-4 border-b border-gray-200 hover:bg-base-300">
                daisyUI
              </h1>
            </label>
            <DropdownContent />
          </div>
          <div className="prose">
            <div className="py-2 px-4 cursor-pointer hover:bg-base-300">
              Threads
            </div>
            <div className="py-2 px-4 cursor-pointer hover:bg-base-300">
              Mentions & reactions
            </div>
            <div className="py-2 px-4 cursor-pointer hover:bg-base-300">
              Slack content
            </div>
            <div className="w-full dropdown">
              <label tabIndex={0} className="w-full">
                <div className="py-2 px-4 w-full cursor-pointer">More</div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 w-96 shadow-2xl dropdown-content menu bg-base-100 rounded-box"
              >
                <li>
                  <a>Workspace Settings</a>
                </li>
                <li className="border-b border-gray-200">
                  <a>Customize</a>
                </li>
                <li>
                  <a>Manage members</a>
                </li>
                <li>
                  <a>Manage apps</a>
                </li>
              </ul>
            </div>
            <h3 className="px-4 cursor-default">Channels</h3>
            {CANNELS.map((channel, i) => {
              const color =
                i === 0 ? "bg-primary text-white" : "hover:bg-base-300"

              return (
                <div
                  key={channel}
                  className={`py-2 px-4 cursor-pointer ${color}`}
                >{`# ${channel}`}</div>
              )
            })}
            <DirectMessages users={mockUserList} />
          </div>
        </div>
        <div className="w-8/12">
          <div className="prose">
            <h2 className="p-4 py-5 w-full"># general</h2>
          </div>
          <div className="p-4 py-2 w-full border-y border-gray-200">
            current theme is
            <span className="pl-2 text-primary">{theme}</span>
          </div>
          <div>
            <div
              className="overflow-y-scroll"
              style={{ height: "calc(100vh - 12rem)" }}
            >
              {[...Array(10)].map((_, i) => {
                return <PostItem key={i} post={mockPost} />
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
