<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="300">
    <title>Health & Capability Dashboard</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Arial', sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .date {
            font-size: 1.5em;
            color: #4CAF50;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .card {
            background-color: #2d2d2d;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .card h2 {
            margin-top: 0;
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
        }
        
        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .status-good {
            background-color: #4CAF50;
        }
        
        .status-warning {
            background-color: #FFC107;
        }
        
        .status-alert {
            background-color: #F44336;
        }
        
        .metric {
            margin: 15px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .metric-label {
            font-weight: bold;
        }
        
        .metric-value {
            color: #4CAF50;
        }
        
        .progress-bar {
            width: 100%;
            height: 10px;
            background-color: #444;
            border-radius: 5px;
            margin-top: 5px;
        }
        
        .progress-fill {
            height: 100%;
            background-color: #4CAF50;
            border-radius: 5px;
            transition: width 0.3s ease;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Daily Health & Capability Monitor</h1>
            <div class="date"></div>
        </div>
        
        <div class="grid">
            <div class="card">
                <h2>Mental Health</h2>
                <div class="metric">
                    <span class="metric-label">Mood</span>
                    <span class="metric-value">
                        <span class="status-indicator status-good"></span>
                        Stable
                    </span>
                </div>
                <div class="metric">
                    <span class="metric-label">Anxiety Level</span>
                    <span class="metric-value">Low</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 30%;"></div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2>Physical Health</h2>
                <div class="metric">
                    <span class="metric-label">Energy Level</span>
                    <span class="metric-value">
                        <span class="status-indicator status-warning"></span>
                        Moderate
                    </span>
                </div>
                <div class="metric">
                    <span class="metric-label">Sleep Quality</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 70%;"></div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2>Daily Tasks</h2>
                <div class="metric">
                    <span class="metric-label">Focus Level</span>
                    <span class="metric-value">
                        <span class="status-indicator status-good"></span>
                        High
                    </span>
                </div>
                <div class="metric">
                    <span class="metric-label">Task Completion</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 85%;"></div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2>Support System</h2>
                <div class="metric">
                    <span class="metric-label">Social Connection</span>
                    <span class="metric-value">
                        <span class="status-indicator status-good"></span>
                        Active
                    </span>
                </div>
                <div class="metric">
                    <span class="metric-label">Support Access</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.querySelector('.date').textContent = now.toLocaleDateString('en-US', options);
        }
        
        // Update date every minute
        setInterval(updateDate, 60000);
        
        // Initial update
        document.addEventListener('DOMContentLoaded', updateDate);
    </script>
</body>
</html>
