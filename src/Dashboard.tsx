import "./styles.css";

const agents = [
  "Executive AI",
  "Story Architect AI",
  "World Builder AI",
  "Character AI",
  "Script AI",
  "Storyboard AI",
  "Media AI",
  "Voice AI",
  "Music AI",
  "Editor AI"
];

export default function Dashboard() {

  return (
    <div className="app">

      <h1>
        BudE StoryBoard AI
      </h1>

      <p>
        AI Creative Production Studio Online
      </p>

      <div className="grid">

        <div className="card">
          <h2>Project Center</h2>
          <p>Create and manage stories.</p>
        </div>


        <div className="card">
          <h2>AI Command Center</h2>
          <p>Agents Online: {agents.length}</p>
        </div>


        <div className="card">
          <h2>Story Database</h2>
          <p>Characters • Worlds • Lore • Episodes</p>
        </div>


        <div className="card">
          <h2>Production Pipeline</h2>
          <p>
            Concept → Story → Script → Media → Export
          </p>
        </div>


        <div className="card">
          <h2>System Status</h2>
          <p>Genesis Complete</p>
          <p>Evolution Active</p>
        </div>

      </div>


      <div className="card">

        <h2>AI Agents</h2>

        {agents.map(agent => (
          <p key={agent}>
            🟢 {agent}
          </p>
        ))}

      </div>

    </div>
  );
}
