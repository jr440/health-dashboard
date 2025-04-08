<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comprehensive Mental Health & Capability Dashboard</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      color: white;
      background-color: #2c2c2c;
      padding: 32px;
      max-width: 2048px;
      margin: 0 auto;
      font-size: 19px;
    }
    h1, h2, h3 {
      color: #4a9eff;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 24px;
      text-align: center;
    }
    h2 {
      font-size: 1.8em;
      margin-bottom: 16px;
      border-bottom: 1px solid #4a9eff;
      padding-bottom: 8px;
    }
    h3 {
      font-size: 1.4em;
      margin: 20px 0 10px 0;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
    }
    .date {
      color: #4a9eff;
      font-size: 1.3em;
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    .full-width {
      grid-column: 1 / -1;
    }
    .panel {
      background-color: #333;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .rating-container {
      display: flex;
      align-items: center;
      margin: 15px 0;
      gap: 20px;
    }
    .rating-label {
      width: 240px;
      font-weight: bold;
    }
    .rating-dots {
      display: flex;
      gap: 12px;
    }
    .dot {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: inline-block;
    }
    .dot-1 { background-color: #ff4444; }
    .dot-2 { background-color: #ff8c42; }
    .dot-3 { background-color: #ffd242; }
    .dot-4 { background-color: #4CAF50; }
    .dot-5 { background-color: #2196F3; }
    .dot-empty {
      background-color: #444;
      border: 2px solid #666;
    }
    .support-needs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .need-item {
      background-color: #444;
      padding: 15px;
      border-radius: 8px;
    }
    .checked {
      background-color: #4CAF50;
    }
    .capacity-summary {
      background-color: #344;
      padding: 25px;
      border-radius: 10px;
      margin-top: 20px;
    }
    .capacity-bar {
      height: 30px;
      background: linear-gradient(to right, #ff4444, #ff8c42, #ffd242, #4CAF50, #2196F3);
      border-radius: 15px;
      position: relative;
      margin-top: 20px;
    }
    .capacity-marker {
      position: absolute;
      width: 6px;
      height: 45px;
      background-color: white;
      top: -8px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
      color: white;
    }
    table, th, td {
      border: 1px solid #555;
    }
    th, td {
      padding: 12px;
      text-align: left;
    }
    th {
      background-color: #444;
      color: #4a9eff;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    ul li {
      margin: 10px 0;
      padding: 8px;
      background-color: #3a3a3a;
      border-radius: 5px;
    }
    .highlight {
      color: #ff8c42;
      font-weight: bold;
    }
    .checkbox-list li {
      display: flex;
      align-items: center;
    }
    .checkbox {
      width: 20px;
      height: 20px;
      background-color: #444;
      border: 2px solid #666;
      border-radius: 4px;
      margin-right: 10px;
      display: inline-block;
    }
    .checkbox.checked {
      background-color: #4CAF50;
      position: relative;
    }
    .checkbox.checked::after {
      content: "✓";
      position: absolute;
      color: white;
      font-weight: bold;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .energy-level {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
    }
    .energy-indicator {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .energy-low { background-color: #ff4444; }
    .energy-moderate { background-color: #ffd242; }
    .energy-high { background-color: #4CAF50; }
    .progress-container {
      background-color: #444;
      border-radius: 10px;
      height: 20px;
      margin: 10px 0;
      overflow: hidden;
    }
    .progress-bar {
      height: 100%;
      background: linear-gradient(to right, #ff4444, #ff8c42, #ffd242, #4CAF50);
    }
    .tag {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px;
      border-radius: 15px;
      font-size: 0.9em;
    }
    .tag-red { background-color: #ff4444; }
    .tag-orange { background-color: #ff8c42; }
    .tag-yellow { background-color: #ffd242; color: #333; }
    .tag-green { background-color: #4CAF50; }
    .tag-blue { background-color: #2196F3; }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    .mini-card {
      background-color: #3a3a3a;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    .mini-card h4 {
      margin: 0 0 10px 0;
      color: #ddd;
    }
    .mini-card .value {
      font-size: 1.8em;
      font-weight: bold;
    }
    .trend {
      font-size: 0.8em;
      margin-top: 5px;
    }
    .trend-up { color: #4CAF50; }
    .trend-down { color: #ff4444; }
    .trend-stable { color: #ffd242; }
    .sensory-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      margin: 15px 0;
    }
    .sensory-item {
      text-align: center;
      padding: 10px;
      background-color: #3a3a3a;
      border-radius: 8px;
    }
    .sensory-value {
      font-size: 1.5em;
      font-weight: bold;
      margin: 5px 0;
    }
    .icon {
      font-size: 1.5em;
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Jrs Dort Comprehensive Health Dashboard</h1>
    <div class="date">April 8, 2025</div>
  </div>

  <div class="dashboard-grid">
    <!-- Morning Capability Assessment -->
    <div class="panel">
      <h2>🌅 Morning Capability Assessment</h2>
      
      <h3>Physical Resources</h3>
      <div class="rating-container">
        <span class="rating-label">Sleep Quality:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Sleep Duration:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Energy Level:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Pain Level:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Appetite/Nutrition:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Physical Coordination:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      
      <h3>Mental Resources</h3>
      <div class="rating-container">
        <span class="rating-label">Emotional Regulation:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Cognitive Clarity:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Stress Level:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Focus/Attention:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Working Memory:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      <div class="rating-container">
        <span class="rating-label">Task Initiation:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
    </div>

    <!-- Sensory Profile & Medication -->
    <div class="panel">
      <h2>🔍 Sensory Profile & Medication</h2>
      
      <h3>Sensory Processing</h3>
      <div class="sensory-grid">
        <div class="sensory-item">
          <div class="icon">👁️</div>
          <div>Visual</div>
          <div class="sensory-value">3/5</div>
        </div>
        <div class="sensory-item">
          <div class="icon">👂</div>
          <div>Auditory</div>
          <div class="sensory-value">2/5</div>
        </div>
        <div class="sensory-item">
          <div class="icon">👃</div>
          <div>Olfactory</div>
          <div class="sensory-value">4/5</div>
        </div>
        <div class="sensory-item">
          <div class="icon">👅</div>
          <div>Taste</div>
          <div class="sensory-value">3/5</div>
        </div>
        <div class="sensory-item">
          <div class="icon">✋</div>
          <div>Tactile</div>
          <div class="sensory-value">2/5</div>
        </div>
      </div>
      
      <div class="rating-container">
        <span class="rating-label">Sensory Overload Risk:</span>
        <div class="rating-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
          <span class="dot dot-empty"></span>
          <span class="dot dot-empty"></span>
        </div>
      </div>
      
      <h3>Current Sensory Environment</h3>
      <div class="support-needs">
        <div class="need-item checked">Quiet space</div>
        <div class="need-item">Dim lighting</div>
        <div class="need-item checked">Minimal people</div>
        <div class="need-item">Familiar sounds</div>
        <div class="need-item checked">Comfortable seating</div>
        <div class="need-item">Preferred temperature</div>
      </div>
      
      <h3>💊 Medication Tracker (BPD/ADHD/T1D)</h3>
      <table>
        <tr>
          <th>Medication</th>
          <th>AM</th>
          <th>PM</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>Stimulant</td>
          <td>✅</td>
          <td>❌</td>
          <td>Take before 9am</td>
        </tr>
        <tr>
          <td>Mood Stabilizer</td>
          <td>✅</td>
          <td>✅</td>
          <td>Monitor hydration</td>
        </tr>
        <tr>
          <td>Insulin</td>
          <td>✅</td>
          <td>✅</td>
          <td>With meals</td>
        </tr>
      </table>
      
      <h3>Blood Glucose Monitoring</h3>
      <div class="grid-3">
        <div class="mini-card">
          <h4>Current BG</h4>
          <div class="value">6.8</div>
          <div class="trend trend-stable">→ Stable</div>
        </div>
        <div class="mini-card">
          <h4>Daily Avg</h4>
          <div class="value">7.2</div>
          <div class="trend trend-down">↓ -0.3</div>
        </div>
        <div class="mini-card">
          <h4>Time in Range</h4>
          <div class="value">72%</div>
          <div class="trend trend-up">↑ +5%</div>
        </div>
      </div>
    </div>

    <!-- Support Needs & Emotional Regulation -->
    <div class="panel">
      <h2>🛠️ Support Needs & Emotional Regulation</h2>
      
      <h3>Today's Support Needs</h3>
      <div class="support-needs">
        <div class="need-item checked">Verbal prompts</div>
        <div class="need-item">Written instructions</div>
        <div class="need-item checked">Sensory reduction</div>
        <div class="need-item checked">Extended processing time</div>
        <div class="need-item">Physical assistance</div>
        <div class="need-item checked">Emotional co-regulation</div>
        <div class="need-item checked">Task initiation help</div>
        <div class="need-item">Structured breaks</div>
        <div class="need-item checked">Routine reminders</div>
        <div class="need-item">Decision support</div>
        <div class="need-item">Prioritization help</div>
        <div class="need-item checked">Time management</div>
      </div>
      
      <h3>🌡️ Emotional Regulation Scale</h3>
      <table>
        <tr>
          <th>Level</th>
          <th>Description</th>
          <th>Intervention</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>Centered</td>
          <td>Maintain routines</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>Rising Tension</td>
          <td>Proprioceptive exercises</td>
        </tr>
        <tr>
          <td>5-6</td>
          <td>Dark Wolf Emerges</td>
          <td>Scripted boundary phrase</td>
        </tr>
        <tr>
          <td>7-8</td>
          <td>Dissociative Tendencies</td>
          <td>Cold compress + focused breathing</td>
        </tr>
        <tr>
          <td>9-10</td>
          <td>Crisis Mode</td>
          <td>Emergency protocol activation</td>
        </tr>
      </table>
      
      <h3>Current Emotional State</h3>
      <div class="capacity-bar">
        <div class="capacity-marker" style="left: 44%"></div>
      </div>
      <div style="text-align: center; margin-top: 10px;">Level 4.4: Rising Tension</div>
      
      <h3>Active Triggers</h3>
      <div style="margin-top: 15px;">
        <span class="tag tag-red">Sleep Disruption</span>
        <span class="tag tag-orange">Social Demands</span>
        <span class="tag tag-yellow">Time Pressure</span>
        <span class="tag tag-blue">Routine Change</span>
      </div>
    </div>

    <!-- Daily Planning & Tracking -->
    <div class="panel">
      <h2>📋 Daily Planning & Tracking</h2>
      
      <h3>🧠 Daily Priorities</h3>
      <ul class="checkbox-list">
        <li><span class="checkbox checked"></span> Morning OT Routine (Energy Tracking)</li>
        <li><span class="checkbox"></span> 90-Minute Work Blocks [Family doc]</li>
        <li><span class="checkbox"></span> Woodworking/Grounding Session</li>
        <li><span class="checkbox"></span> Evening Reflection Journal</li>
        <li><span class="checkbox checked"></span> Medication Adherence</li>
        <li><span class="checkbox"></span> 30-min Physical Activity</li>
      </ul>
      
      <h3>Energy Management</h3>
      <div class="grid-3">
        <div class="mini-card">
          <h4>Starting Energy</h4>
          <div class="value">65%</div>
          <div class="energy-level">
            <span class="energy-indicator energy-moderate"></span>
            <span>Moderate</span>
          </div>
        </div>
        <div class="mini-card">
          <h4>Current Energy</h4>
          <div class="value">48%</div>
          <div class="energy-level">
            <span class="energy-indicator energy-moderate"></span>
            <span>Moderate</span>
          </div>
        </div>
        <div class="mini-card">
          <h4>Energy Forecast</h4>
          <div class="value">35%</div>
          <div class="energy-level">
            <span class="energy-indicator energy-low"></span>
            <span>Low (Evening)</span>
          </div>
        </div>
      </div>
      
      <h3>Task Complexity Management</h3>
      <div style="margin: 15px 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <span>Current Capacity: 48%</span>
          <span>Recommended Task Complexity: Medium-Low</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar" style="width: 48%"></div>
        </div>
      </div>
      
      <table>
        <tr>
          <th>Task Complexity</th>
          <th>Energy Required</th>
          <th>Recommended When</th>
        </tr>
        <tr>
          <td>High (Deep Work)</td>
          <td>70-100%</td>
          <td>Morning, After Rest</td>
        </tr>
        <tr>
          <td>Medium (Focused)</td>
          <td>40-70%</td>
          <td>Mid-day</td>
        </tr>
        <tr>
          <td>Low (Routine)</td>
          <td>20-40%</td>
          <td>Afternoon, Low Energy</td>
        </tr>
        <tr>
          <td>Minimal (Passive)</td>
          <td>0-20%</td>
          <td>Evening, Recovery</td>
        </tr>
      </table>
      
      <h3>🧘‍♂️ Recommended Grounding Techniques</h3>
      <ul>
        <li>5-4-3-2-1 Sensory Check</li>
        <li>Wood Texture Visualization</li>
        <li>"White Wolf" Mantra Repetition</li>
        <li>Progressive Muscle Relaxation</li>
      </ul>
    </div>

    <!-- Overall Capacity Summary -->
    <div class="panel full-width">
      <h2>📊 Overall Capacity & Recommendations</h2>
      
      <div class="grid-3">
        <div class="capacity-summary">
          <h3>Physical Capacity</h3>
          <p>Current: <span class="highlight">2.3/5</span></p>
          <p>7-Day Trend: <span class="trend trend-up">↑ +0.3</span></p>
          <div class="capacity-bar">
            <div class="capacity-marker" style="left: 46%"></div>
          </div>
        </div>
        
        <div class="capacity-summary">
          <h3>Mental Capacity</h3>
          <p>Current: <span class="highlight">2.0/5</span></p>
          <p>7-Day Trend: <span class="trend trend-stable">→ 0.0</span></p>
          <div class="capacity-bar">
            <div class="capacity-marker" style="left: 40%"></div>
          </div>
        </div>
        
        <div class="capacity-summary">
          <h3>Overall Capacity</h3>
          <p>Current: <span class="highlight">2.2/5</span></p>
          <p>7-Day Trend: <span class="trend trend-up">↑ +0.2</span></p>
          <div class="capacity-bar">
            <div class="capacity-marker" style="left: 44%"></div>
          </div>
        </div>
      </div>
      
      <h3>Today's Key Recommendations</h3>
      <ul>
        <li>Schedule 3 short breaks (15-20 min) throughout the day for sensory regulation</li>
        <li>Use written checklists for complex tasks due to reduced working memory</li>
        <li>Implement body doubling for task initiation challenges</li>
        <li>Maintain hydration schedule for medication effectiveness</li>
        <li>Limit social interactions to conserve emotional regulation resources</li>
        <li>Schedule recovery period after 3pm due to projected energy decline</li>
      </ul>
      
      <h3>🔄 Burnout Prevention</h3>
      <div style="display: flex; justify-content: space-between; margin: 15px 0;">
        <div>
          <p>Current Workload: <span class="highlight">72% Capacity</span></p>
          <p>Next Recovery Day: Friday PM</p>
        </div>
        <div>
          <p>Energy Reserves: 🟡 Moderate</p>
          <p>Consecutive Demanding Days: 2/3 (Limit)</p>
        </div>
      </div>
      
      <h3>🚨 Crisis Protocol</h3>
      <ol>
        <li>Activate "Safe Mode" screen filter</li>
        <li>Notify support network (Amanda/Chantel)</li>
        <li>Engage emergency DBT cards [Anxiety doc]</li>
        <li>Implement sensory reduction protocol (noise-canceling, dim lights)</li>
        <li>Use pre-scripted communication templates if verbal skills diminish</li>
      </ol>
    </div>
  </div>
</body>
</html>
